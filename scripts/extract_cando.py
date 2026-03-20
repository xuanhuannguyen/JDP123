from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / ".vendor"))

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "extracted-text"


def main() -> None:
    OUTPUT_DIR.mkdir(exist_ok=True)

    for pdf_path in sorted(ROOT.glob("JPD123- Cando *.pdf")):
        reader = PdfReader(str(pdf_path))
        text = "\n\n".join((page.extract_text() or "") for page in reader.pages)
        output_path = OUTPUT_DIR / f"{pdf_path.stem}.txt"
        output_path.write_text(text, encoding="utf-8")
        print(f"Extracted {pdf_path.name} -> {output_path.name}")


if __name__ == "__main__":
    main()
