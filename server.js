const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { URL } = require("node:url");

function loadDotEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex < 0) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^['"]|['"]$/g, "");

    if (key && !process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadDotEnv();

const PORT = Number(process.env.PORT || 3000);
const PUBLIC_DIR = path.join(__dirname, "public");
const DEFAULT_VOICE = process.env.OPENAI_TTS_VOICE || "alloy";
const DEFAULT_MODEL = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8"
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function safePathname(urlPath) {
  const normalized = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(PUBLIC_DIR, normalized === path.sep ? "index.html" : normalized);
  if (!filePath.startsWith(PUBLIC_DIR)) {
    return null;
  }
  return filePath;
}

async function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

async function handleTts(req, res) {
  if (!process.env.OPENAI_API_KEY) {
    sendJson(res, 503, {
      error: "OPENAI_API_KEY is missing.",
      fallback: "browser-speech"
    });
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(await readBody(req));
  } catch {
    sendJson(res, 400, { error: "Invalid JSON body." });
    return;
  }

  const input = typeof parsed.text === "string" ? parsed.text.trim() : "";
  const voice = typeof parsed.voice === "string" ? parsed.voice : DEFAULT_VOICE;
  const responseFormat = parsed.format === "wav" ? "wav" : "mp3";
  const instructions =
    typeof parsed.instructions === "string" && parsed.instructions.trim()
      ? parsed.instructions.trim()
      : "Speak naturally, clearly, and slightly slowly for beginner Japanese listening practice.";

  if (!input) {
    sendJson(res, 400, { error: "text is required." });
    return;
  }

  const upstream = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: DEFAULT_MODEL,
      voice,
      input,
      instructions,
      response_format: responseFormat
    })
  });

  if (!upstream.ok) {
    const errorText = await upstream.text();
    sendJson(res, upstream.status, {
      error: "TTS generation failed.",
      details: errorText
    });
    return;
  }

  const audioBuffer = Buffer.from(await upstream.arrayBuffer());
  res.writeHead(200, {
    "Content-Type": responseFormat === "wav" ? "audio/wav" : "audio/mpeg",
    "Cache-Control": "no-store"
  });
  res.end(audioBuffer);
}

function handleStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = safePathname(pathname);

  if (!filePath) {
    sendJson(res, 403, { error: "Forbidden" });
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendJson(res, 404, { error: "Not found" });
      } else {
        sendJson(res, 500, { error: "Failed to read file." });
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Cache-Control": ext === ".html" ? "no-store" : "public, max-age=300"
    });
    res.end(content);
  });
}

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    sendJson(res, 400, { error: "Invalid request." });
    return;
  }

  if (req.method === "GET" && req.url.startsWith("/api/health")) {
    sendJson(res, 200, {
      ok: true,
      ttsConfigured: Boolean(process.env.OPENAI_API_KEY),
      defaultVoice: DEFAULT_VOICE,
      defaultModel: DEFAULT_MODEL
    });
    return;
  }

  if (req.method === "POST" && req.url.startsWith("/api/tts")) {
    try {
      await handleTts(req, res);
    } catch (error) {
      sendJson(res, 500, {
        error: "Unexpected server error.",
        details: error instanceof Error ? error.message : String(error)
      });
    }
    return;
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    sendJson(res, 405, { error: "Method not allowed." });
    return;
  }

  handleStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Spreaking app running at http://localhost:${PORT}`);
});
