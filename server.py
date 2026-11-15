import hashlib
import subprocess
import threading
from pathlib import Path

from flask import Flask, abort, request, send_file, send_from_directory

ROOT = Path(__file__).resolve().parent
CACHE = ROOT / "cache"
CACHE.mkdir(exist_ok=True)

app = Flask(__name__)
lock = threading.Lock()

@app.get("/api/tts")
def tts():
    text = " ".join((request.args.get("text") or "").split())
    if len(text) < 1 or len(text) > 2500:
        abort(400)

    name = hashlib.sha256(text.encode("utf-8")).hexdigest()[:24]
    final = CACHE / f"{name}.mp3"
    if not final.exists():
        with lock:
            if not final.exists():
                tmp = CACHE / f"{name}.tmp.mp3"
                try:
                    subprocess.run(
                        [
                            "edge-tts",
                            "--voice", "vi-VN-HoaiMyNeural",
                            "--rate=+0%",
                            "--text", text,
                            "--write-media", str(tmp),
                        ],
                        check=True,
                        timeout=90,
                    )
                    tmp.replace(final)
                except Exception:
                    tmp.unlink(missing_ok=True)
                    abort(502)

    return send_file(final, mimetype="audio/mpeg", conditional=True, max_age=86400 * 30)

@app.get("/")
def home():
    return send_from_directory(ROOT, "index2.html")

@app.get("/<path:path>")
def files(path):
    if path.startswith(("cache/", ".venv/")) or path.endswith(".py"):
        abort(404)
    return send_from_directory(ROOT, path)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, threaded=True)