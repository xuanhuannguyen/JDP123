const lessons = window.CANDO_LESSONS || [];

const state = {
  currentLessonId: lessons[0]?.id ?? null,
  currentModuleId: lessons[0]?.modules[0]?.id ?? null,
  currentPromptId: lessons[0]?.modules[0]?.prompts[0]?.id ?? null,
  ttsConfigured: false,
  answerVisible: false,
  recognition: null,
  recognizing: false
};

const lessonListEl = document.querySelector("#lesson-list");
const moduleMetaEl = document.querySelector("#module-meta");
const promptListEl = document.querySelector("#prompt-list");
const heroTitleEl = document.querySelector("#hero-title");
const heroCopyEl = document.querySelector("#hero-copy");
const lessonCountEl = document.querySelector("#lesson-count");
const moduleCountEl = document.querySelector("#module-count");
const promptCountEl = document.querySelector("#prompt-count");
const ttsStatusEl = document.querySelector("#tts-status");
const voiceSelectEl = document.querySelector("#voice-select");
const playButtonEl = document.querySelector("#play-button");
const toggleAnswerButtonEl = document.querySelector("#toggle-answer-button");
const recognitionButtonEl = document.querySelector("#recognition-button");
const promptJapaneseEl = document.querySelector("#prompt-japanese");
const promptTranslationEl = document.querySelector("#prompt-translation");
const sampleAnswerEl = document.querySelector("#sample-answer");
const hintListEl = document.querySelector("#hint-list");
const speechOutputEl = document.querySelector("#speech-output");
const playerEl = document.querySelector("#player");
const playerStatusEl = document.querySelector("#player-status");

const SpeechRecognitionApi = window.SpeechRecognition || window.webkitSpeechRecognition;
const isGitHubPages = window.location.hostname.endsWith("github.io");
const apiBase = isGitHubPages ? null : ".";

function flattenModules() {
  return lessons.flatMap((lesson) => lesson.modules.map((module) => ({ lesson, module })));
}

function getCurrentLesson() {
  return lessons.find((lesson) => lesson.id === state.currentLessonId) ?? lessons[0];
}

function getCurrentModule() {
  const lesson = getCurrentLesson();
  return lesson.modules.find((module) => module.id === state.currentModuleId) ?? lesson.modules[0];
}

function getCurrentPrompt() {
  const module = getCurrentModule();
  return module.prompts.find((prompt) => prompt.id === state.currentPromptId) ?? module.prompts[0];
}

function setCurrentModule(moduleId) {
  const found = flattenModules().find((item) => item.module.id === moduleId);
  if (!found) return;

  state.currentLessonId = found.lesson.id;
  state.currentModuleId = found.module.id;
  state.currentPromptId = found.module.prompts[0]?.id ?? null;
  state.answerVisible = false;
  render();
}

function setCurrentPrompt(promptId) {
  state.currentPromptId = promptId;
  state.answerVisible = false;
  renderPromptDetail();
}

function renderLessonList() {
  lessonListEl.innerHTML = "";

  lessons.forEach((lesson) => {
    const button = document.createElement("button");
    button.className = "lesson-button";
    if (lesson.id === state.currentLessonId) {
      button.classList.add("active");
    }

    button.innerHTML = `
      <strong>Bài ${lesson.lesson}</strong>
      <span>${lesson.modules.length} can-do</span>
    `;

    button.addEventListener("click", () => {
      state.currentLessonId = lesson.id;
      state.currentModuleId = lesson.modules[0]?.id ?? null;
      state.currentPromptId = lesson.modules[0]?.prompts[0]?.id ?? null;
      state.answerVisible = false;
      render();
    });

    lessonListEl.appendChild(button);
  });
}

function renderModuleMeta() {
  const lesson = getCurrentLesson();
  const module = getCurrentModule();

  moduleMetaEl.innerHTML = `
    <div class="practice-card">
      <span class="module-badge">Bài ${lesson.lesson} · ${module.slot}</span>
      <h3>${module.skill}</h3>
      <p class="module-goal">${module.goal}</p>
      <div class="actions">
        ${lesson.modules
          .map(
            (item) => `
              <button class="secondary module-jump" data-module-id="${item.id}">
                ${item.slot}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;

  moduleMetaEl.querySelectorAll(".module-jump").forEach((button) => {
    if (button.dataset.moduleId === module.id) {
      button.style.borderColor = "var(--accent)";
      button.style.background = "#fff4ef";
    }
    button.addEventListener("click", () => setCurrentModule(button.dataset.moduleId));
  });
}

function renderPromptList() {
  const module = getCurrentModule();
  promptListEl.innerHTML = "";

  module.prompts.forEach((prompt, index) => {
    const card = document.createElement("div");
    card.className = "prompt-card";
    if (prompt.id === state.currentPromptId) {
      card.classList.add("active");
    }

    card.innerHTML = `
      <div class="prompt-top">
        <strong>Câu ${index + 1}</strong>
        <span class="prompt-meta">${module.slot}</span>
      </div>
      <p>${prompt.japanese}</p>
      <p class="translation">${prompt.vi}</p>
    `;

    card.addEventListener("click", () => setCurrentPrompt(prompt.id));
    promptListEl.appendChild(card);
  });
}

function renderPromptDetail() {
  const module = getCurrentModule();
  const prompt = getCurrentPrompt();

  heroTitleEl.textContent = `${module.slot}: ${module.skill}`;
  heroCopyEl.textContent = module.goal;
  promptJapaneseEl.textContent = prompt?.japanese ?? "Chưa chọn câu hỏi";
  promptTranslationEl.textContent = prompt?.vi ?? "";
  playButtonEl.disabled = !prompt;
  toggleAnswerButtonEl.disabled = !prompt;
  recognitionButtonEl.disabled = !SpeechRecognitionApi || !prompt;

  sampleAnswerEl.textContent = state.answerVisible
    ? prompt.sampleAnswer
    : "Ẩn mẫu trả lời. Hãy tự nói trước, sau đó mới mở gợi ý.";

  hintListEl.innerHTML = "";
  if (state.answerVisible && prompt) {
    prompt.hints.forEach((hint) => {
      const item = document.createElement("li");
      item.textContent = hint;
      hintListEl.appendChild(item);
    });
  }
}

function renderStats() {
  lessonCountEl.textContent = String(lessons.length);
  moduleCountEl.textContent = String(flattenModules().length);
  promptCountEl.textContent = String(flattenModules().reduce((sum, item) => sum + item.module.prompts.length, 0));
}

async function checkHealth() {
  if (!apiBase) {
    state.ttsConfigured = false;
    ttsStatusEl.textContent = "Đang chạy trên GitHub Pages. OpenAI TTS server-side bị tắt, website sẽ dùng giọng đọc của trình duyệt.";
    return;
  }

  try {
    const response = await fetch(`${apiBase}/api/health`);
    const data = await response.json();
    state.ttsConfigured = Boolean(data.ttsConfigured);
    ttsStatusEl.textContent = data.ttsConfigured
      ? `OpenAI TTS đã sẵn sàng (${data.defaultModel}).`
      : "Chưa có OPENAI_API_KEY. Website sẽ fallback sang giọng đọc của trình duyệt.";
  } catch {
    ttsStatusEl.textContent = "Không kiểm tra được trạng thái server. Sẽ dùng fallback của trình duyệt nếu có.";
  }
}

function speakWithBrowser(text) {
  if (!("speechSynthesis" in window)) {
    playerStatusEl.textContent = "Trình duyệt này không hỗ trợ phát giọng đọc.";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.92;
  playerStatusEl.textContent = "Đang phát bằng giọng đọc của trình duyệt.";
  window.speechSynthesis.speak(utterance);
}

async function playPromptAudio() {
  const prompt = getCurrentPrompt();
  if (!prompt) return;

  playerStatusEl.textContent = "Đang tạo audio...";

  if (!state.ttsConfigured) {
    speakWithBrowser(prompt.japanese);
    return;
  }

  try {
    const response = await fetch(`${apiBase}/api/tts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: prompt.japanese,
        voice: voiceSelectEl.value,
        format: "mp3"
      })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      playerStatusEl.textContent = error.error || "Không tạo được audio từ API.";
      speakWithBrowser(prompt.japanese);
      return;
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    playerEl.src = url;
    await playerEl.play();
    playerStatusEl.textContent = "Đang phát bằng OpenAI TTS.";
  } catch {
    playerStatusEl.textContent = "Lỗi mạng khi gọi TTS. Chuyển sang giọng đọc trình duyệt.";
    speakWithBrowser(prompt.japanese);
  }
}

function setupRecognition() {
  if (!SpeechRecognitionApi) {
    speechOutputEl.textContent = "Trình duyệt này chưa hỗ trợ SpeechRecognition.";
    return;
  }

  const recognition = new SpeechRecognitionApi();
  recognition.lang = "ja-JP";
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onstart = () => {
    state.recognizing = true;
    speechOutputEl.textContent = "Đang nghe bạn nói...";
    speechOutputEl.classList.add("listening");
    recognitionButtonEl.textContent = "Đang nghe...";
  };

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0]?.transcript ?? "")
      .join(" ");
    speechOutputEl.textContent = transcript || "Chưa nhận được nội dung.";
  };

  recognition.onerror = (event) => {
    speechOutputEl.textContent = `Nhận diện giọng nói lỗi: ${event.error}`;
  };

  recognition.onend = () => {
    state.recognizing = false;
    speechOutputEl.classList.remove("listening");
    recognitionButtonEl.textContent = "Bắt đầu nói";
  };

  state.recognition = recognition;
}

function toggleRecognition() {
  if (!state.recognition) return;
  if (state.recognizing) {
    state.recognition.stop();
  } else {
    state.recognition.start();
  }
}

function render() {
  renderLessonList();
  renderModuleMeta();
  renderPromptList();
  renderPromptDetail();
  renderStats();
}

playButtonEl.addEventListener("click", playPromptAudio);
toggleAnswerButtonEl.addEventListener("click", () => {
  state.answerVisible = !state.answerVisible;
  renderPromptDetail();
});
recognitionButtonEl.addEventListener("click", toggleRecognition);

setupRecognition();
render();
checkHealth();
