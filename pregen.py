import subprocess, threading, hashlib, re
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

ROOT = Path(__file__).resolve().parent
CACHE = ROOT / "cache"
CACHE.mkdir(exist_ok=True)
DATA_DIR = ROOT / "data"

if not DATA_DIR.exists():
    print(f"Khong tim thay: {DATA_DIR}")
    raise SystemExit(1)

VI_CHARS = set("àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ")
def has_vi(s): return any(c in VI_CHARS for c in s.lower())

STR_RE = re.compile(r"""["'`]([^"'`\n\\]{3,500})["'`]""")

texts = set()
files_scanned = 0
for f in sorted(DATA_DIR.rglob("*.js")):
    files_scanned += 1
    try:
        src = f.read_text(encoding="utf-8")
    except Exception as e:
        print(f"  skip {f.name}: {e}"); continue
    for m in STR_RE.finditer(src):
        s = m.group(1).strip()
        if not s or len(s) < 3: continue
        if "~" in s: continue                       # collocation placeholder
        if not has_vi(s): continue                  # bo chuoi khong co dau
        if s.startswith(("data/", "http://", "https://", "./", "../", "cache/")): continue
        if s.endswith((".js", ".html", ".css", ".mp3")): continue
        texts.add(s)

print(f"Quet {files_scanned} file. Tim thay {len(texts)} cau tieng Viet.")
if not texts:
    print("KHONG tim thay cau nao. Kiem tra data/A2 co vocabNN.js + contentNN.js khong?")
    raise SystemExit(0)

texts = sorted(texts)
print(f"Bat dau tao {len(texts)} mp3 (4 worker, uoc tinh {len(texts)*2.81/4/60:.1f} phut)...\n")

lock = threading.Lock()
done = [0, 0]  # ok, processed

def build(t):
    name = hashlib.sha256(t.encode("utf-8")).hexdigest()[:24]
    out = CACHE / f"{name}.mp3"
    if out.exists():
        with lock:
            done[0] += 1; done[1] += 1
        return
    tmp = CACHE / f"{name}.tmp.mp3"
    try:
        subprocess.run(
            ["edge-tts", "--voice", "vi-VN-HoaiMyNeural", "--rate=+0%",
             "--text", t, "--write-media", str(tmp)],
            check=True, timeout=90,
            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        )
        tmp.replace(out)
        with lock:
            done[0] += 1; done[1] += 1
            print(f"[{done[1]}/{len(texts)}] OK   {t[:50]}")
    except Exception as e:
        tmp.unlink(missing_ok=True)
        with lock:
            done[1] += 1
            print(f"[{done[1]}/{len(texts)}] FAIL {t[:50]} | {e}")

with ThreadPoolExecutor(max_workers=4) as pool:
    for _ in as_completed([pool.submit(build, t) for t in texts]):
        pass

print(f"\nXONG. {done[0]}/{len(texts)} file mp3 trong {CACHE}")