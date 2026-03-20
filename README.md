# Spreaking Cando 4-7

Website luyện nghe và nói cho các phần can-do từ bài 4 đến bài 7 của JPD123.

## Chạy ứng dụng

```bash
node server.js
```

Mở `http://localhost:3000`.

## Bật OpenAI TTS

1. Sao chép `.env.example` thành `.env`
2. Đặt `OPENAI_API_KEY`
3. Chạy app bằng PowerShell:

```powershell
$env:OPENAI_API_KEY="your_key"
node server.js
```

Nếu không có API key, website vẫn chạy và dùng `speechSynthesis` của trình duyệt để đọc câu hỏi.

## Deploy lên GitHub Pages

GitHub Pages chỉ host file tĩnh, nên bản public trên GitHub sẽ:

- chạy toàn bộ giao diện luyện tập
- dùng `speechSynthesis` và `SpeechRecognition` của trình duyệt
- không dùng được OpenAI TTS server-side trừ khi bạn tách backend ra một host khác

Sau khi push repo lên GitHub:

1. Tạo repo mới trên GitHub
2. Push source code lên nhánh `main`
3. Vào `Settings > Pages`, chọn `GitHub Actions`
4. Workflow trong `.github/workflows/deploy-pages.yml` sẽ tự deploy thư mục `public`

URL public sẽ có dạng:

```text
https://<github-username>.github.io/<repo-name>/
```

## Push lên GitHub từ máy này

```powershell
git init
git branch -M main
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<github-username>/<repo-name>.git
git push -u origin main
```

Đừng commit file `.env` chứa API key.

## Trích lại text từ PDF

```bash
python scripts/extract_cando.py
```
