document.addEventListener("DOMContentLoaded", () => {
  const bookSelector = document.getElementById("book-selector");
  const sidebarList = document.getElementById("lesson-sidebar-list");
  const sidebar = document.getElementById("lesson-sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");

  const DEFAULT_BOOKS = {
    A1: { nameVi: "Tiếng Việt Trình Độ A - Quyển 1 (A1)", nameZh: "实用越南语初级教程（第一册）", lessons: [] },
    A2: {
      nameVi: "Tiếng Việt Trình Độ A - Quyển 2 (A2)",
      nameZh: "实用越南语初级教程（第二册）",
      lessons: [
        { id: 15, titleVi: "Bài 15: Ngày mai, trời thế nào?", titleZh: "第十五课：明天天气怎么样？", ready: true },
        { id: 16, titleVi: "Bài 16: Bưu điện nào gần đây nhất?", titleZh: "第十六课：哪家邮局离这儿最近？", ready: true },
        { id: 17, titleVi: "Bài 17: Cái này giá bao nhiêu?", titleZh: "第十七课：这个多少钱？", ready: true }
      ]
    },
    B1: { nameVi: "Tiếng Việt Trình Độ B - Quyển 1 (B1)", nameZh: "实用越南语中级教程（第一册）", lessons: [] },
    B2: { nameVi: "Tiếng Việt Trình Độ B - Quyển 2 (B2)", nameZh: "实用越南语中级教程（第二册）", lessons: [] },
    C1: { nameVi: "Tiếng Việt Trình Độ C - Quyển 1 (C1)", nameZh: "实用越南语高级教程（第一册）", lessons: [] },
    C2: { nameVi: "Tiếng Việt Trình Độ C - Quyển 2 (C2)", nameZh: "实用越南语高级教程（第二册）", lessons: [] }
  };

  const BOOKS_DATA = window.BOOKS_INDEX || DEFAULT_BOOKS;

  // Đóng/mở Sidebar trên Mobile
  function openMobileSidebar() {
    if (sidebar) sidebar.classList.remove("-translate-x-full");
    if (backdrop) backdrop.classList.remove("hidden");
  }
  function closeMobileSidebar() {
    if (sidebar) sidebar.classList.add("-translate-x-full");
    if (backdrop) backdrop.classList.add("hidden");
  }

  const mobileSidebarBtn = document.getElementById("mobile-sidebar-btn");
  const closeSidebarBtn = document.getElementById("close-sidebar-btn");
  if (mobileSidebarBtn) mobileSidebarBtn.addEventListener("click", openMobileSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", closeMobileSidebar);
  if (backdrop) backdrop.addEventListener("click", closeMobileSidebar);

  // ========== TTS tĩnh bằng Web Speech API (hỗ trợ chọn giọng & Tạm dừng/Tiếp tục) ==========
  let _voicesCache = [];
  let _voicesReady = false;
  let _activePassageBtn = null;
  const voiceSelector = document.getElementById("voice-selector");

  function _getViVoices(list) {
    return (list || []).filter(
      (v) =>
        (v.lang && v.lang.toLowerCase().startsWith("vi")) ||
        /vietnam|vietnamese|tiếng việt|hoaimy|namminh|linh/i.test(v.name || "")
    );
  }

  function _formatVoiceLabel(v) {
    let label = v.name
      .replace(/Microsoft\s+/i, "")
      .replace(/Online\s*\(Natural\)\s*-\s*/i, "")
      .replace(/Vietnamese\s*\(Vietnam\)/i, "")
      .replace(/\(Vietnam\)/i, "")
      .trim();

    if (/HoaiMy/i.test(v.name)) label += " (Nữ - Miền Bắc)";
    else if (/NamMinh/i.test(v.name)) label += " (Nam - Miền Bắc)";
    else if (/An\b/i.test(v.name)) label += " (Nam - Miền Bắc)";
    else if (/Google/i.test(v.name)) label += " (Nữ - Miền Nam)";
    else if (/Linh/i.test(v.name)) label += " (Nữ - Apple)";

    return label || v.name;
  }

  function _populateVoiceDropdown(allVoices) {
    if (!voiceSelector) return;
    const viVoices = _getViVoices(allVoices);
    const savedVoiceName = localStorage.getItem("vn_speak_voice") || "";

    viVoices.sort((a, b) => {
      const score = (v) => {
        if (/HoaiMy/i.test(v.name)) return 1;
        if (/NamMinh/i.test(v.name)) return 2;
        if (/An\b/i.test(v.name)) return 3;
        return 10;
      };
      return score(a) - score(b);
    });

    const optionsHtml = [
      `<option value="">Giọng: Tự động (Ưu tiên Bắc)</option>`,
      ...viVoices.map(
        (v) =>
          `<option value="${v.name.replace(/"/g, "&quot;")}" ${
            v.name === savedVoiceName ? "selected" : ""
          }>${_formatVoiceLabel(v)}</option>`
      )
    ];

    voiceSelector.innerHTML = optionsHtml.join("");
  }

  if (voiceSelector) {
    voiceSelector.addEventListener("change", () => {
      localStorage.setItem("vn_speak_voice", voiceSelector.value);
      window.speakVi("Xin chào, đây là giọng đọc tiếng Việt.", 0.95);
    });
  }

  function _loadVoices() {
    return new Promise((resolve) => {
      const list = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
      if (list.length) {
        _voicesCache = list;
        _voicesReady = true;
        _populateVoiceDropdown(list);
        resolve(list);
        return;
      }
      if (!window.speechSynthesis) {
        resolve([]);
        return;
      }
      window.speechSynthesis.onvoiceschanged = () => {
        _voicesCache = window.speechSynthesis.getVoices();
        _voicesReady = true;
        _populateVoiceDropdown(_voicesCache);
        resolve(_voicesCache);
      };
      setTimeout(() => {
        _voicesCache = window.speechSynthesis.getVoices();
        _voicesReady = true;
        _populateVoiceDropdown(_voicesCache);
        resolve(_voicesCache);
      }, 400);
    });
  }

  function _pickViVoice() {
    const voices = _voicesCache.length ? _voicesCache : (window.speechSynthesis ? window.speechSynthesis.getVoices() : []);
    const viVoices = _getViVoices(voices);
    const chosenName = (voiceSelector && voiceSelector.value) || localStorage.getItem("vn_speak_voice") || "";

    if (chosenName) {
      const exact = viVoices.find((v) => v.name === chosenName);
      if (exact) return exact;
    }

    return (
      viVoices.find((v) => /HoaiMy/i.test(v.name || "")) ||
      viVoices.find((v) => /NamMinh/i.test(v.name || "")) ||
      viVoices.find((v) => /Microsoft\s+An/i.test(v.name || "")) ||
      viVoices.find((v) => v.lang === "vi-VN" || v.lang === "vi_VN") ||
      viVoices[0] ||
      null
    );
  }

  function _showTtsToast(msg) {
    let toast = document.getElementById("tts-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "tts-toast";
      toast.style.cssText =
        "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999;max-width:360px;padding:12px 16px;border-radius:12px;background:#1e293b;color:#fff;font-size:13px;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.25);";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.display = "block";
    clearTimeout(toast._t);
    toast._t = setTimeout(() => {
      toast.style.display = "none";
    }, 4000);
  }

  // Đặt lại giao diện nút Nghe cả đoạn về trạng thái mặc định
  function _resetPassageBtn(btn) {
    if (!btn) return;
    const defaultLabel = btn.dataset.defaultLabel || "Nghe cả đoạn";
    const defaultIcon = btn.dataset.defaultIcon || "fa-headphones";
    const baseColor = btn.dataset.baseColor || "bg-emerald-600 hover:bg-emerald-700";

    btn.className = `${baseColor} text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer transition`;
    btn.innerHTML = `<i class="fa-solid ${defaultIcon}"></i> ${defaultLabel}`;

    const restartBtn = btn.parentElement ? btn.parentElement.querySelector(".restart-passage-btn") : null;
    if (restartBtn) restartBtn.classList.add("hidden");

    if (_activePassageBtn === btn) _activePassageBtn = null;
  }

  // Cập nhật giao diện nút Nghe cả đoạn theo trạng thái (playing | paused)
  function _setPassageBtnState(btn, state) {
    if (!btn) return;
    const restartBtn = btn.parentElement ? btn.parentElement.querySelector(".restart-passage-btn") : null;
    if (restartBtn) restartBtn.classList.remove("hidden");

    if (state === "playing") {
      btn.className = "bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer transition";
      btn.innerHTML = `<i class="fa-solid fa-pause"></i> Tạm dừng`;
    } else if (state === "paused") {
      btn.className = "bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer transition";
      btn.innerHTML = `<i class="fa-solid fa-play"></i> Tiếp tục`;
    }
  }

  // Điều khiển Nghe cả đoạn / Tạm dừng / Tiếp tục / Nghe lại từ đầu
  window.togglePassageAudio = function (btn, text, forceRestart = false) {
    if (!window.speechSynthesis) {
      _showTtsToast("Trình duyệt không hỗ trợ đọc văn bản. Hãy dùng Chrome hoặc Edge.");
      return;
    }

    // Nếu đang thao tác trên chính nút này và không yêu cầu phát lại từ đầu
    if (!forceRestart && _activePassageBtn === btn) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        _setPassageBtnState(btn, "playing");
        return;
      }
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        _setPassageBtnState(btn, "paused");
        return;
      }
    }

    // Reset nút đoạn khác nếu đang mở
    if (_activePassageBtn && _activePassageBtn !== btn) {
      _resetPassageBtn(_activePassageBtn);
    }

    _activePassageBtn = btn;
    _setPassageBtnState(btn, "playing");

    window.speakVi(text, 0.85, null, () => {
      _resetPassageBtn(btn);
    });
  };

  window.restartPassageAudio = function (restartBtn, text) {
    const mainBtn = restartBtn.parentElement ? restartBtn.parentElement.querySelector(".passage-audio-btn") : null;
    if (mainBtn) {
      window.togglePassageAudio(mainBtn, text, true);
    }
  };

  // Hàm phát âm tiếng Việt – dùng Web Speech API (không cần server)
  window.speakVi = async function (text, rate = 0.85, el = null, onFinishCallback = null) {
    const clean = String(text || "").replace(/\s+/g, " ").trim();
    if (!clean) return;

    if (!window.speechSynthesis) {
      _showTtsToast("Trình duyệt không hỗ trợ đọc văn bản. Hãy dùng Chrome hoặc Edge.");
      return;
    }

    // Nếu bấm đọc từ/câu lẻ trong khi đang nghe cả đoạn -> reset nút nghe cả đoạn
    if (!onFinishCallback && _activePassageBtn) {
      _resetPassageBtn(_activePassageBtn);
    }

    const saved = Number(localStorage.getItem("vn_speak_rate") || "0.85");
    const base = Number.isFinite(saved) ? saved : 0.85;
    const speed = rate <= 0.7 ? Math.max(0.5, base * 0.75) : base;

    // Highlight nút đang đọc
    document.querySelectorAll(".speaking-pill").forEach((item) => {
      item.classList.remove("speaking-pill", "ring-2", "ring-emerald-400", "bg-emerald-200");
    });
    if (el) el.classList.add("speaking-pill", "ring-2", "ring-emerald-400", "bg-emerald-200");

    if (!_voicesReady) await _loadVoices();

    window.speechSynthesis.cancel();
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();

    const utt = new SpeechSynthesisUtterance(clean);
    utt.lang = "vi-VN";
    utt.rate = Math.min(1.2, Math.max(0.5, speed));
    utt.pitch = 1;
    utt.volume = 1;

    const voice = _pickViVoice();
    if (voice) {
      utt.voice = voice;
      utt.lang = voice.lang || "vi-VN";
    }

    utt.onend = () => {
      if (el) el.classList.remove("speaking-pill", "ring-2", "ring-emerald-400", "bg-emerald-200");
      if (typeof onFinishCallback === "function") onFinishCallback();
    };
    utt.onerror = (e) => {
      if (el) el.classList.remove("speaking-pill", "ring-2", "ring-emerald-400", "bg-emerald-200");
      if (typeof onFinishCallback === "function") onFinishCallback();
      if (e.error === "not-allowed") {
        _showTtsToast("Trình duyệt chặn phát âm. Hãy click vào trang rồi thử lại.");
      } else if (e.error === "language-unavailable" || e.error === "synthesis-unavailable") {
        _showTtsToast("Không tìm thấy giọng tiếng Việt. Cài giọng Việt trong Cài đặt hệ thống.");
      } else if (e.error !== "interrupted" && e.error !== "canceled") {
        _showTtsToast("Không đọc được. Thử lại hoặc kiểm tra loa.");
      }
    };

    window.speechSynthesis.speak(utt);

    setTimeout(() => {
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    }, 40);
  };

  if (window.speechSynthesis) _loadVoices();

  // Hàm tạo Tab con (Sub-tabs)
  function buildSubTabs(container, items) {
    if (!container) return;
    if (!items || !items.length) {
      container.innerHTML = `<p class="text-sm text-slate-400 py-4">Chưa có nội dung cho phần này.</p>`;
      return;
    }

    const navHtml = items
      .map(
        (item, idx) => `
        <button
          type="button"
          data-sub-idx="${idx}"
          class="sub-tab-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer flex items-center gap-1.5 ${
            idx === 0
              ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
              : "bg-white text-slate-700 border-slate-200 hover:bg-emerald-50 hover:border-emerald-300"
          }"
        >
          <span>${item.labelVi}</span>
          ${item.labelZh ? `<span class="zh-text font-normal opacity-85">(${item.labelZh})</span>` : ""}
        </button>
      `
      )
      .join("");

    const panelsHtml = items
      .map(
        (item, idx) => `
        <div class="sub-tab-panel ${idx === 0 ? "" : "hidden"}" data-sub-panel="${idx}">
          ${item.contentHtml}
        </div>
      `
      )
      .join("");

    container.innerHTML = `
      <div class="flex flex-wrap items-center gap-2 mb-5 pb-3 border-b border-slate-200">
        ${navHtml}
      </div>
      <div>${panelsHtml}</div>
    `;

    const btns = container.querySelectorAll(".sub-tab-btn");
    const panels = container.querySelectorAll(".sub-tab-panel");

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetIdx = btn.dataset.subIdx;
        btns.forEach((b) => {
          b.classList.remove("bg-emerald-600", "text-white", "border-emerald-600", "shadow-xs");
          b.classList.add("bg-white", "text-slate-700", "border-slate-200");
        });
        btn.classList.add("bg-emerald-600", "text-white", "border-emerald-600", "shadow-xs");
        btn.classList.remove("bg-white", "text-slate-700", "border-slate-200");

        panels.forEach((p) => {
          p.classList.toggle("hidden", p.dataset.subPanel !== targetIdx);
        });
      });
    });
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve();
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error(`Không tìm thấy hoặc lỗi cú pháp ở file: ${src}`));
      document.body.appendChild(s);
    });
  }

  // Render danh sách bài ở Sidebar trái
  function renderSidebarLessons(bookCode, selectedLessonId = null) {
    const book = BOOKS_DATA[bookCode];
    const headerVi = document.getElementById("book-header-vi");
    const headerZh = document.getElementById("book-header-zh");
    if (book && headerVi) headerVi.textContent = book.nameVi;
    if (book && headerZh) headerZh.textContent = book.nameZh;

    if (!sidebarList) return null;

    if (!book || !book.lessons || !book.lessons.length) {
      sidebarList.innerHTML = `
        <div class="text-center py-8 px-3 text-slate-400 text-xs">
          <i class="fa-solid fa-folder-open text-2xl mb-2 block"></i>
          Chưa có bài học cho quyển ${bookCode}
        </div>`;
      return null;
    }

    const firstReady = book.lessons.find((l) => l.ready);
    const currentId = selectedLessonId || (firstReady ? firstReady.id : null);

    sidebarList.innerHTML = book.lessons
      .map((l) => {
        const isActive = Number(l.id) === Number(currentId);
        if (!l.ready) {
          return `
            <div class="px-3 py-2.5 rounded-xl border border-transparent bg-slate-50/70 text-slate-400 cursor-not-allowed select-none">
              <div class="flex items-center justify-between gap-2">
                <span class="text-xs font-semibold">${l.titleVi}</span>
                <i class="fa-solid fa-lock text-[10px]"></i>
              </div>
              <p class="zh-text text-[11px] mt-0.5">${l.titleZh}</p>
            </div>
          `;
        }

        return `
          <button
            type="button"
            data-lesson-id="${l.id}"
            class="lesson-nav-item w-full text-left px-3 py-2.5 rounded-xl border transition cursor-pointer ${
              isActive
                ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                : "bg-white hover:bg-emerald-50 text-slate-800 border-slate-200 hover:border-emerald-300"
            }"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-bold leading-snug">${l.titleVi}</span>
              ${isActive ? '<i class="fa-solid fa-circle-play text-amber-300 text-xs shrink-0"></i>' : ""}
            </div>
            <p class="zh-text text-[11px] mt-0.5 ${isActive ? "text-emerald-100" : "text-slate-500"}">${l.titleZh}</p>
          </button>
        `;
      })
      .join("");

    sidebarList.querySelectorAll(".lesson-nav-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.lessonId);
        renderSidebarLessons(bookCode, id);
        loadBookAndLesson(bookCode, id);
        closeMobileSidebar();
      });
    });

    return currentId;
  }

  async function loadBookAndLesson(bookCode, lessonId) {
    if (!lessonId) return;
    try {
      await Promise.all([
        loadScript(`data/${bookCode}/vocab${lessonId}.js`),
        loadScript(`data/${bookCode}/content${lessonId}.js`)
      ]);

      const lessonData =
        window.LESSONS_DATA &&
        window.LESSONS_DATA[bookCode] &&
        window.LESSONS_DATA[bookCode][lessonId];

      if (!lessonData) {
        throw new Error(`File data/${bookCode}/vocab${lessonId}.js hoặc content${lessonId}.js bị lỗi cú pháp nên không đọc được dữ liệu.`);
      }
      renderLesson(lessonData);
    } catch (err) {
      console.error("Lỗi tải dữ liệu:", err);
      const vocabTab = document.getElementById("tab-vocab");
      if (vocabTab) {
        vocabTab.innerHTML = `
          <div class="bg-rose-50 border border-rose-300 text-rose-900 p-5 rounded-2xl text-sm space-y-2">
            <p class="font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5 text-rose-600"></i>Lỗi nạp dữ liệu bài ${lessonId}!</p>
            <p class="text-xs">${err.message}</p>
            <ul class="list-disc pl-5 font-mono text-xs text-slate-700">
              <li>data/${bookCode}/vocab${lessonId}.js</li>
              <li>data/${bookCode}/content${lessonId}.js</li>
            </ul>
          </div>
        `;
      }
    }
  }

  if (bookSelector) {
    bookSelector.addEventListener("change", () => {
      const bookCode = bookSelector.value;
      const defaultLessonId = renderSidebarLessons(bookCode);
      if (defaultLessonId) loadBookAndLesson(bookCode, defaultLessonId);
    });
  }

  // Nút Bật/Tắt tiếng Trung
  const toggleZhBtn = document.getElementById("toggle-zh-btn");
  const toggleZhLabel = document.getElementById("toggle-zh-label");
  if (toggleZhBtn) {
    toggleZhBtn.addEventListener("click", () => {
      document.body.classList.toggle("hide-zh");
      const isHidden = document.body.classList.contains("hide-zh");
      if (toggleZhLabel) toggleZhLabel.textContent = isHidden ? "Hiện tiếng Trung" : "Ẩn tiếng Trung";
    });
  }

  // Thanh chọn tốc độ đọc (Chậm / Vừa / Chuẩn)
  const rateBtns = document.querySelectorAll(".rate-btn");
  if (rateBtns.length) {
    const savedRate = localStorage.getItem("vn_speak_rate") || "0.85";

    const markActive = (activeBtn) => {
      rateBtns.forEach((b) => {
        b.classList.remove("border-emerald-600", "bg-emerald-50");
        b.classList.add("border-slate-300");
      });
      activeBtn.classList.add("border-emerald-600", "bg-emerald-50");
      activeBtn.classList.remove("border-slate-300");
    };

    const initialActive = Array.from(rateBtns).find((b) => b.dataset.rate === savedRate) || rateBtns[1];
    markActive(initialActive);

    rateBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        localStorage.setItem("vn_speak_rate", btn.dataset.rate);
        markActive(btn);
      });
    });
  }

  // Chuyển Tab nội dung chính
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => {
        b.classList.remove("bg-emerald-50", "text-emerald-700", "border", "border-emerald-200");
        b.classList.add("text-slate-600");
      });
      btn.classList.add("bg-emerald-50", "text-emerald-700", "border", "border-emerald-200");
      btn.classList.remove("text-slate-600");

      const target = btn.dataset.tab;
      tabContents.forEach((tc) => tc.classList.add("hidden"));
      const targetEl = document.getElementById(`tab-${target}`);
      if (targetEl) targetEl.classList.remove("hidden");
    });
  });

  function renderLesson(lesson) {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    _activePassageBtn = null;

    const badgeEl = document.getElementById("lesson-badge");
    const titleViEl = document.getElementById("lesson-title-vi");
    const titleZhEl = document.getElementById("lesson-title-zh");
    if (badgeEl) badgeEl.textContent = lesson.badge || "";
    if (titleViEl) titleViEl.textContent = lesson.titleVi || "";
    if (titleZhEl) titleZhEl.textContent = lesson.titleZh || "";

    const objContainer = document.getElementById("lesson-objectives");
    if (objContainer) {
      objContainer.innerHTML = (lesson.objectives || [])
        .map(
          (obj) => `
          <span class="bg-white/15 backdrop-blur-sm text-xs px-3 py-1.5 rounded-lg border border-white/20">
            <i class="fa-solid fa-check text-amber-300 mr-1"></i>${obj.vi}
            <span class="zh-text text-emerald-100 ml-1">(${obj.zh})</span>
          </span>`
        )
        .join("");
    }

    renderVocabTab(lesson);
    renderReadingTab(lesson);
    renderGrammarTab(lesson);
    renderPracticeTab(lesson);
  }

  // =========================================================================
  // TAB 1: TỪ VỰNG
  // =========================================================================
  function renderVocabTab(lesson) {
    const container = document.getElementById("tab-vocab");
    const subItems = (lesson.vocabGroups || []).map((group, gIdx) => {
      const cardsHtml = (group.words || [])
        .map((w) => {
          const safeWord = (w.vi || "").replace(/'/g, "\\'");
          const safeEx = (w.exVi || "").replace(/'/g, "\\'");

          const synHtml = w.synonyms && w.synonyms.length
            ? `<div class="text-xs mt-1.5"><span class="font-semibold text-emerald-700">≈ Cùng nghĩa (近义):</span> <span class="text-slate-700">${w.synonyms.join(", ")}</span></div>`
            : "";

          const antHtml = w.antonyms && w.antonyms.length
            ? `<div class="text-xs mt-1"><span class="font-semibold text-amber-700">⇄ Trái nghĩa (反义):</span> <span class="text-slate-700">${w.antonyms.join(", ")}</span></div>`
            : "";

          const colHtml = (w.collocations || [])
            .map((c) => {
              const spokenPhrase = c.vi.replace(/~/g, w.vi).replace(/'/g, "\\'");
              return `
                <button
                  type="button"
                  onclick="speakVi('${spokenPhrase}', 0.95, this)"
                  title="Bấm để nghe: ${c.vi.replace(/~/g, w.vi)}"
                  class="px-3 py-1 rounded-full bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-200 text-xs transition active:scale-95 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span class="font-semibold text-emerald-800">${c.vi}</span>
                  <span class="zh-text text-slate-600">${c.zh}</span>
                </button>
              `;
            })
            .join("");

          return `
            <div class="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between gap-2">
                  <div>
                    <span class="text-xl font-bold text-slate-900">${w.vi}</span>
                    <span class="text-xs font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded ml-1">${w.pos || ""}</span>
                  </div>
                  <button onclick="speakVi('${safeWord}', 0.95, this)" class="w-9 h-9 rounded-full bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white flex items-center justify-center transition shrink-0">
                    <i class="fa-solid fa-volume-high"></i>
                  </button>
                </div>

                <div class="mt-1.5 flex flex-wrap items-center gap-2">
                  <span class="zh-text text-base font-semibold text-emerald-700">${w.zh || ""}</span>
                  ${w.hv ? `<span class="zh-text text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">汉越: ${w.hv}</span>` : ""}
                </div>

                ${synHtml}
                ${antHtml}

                <div class="mt-2.5 pt-2 border-t border-slate-100 text-xs">
                  <div class="flex items-center justify-between text-slate-700">
                    <span>"${w.exVi || ""}"</span>
                    <button onclick="speakVi('${safeEx}')" class="text-emerald-600 hover:underline ml-2">
                      <i class="fa-solid fa-play"></i>
                    </button>
                  </div>
                  <p class="zh-text text-slate-500 mt-0.5">${w.exZh || ""}</p>
                </div>
              </div>

              <div class="mt-3 pt-2.5 border-t border-slate-100">
                <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Cụm từ thường gặp:
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${colHtml}
                </div>
              </div>
            </div>
          `;
        })
        .join("");

      return {
        labelVi: `Phần ${gIdx + 1}`,
        labelZh: `第${gIdx + 1}部分`,
        contentHtml: `
          <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h3 class="text-base sm:text-lg font-bold text-emerald-800 border-l-4 border-emerald-600 pl-3">
              ${group.groupNameVi} <span class="zh-text text-sm font-normal text-slate-500 ml-1">${group.groupNameZh || ""}</span>
            </h3>
            <span class="text-xs text-slate-500">Bấm vào thẻ từ hoặc cụm từ để nghe đọc</span>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
            ${cardsHtml}
          </div>
        `
      };
    });

    buildSubTabs(container, subItems);
  }

  // =========================================================================
  // TAB 2: HỘI THOẠI & BÀI ĐỌC
  // =========================================================================
  function renderReadingTab(lesson) {
    const container = document.getElementById("tab-reading");
    const subItems = [];

    (lesson.dialogues || []).forEach((d, dIdx) => {
      const fullDialogueText = (d.lines || []).map((l) => l.vi).join(" ");
      const safeFullDialogue = fullDialogueText.replace(/'/g, "\\'");
      const html = `
        <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div class="bg-slate-50 px-5 py-4 border-b border-slate-200 flex flex-wrap justify-between items-center gap-2">
            <div>
              <h3 class="font-bold text-lg text-emerald-800">${d.titleVi}</h3>
              <p class="zh-text text-sm text-slate-500">${d.titleZh || ""}</p>
            </div>
            <div class="flex items-center gap-1.5">
              <button
                type="button"
                data-default-label="Nghe cả đoạn"
                data-default-icon="fa-headphones"
                data-base-color="bg-emerald-600 hover:bg-emerald-700"
                onclick="togglePassageAudio(this, '${safeFullDialogue}')"
                class="passage-audio-btn bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer transition"
              >
                <i class="fa-solid fa-headphones"></i> Nghe cả đoạn
              </button>
              <button
                type="button"
                title="Nghe lại từ đầu"
                onclick="restartPassageAudio(this, '${safeFullDialogue}')"
                class="restart-passage-btn hidden px-2.5 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-1 cursor-pointer transition"
              >
                <i class="fa-solid fa-rotate-right"></i>
                <span class="hidden sm:inline">Từ đầu</span>
              </button>
            </div>
          </div>
          <div class="p-5 space-y-3">
            ${(d.lines || [])
              .map(
                (line) => `
              <div class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition">
                <span class="font-bold text-xs uppercase px-2.5 py-1 rounded-md min-w-[76px] text-center ${
                  line.speaker === "Peter" ? "bg-sky-100 text-sky-800" : "bg-emerald-100 text-emerald-800"
                }">${line.speaker}</span>
                <div class="flex-1">
                  <p class="text-slate-900 font-medium">${line.vi}</p>
                  <p class="zh-text text-sm text-slate-500 mt-0.5">${line.zh || ""}</p>
                </div>
                <button onclick="speakVi('${line.vi.replace(/'/g, "\\'")}' )" class="text-slate-400 hover:text-emerald-600 p-1">
                  <i class="fa-solid fa-volume-high"></i>
                </button>
              </div>`
              )
              .join("")}
          </div>
          <div class="bg-amber-50/60 px-5 py-4 border-t border-amber-100">
            <h4 class="font-bold text-sm text-amber-900 mb-3"><i class="fa-solid fa-circle-question mr-1"></i>Trả lời câu hỏi (阅读理解):</h4>
            <div class="space-y-3">
              ${(d.questions || [])
                .map(
                  (q) => `
                <div class="text-sm">
                  <p class="font-semibold text-slate-800">${q.qVi} <span class="zh-text font-normal text-slate-500">(${q.qZh || ""})</span></p>
                  <div class="flex flex-wrap gap-2 mt-1.5">
                    ${(q.options || [])
                      .map(
                        (opt, oIdx) => `
                      <button type="button" onclick="checkMCQ(this, ${oIdx === q.answer})" class="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-medium transition cursor-pointer">
                        ${opt}
                      </button>`
                      )
                      .join("")}
                  </div>
                </div>`
                )
                .join("")}
            </div>
          </div>
        </div>
      `;

      subItems.push({
        labelVi: `Hội thoại ${dIdx + 1}`,
        labelZh: `会话${dIdx + 1}`,
        contentHtml: html
      });
    });

    if (lesson.reading) {
      const r = lesson.reading;
      const fullReading = (r.paragraphs || []).map((p) => p.vi).join(" ");
      const safeFullReading = fullReading.replace(/'/g, "\\'");
      const readingHtml = `
        <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div class="bg-teal-50 px-5 py-4 border-b border-teal-100 flex flex-wrap justify-between items-center gap-2">
            <div>
              <h3 class="font-bold text-lg text-teal-900">${r.titleVi}</h3>
              <p class="zh-text text-sm text-teal-700">${r.titleZh || ""}</p>
            </div>
            <div class="flex items-center gap-1.5">
              <button
                type="button"
                data-default-label="Đọc bài khóa"
                data-default-icon="fa-volume-high"
                data-base-color="bg-teal-600 hover:bg-teal-700"
                onclick="togglePassageAudio(this, '${safeFullReading}')"
                class="passage-audio-btn bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer transition"
              >
                <i class="fa-solid fa-volume-high"></i> Đọc bài khóa
              </button>
              <button
                type="button"
                title="Đọc lại từ đầu"
                onclick="restartPassageAudio(this, '${safeFullReading}')"
                class="restart-passage-btn hidden px-2.5 py-2 rounded-lg bg-teal-100 hover:bg-teal-200 text-teal-800 text-xs font-semibold flex items-center gap-1 cursor-pointer transition"
              >
                <i class="fa-solid fa-rotate-right"></i>
                <span class="hidden sm:inline">Từ đầu</span>
              </button>
            </div>
          </div>
          <div class="p-5 space-y-4 leading-relaxed">
            ${(r.paragraphs || [])
              .map(
                (p) => `
              <div class="p-3 rounded-xl bg-slate-50/70">
                <p class="text-slate-900">${p.vi}</p>
                <p class="zh-text text-sm text-slate-600 mt-1.5 pt-1.5 border-t border-slate-200/70">${p.zh || ""}</p>
              </div>`
              )
              .join("")}
          </div>
          <div class="bg-teal-50/40 px-5 py-4 border-t border-teal-100 space-y-3">
            <h4 class="font-bold text-sm text-teal-900">Câu hỏi kiểm tra bài đọc:</h4>
            ${(r.questions || [])
              .map(
                (q) => `
              <div class="text-sm">
                <p class="font-semibold text-slate-800">${q.qVi} <span class="zh-text font-normal text-slate-500">(${q.qZh || ""})</span></p>
                <div class="flex flex-wrap gap-2 mt-1.5">
                  ${(q.options || [])
                    .map(
                      (opt, oIdx) => `
                    <button type="button" onclick="checkMCQ(this, ${oIdx === q.answer})" class="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-medium transition cursor-pointer">
                      ${opt}
                    </button>`
                    )
                    .join("")}
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      `;

      subItems.push({
        labelVi: "Bài đọc",
        labelZh: "短文阅读",
        contentHtml: readingHtml
      });
    }

    buildSubTabs(container, subItems);
  }

  // =========================================================================
  // TAB 3: NGỮ PHÁP
  // =========================================================================
  function renderGrammarTab(lesson) {
    const container = document.getElementById("tab-grammar");
    const subItems = (lesson.grammar || []).map((g, idx) => ({
      labelVi: `Ngữ pháp ${idx + 1}`,
      labelZh: `语法${idx + 1}`,
      contentHtml: `
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 class="text-lg font-bold text-emerald-800">${g.titleVi}</h3>
          <p class="zh-text text-sm font-semibold text-rose-600 mt-0.5">${g.titleZh || ""}</p>
          <div class="mt-3 p-4 bg-slate-50 rounded-xl text-sm space-y-2 leading-relaxed">
            <p class="text-slate-800 whitespace-pre-line">${g.explanationVi || ""}</p>
            <div class="zh-text text-slate-700 pt-2 border-t border-slate-200/80 whitespace-pre-line">${g.explanationZh || ""}</div>
          </div>
          <div class="mt-4 space-y-2">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Ví dụ minh họa (例句):</p>
            ${(g.examples || [])
              .map(
                (ex) => `
              <div class="flex items-center justify-between bg-emerald-50/50 border border-emerald-100 px-4 py-2.5 rounded-lg">
                <div>
                  <p class="font-medium text-slate-900 text-sm">${ex.vi}</p>
                  <p class="zh-text text-xs text-slate-500 mt-0.5">${ex.zh || ""}</p>
                </div>
                <button onclick="speakVi('${ex.vi.replace(/'/g, "\\'")}' )" class="text-emerald-600 hover:text-emerald-800 p-2">
                  <i class="fa-solid fa-volume-high"></i>
                </button>
              </div>`
              )
              .join("")}
          </div>
        </div>
      `
    }));

    buildSubTabs(container, subItems);
  }

  // =========================================================================
  // TAB 4: LUYỆN TẬP
  // =========================================================================
  function renderPracticeTab(lesson) {
    const container = document.getElementById("tab-practice");
    const ex = lesson.exercises;
    if (!ex) {
      if (container) container.innerHTML = "";
      return;
    }

    const subItems = [];
    let exCounter = 1;

    // 1. Nghe & Điền thông tin vào chỗ trống
    if (ex.listeningFill && ex.listeningFill.items && ex.listeningFill.items.length) {
      const lf = ex.listeningFill;
      const tabLabel = `Bài ${exCounter++}`;
      subItems.push({
        labelVi: tabLabel,
        labelZh: "听录音填空",
        contentHtml: `
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 exercise-card">
            <h3 class="font-bold text-lg text-emerald-800 mb-1">${lf.titleVi}</h3>
            <p class="zh-text text-sm text-slate-500 mb-4">${lf.titleZh || ""}</p>
            <div class="space-y-4">
              ${lf.items
                .map(
                  (item, idx) => `
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div class="flex flex-wrap items-center gap-2 text-sm">
                    <button
                      type="button"
                      onclick="speakVi('${item.fullAudio.replace(/'/g, "\\'")}', 0.85, this)"
                      title="Bấm để nghe"
                      class="w-8 h-8 rounded-full bg-emerald-100 hover:bg-emerald-600 text-emerald-700 hover:text-white flex items-center justify-center transition shrink-0 cursor-pointer"
                    >
                      <i class="fa-solid fa-volume-high text-xs"></i>
                    </button>
                    <span class="font-medium text-slate-800">${item.before}</span>
                    <input
                      type="text"
                      id="lf-input-${idx}"
                      placeholder="..."
                      class="w-36 px-3 py-1 border border-slate-300 rounded-lg text-center font-bold text-emerald-700 bg-white focus:outline-none focus:border-emerald-500"
                    />
                    <span class="font-medium text-slate-800">${item.after}</span>
                    <div class="ml-auto flex items-center gap-1.5">
                      <button
                        type="button"
                        onclick="checkListeningFill(${idx}, '${item.blank.replace(/'/g, "\\'")}')"
                        class="single-check-btn bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg cursor-pointer"
                      >
                        Kiểm tra
                      </button>
                      <button
                        type="button"
                        onclick="showListeningFillAnswer(${idx}, '${item.blank.replace(/'/g, "\\'")}')"
                        class="single-ans-btn bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg cursor-pointer"
                      >
                        Đáp án
                      </button>
                    </div>
                  </div>
                  <div class="pl-10">
                    <span id="lf-res-${idx}" class="text-xs font-bold"></span>
                  </div>
                </div>`
                )
                .join("")}
            </div>
            <div class="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onclick="checkAllExercises(this)"
                class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <i class="fa-solid fa-check-double"></i> Đáp án cả bài <span class="zh-text font-normal">(全部答案)</span>
              </button>
              <span class="batch-score text-sm font-bold text-emerald-800"></span>
            </div>
          </div>
        `
      });
    }

    // 2. Nghe hội thoại & Chọn Đúng / Sai
    if (ex.trueFalseQuiz && ex.trueFalseQuiz.statements && ex.trueFalseQuiz.statements.length) {
      const tf = ex.trueFalseQuiz;
      const tabLabel = `Bài ${exCounter++}`;
      const safeTfAudio = tf.audioText.replace(/'/g, "\\'");
      subItems.push({
        labelVi: tabLabel,
        labelZh: "听对话判断正误",
        contentHtml: `
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 exercise-card">
            <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 class="font-bold text-lg text-emerald-800 mb-1">${tf.titleVi}</h3>
                <p class="zh-text text-sm text-slate-500">${tf.titleZh || ""}</p>
              </div>
              <div class="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  data-default-label="Nghe hội thoại"
                  data-default-icon="fa-headphones"
                  data-base-color="bg-emerald-600 hover:bg-emerald-700"
                  onclick="togglePassageAudio(this, '${safeTfAudio}')"
                  class="passage-audio-btn bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer transition"
                >
                  <i class="fa-solid fa-headphones"></i> Nghe hội thoại
                </button>
                <button
                  type="button"
                  title="Nghe lại từ đầu"
                  onclick="restartPassageAudio(this, '${safeTfAudio}')"
                  class="restart-passage-btn hidden px-2.5 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-1 cursor-pointer transition"
                >
                  <i class="fa-solid fa-rotate-right"></i>
                  <span class="hidden sm:inline">Từ đầu</span>
                </button>
                <button
                  type="button"
                  onclick="document.getElementById('tf-transcript').classList.toggle('hidden')"
                  class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer"
                >
                  <i class="fa-solid fa-file-lines mr-1"></i>Hiện / Ẩn lời thoại
                </button>
              </div>
            </div>

            <div id="tf-transcript" class="hidden mb-5 p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
              <p class="text-xs font-bold uppercase text-amber-800 mb-1">Nội dung đoạn hội thoại (听力原文):</p>
              ${(tf.transcriptLines || [])
                .map(
                  (line) => `
                <div class="text-xs sm:text-sm">
                  <span class="font-bold text-emerald-800">${line.speaker}:</span>
                  <span class="text-slate-900">${line.vi}</span>
                  <p class="zh-text text-xs text-slate-500 pl-4">${line.zh || ""}</p>
                </div>`
                )
                .join("")}
            </div>

            <div class="space-y-3">
              ${tf.statements
                .map(
                  (st, idx) => `
                <div class="tf-row p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3" data-answer="${st.answer}" data-idx="${idx}">
                  <div>
                    <p class="font-semibold text-sm text-slate-900">${st.statementVi}</p>
                    <p class="zh-text text-xs text-slate-500 mt-0.5">${st.statementZh || ""}</p>
                    <p id="tf-exp-${idx}" class="hidden text-xs font-semibold text-emerald-700 mt-1.5">${st.explanationZh || ""}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      data-choice="true"
                      onclick="checkTrueFalse(this, ${idx}, true, ${st.answer})"
                      class="tf-btn px-4 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-bold transition cursor-pointer"
                    >
                      Đúng (对)
                    </button>
                    <button
                      type="button"
                      data-choice="false"
                      onclick="checkTrueFalse(this, ${idx}, false, ${st.answer})"
                      class="tf-btn px-4 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-bold transition cursor-pointer"
                    >
                      Sai (错)
                    </button>
                  </div>
                </div>`
                )
                .join("")}
            </div>

            <div class="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onclick="checkAllTrueFalse(this)"
                class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <i class="fa-solid fa-check-double"></i> Đáp án cả bài <span class="zh-text font-normal">(全部答案)</span>
              </button>
              <span class="batch-score text-sm font-bold text-emerald-800"></span>
            </div>
          </div>
        `
      });
    }

    // 3. Sắp xếp từ thành câu
    const woData = Array.isArray(ex.wordOrder) ? { items: ex.wordOrder } : ex.wordOrder;
    if (woData && woData.items && woData.items.length) {
      const tabLabel = `Bài ${exCounter++}`;
      subItems.push({
        labelVi: tabLabel,
        labelZh: "连词成句",
        contentHtml: `
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 exercise-card">
            <h3 class="font-bold text-lg text-emerald-800 mb-1">${woData.titleVi || "Sắp xếp từ ngữ thành câu hoàn chỉnh"}</h3>
            <p class="zh-text text-sm text-slate-500 mb-4">${woData.titleZh || "连词成句（点击词语按顺序排列）"}</p>
            <div class="space-y-5">
              ${woData.items
                .map((item, idx) => {
                  const shuffled = [...item.words].sort(() => Math.random() - 0.5);
                  const safeCorrect = item.correct.replace(/'/g, "\\'");
                  return `
                  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200" id="wo-box-${idx}">
                    <div class="text-xs font-bold text-slate-400 mb-1.5">Câu ${idx + 1}:</div>
                    <div class="min-h-[42px] bg-white border-2 border-dashed border-emerald-300 rounded-lg p-2 flex flex-wrap gap-2 items-center mb-3" id="wo-target-${idx}">
                      <span class="text-xs text-slate-400 placeholder-hint">Bấm các từ bên dưới để ghép câu...</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-3" id="wo-pool-${idx}">
                      ${shuffled
                        .map(
                          (w) => `
                        <button type="button" onclick="moveWord(this, ${idx})" class="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-sm font-medium shadow-xs hover:border-emerald-500 transition cursor-pointer">
                          ${w}
                        </button>`
                        )
                        .join("")}
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                      <button type="button" data-idx="${idx}" data-correct="${item.correct.replace(/"/g, "&quot;")}" onclick="checkWordOrder(${idx}, '${safeCorrect}')" class="single-wo-check-btn bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer">
                        Kiểm tra (检查)
                      </button>
                      <button type="button" onclick="showWordOrderAnswer(${idx}, '${safeCorrect}')" class="single-wo-ans-btn bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer">
                        Đáp án (答案)
                      </button>
                      <button type="button" onclick="resetWordOrder(${idx})" class="text-slate-500 hover:text-slate-700 text-xs underline ml-1 cursor-pointer">
                        Làm lại
                      </button>
                    </div>
                    <p id="wo-res-${idx}" class="mt-2.5 text-xs font-semibold"></p>
                  </div>`;
                })
                .join("")}
            </div>

            <div class="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onclick="checkAllWordOrder(this)"
                class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <i class="fa-solid fa-check-double"></i> Đáp án cả bài <span class="zh-text font-normal">(全部答案)</span>
              </button>
              <span class="batch-score text-sm font-bold text-emerald-800"></span>
            </div>
          </div>
        `
      });
    }

    // 4. Điền từ (có sẵn hộp từ cho trước)
    if (ex.fillBlanks && ex.fillBlanks.length) {
      const tabLabel = `Bài ${exCounter++}`;
      const wordBank = [...ex.fillBlanks.map((fb) => fb.blank)].sort(() => Math.random() - 0.5);
      const wordBankHtml = wordBank
        .map(
          (w) => `
          <button
            type="button"
            onclick="pickFillBlankWord(this, '${w.replace(/'/g, "\\'")}')"
            class="fb-word-pill px-3.5 py-1.5 rounded-lg bg-white hover:bg-emerald-600 text-emerald-800 hover:text-white border border-emerald-300 text-xs sm:text-sm font-bold shadow-2xs transition cursor-pointer"
          >
            ${w}
          </button>`
        )
        .join("");

      subItems.push({
        labelVi: tabLabel,
        labelZh: "选词填空",
        contentHtml: `
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 exercise-card">
            <h3 class="font-bold text-lg text-emerald-800 mb-1">Chọn từ cho sẵn điền vào chỗ trống</h3>
            <p class="zh-text text-sm text-slate-500 mb-4">选词填空（点击下方词语或直接输入）</p>

            <div class="mb-5 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
              <div class="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2.5 flex items-center gap-1.5">
                <i class="fa-solid fa-list-ul"></i> Từ cho sẵn <span class="zh-text font-normal">(备选词语)</span>:
              </div>
              <div class="flex flex-wrap gap-2">
                ${wordBankHtml}
              </div>
            </div>

            <div class="space-y-4">
              ${ex.fillBlanks
                .map(
                  (fb, idx) => `
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-sm">
                  <div class="flex flex-wrap items-center gap-2">
                    <span>${idx + 1}. ${fb.before}</span>
                    <input type="text" id="fb-input-${idx}" onfocus="window.activeFbInput = this" placeholder="..." class="fb-input w-32 px-2.5 py-1 border border-slate-300 rounded-md text-center font-bold text-emerald-700 bg-white focus:outline-none focus:border-emerald-500" />
                    <span>${fb.after}</span>
                    <div class="ml-auto flex items-center gap-1.5">
                      <button type="button" onclick="checkFillBlank(${idx}, '${fb.blank.replace(/'/g, "\\'")}')" class="single-check-btn bg-slate-800 hover:bg-slate-700 text-white text-xs px-3 py-1.5 rounded-lg cursor-pointer">
                        Kiểm tra
                      </button>
                      <button type="button" onclick="showFillBlankAnswer(${idx}, '${fb.blank.replace(/'/g, "\\'")}')" class="single-ans-btn bg-amber-500 hover:bg-amber-600 text-white text-xs px-3 py-1.5 rounded-lg cursor-pointer">
                        Đáp án
                      </button>
                    </div>
                  </div>
                  <p id="fb-res-${idx}" class="text-xs font-bold"></p>
                </div>`
                )
                .join("")}
            </div>

            <div class="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onclick="checkAllExercises(this)"
                class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <i class="fa-solid fa-check-double"></i> Đáp án cả bài <span class="zh-text font-normal">(全部答案)</span>
              </button>
              <span class="batch-score text-sm font-bold text-emerald-800"></span>
            </div>
          </div>
        `
      });
    }

    // 5. Nghe viết chính tả
    if (ex.dictationText) {
      const tabLabel = `Bài ${exCounter++}`;
      subItems.push({
        labelVi: tabLabel,
        labelZh: "听写练习",
        contentHtml: `
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 class="font-bold text-lg text-emerald-800 mb-1">Nghe và viết chính tả (听写练习)</h3>
            <p class="text-xs text-slate-500 mb-4">Bấm nút nghe đoạn văn, sau đó gõ lại nội dung bạn nghe được vào ô bên dưới.</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <button type="button" onclick="speakVi('${ex.dictationText.replace(/'/g, "\\'")}', 0.85)" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-play"></i> Nghe tốc độ chuẩn
              </button>
              <button type="button" onclick="speakVi('${ex.dictationText.replace(/'/g, "\\'")}', 0.6)" class="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-ear-listen"></i> Nghe chậm để chép
              </button>
            </div>
            <textarea id="dictation-input" rows="4" class="w-full p-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-emerald-500" placeholder="Gõ đoạn văn chính tả vào đây..."></textarea>
            <div class="mt-3 flex items-center gap-3">
              <button type="button" onclick="toggleDictationAnswer()" class="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer">
                Kiểm tra / Hiện đáp án
              </button>
            </div>
            <div id="dictation-answer" class="hidden mt-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-emerald-950 leading-relaxed">
              <strong>Đáp án chuẩn:</strong><br/>${ex.dictationText}
            </div>
          </div>
        `
      });
    }

    buildSubTabs(container, subItems);
  }

  // =========================================================================
  // CÁC HÀM KIỂM TRA & HIỆN ĐÁP ÁN BÀI TẬP
  // =========================================================================

  window.checkMCQ = function (btn, isCorrect) {
    const siblings = btn.parentElement.querySelectorAll("button");
    siblings.forEach((b) => {
      b.classList.remove("bg-emerald-600", "text-white", "border-emerald-600", "bg-rose-500", "border-rose-500");
      b.classList.add("bg-white", "hover:bg-slate-100");
    });

    btn.classList.remove("bg-white", "hover:bg-slate-100");
    if (isCorrect) {
      btn.classList.add("bg-emerald-600", "text-white", "border-emerald-600");
    } else {
      btn.classList.add("bg-rose-500", "text-white", "border-rose-500");
    }
  };

  window.checkListeningFill = function (idx, expected) {
    const input = document.getElementById(`lf-input-${idx}`);
    const res = document.getElementById(`lf-res-${idx}`);
    const val = input.value.trim().toLowerCase().replace(/\s+/g, " ");
    const exp = expected.trim().toLowerCase();

    if (val === exp) {
      res.textContent = "✓ Chính xác!";
      res.className = "text-xs font-bold text-emerald-600";
      return true;
    } else {
      res.textContent = "✗ Chưa đúng.";
      res.className = "text-xs font-bold text-rose-600";
      return false;
    }
  };

  window.showListeningFillAnswer = function (idx, expected) {
    const res = document.getElementById(`lf-res-${idx}`);
    res.textContent = `Đáp án: ${expected}`;
    res.className = "text-xs font-bold text-amber-700";
  };

  window.checkTrueFalse = function (btn, idx, userChoice, actualAnswer) {
    const siblings = btn.parentElement.querySelectorAll("button");
    siblings.forEach((b) => {
      b.classList.remove("bg-emerald-600", "text-white", "border-emerald-600", "bg-rose-500", "border-rose-500", "selected-choice");
      b.classList.add("bg-white", "hover:bg-slate-100");
    });

    btn.classList.remove("bg-white", "hover:bg-slate-100");
    btn.classList.add("selected-choice");
    const isCorrect = userChoice === actualAnswer;
    if (isCorrect) {
      btn.classList.add("bg-emerald-600", "text-white", "border-emerald-600");
    } else {
      btn.classList.add("bg-rose-500", "text-white", "border-rose-500");
    }

    const expEl = document.getElementById(`tf-exp-${idx}`);
    if (expEl) expEl.classList.remove("hidden");
  };

  window.moveWord = function (btn, idx) {
    const target = document.getElementById(`wo-target-${idx}`);
    const pool = document.getElementById(`wo-pool-${idx}`);
    const hint = target.querySelector(".placeholder-hint");
    if (hint) hint.remove();

    if (btn.parentElement === pool) {
      target.appendChild(btn);
    } else {
      pool.appendChild(btn);
    }
  };

  window.resetWordOrder = function (idx) {
    const target = document.getElementById(`wo-target-${idx}`);
    const pool = document.getElementById(`wo-pool-${idx}`);
    const res = document.getElementById(`wo-res-${idx}`);
    Array.from(target.querySelectorAll("button")).forEach((b) => pool.appendChild(b));
    target.innerHTML = `<span class="text-xs text-slate-400 placeholder-hint">Bấm các từ bên dưới để ghép câu...</span>`;
    res.textContent = "";
  };

  window.checkWordOrder = function (idx, correctSentence, silent = false) {
    const target = document.getElementById(`wo-target-${idx}`);
    const res = document.getElementById(`wo-res-${idx}`);
    const userWords = Array.from(target.querySelectorAll("button")).map((b) => b.textContent.trim());
    const normalize = (s) => s.toLowerCase().replace(/[.,!?]/g, "").replace(/\s+/g, " ").trim();

    if (normalize(userWords.join(" ")) === normalize(correctSentence)) {
      res.textContent = "✓ Chính xác!";
      res.className = "mt-2.5 text-xs font-bold text-emerald-600";
      if (!silent) speakVi(correctSentence);
      return true;
    } else {
      res.textContent = "✗ Chưa đúng.";
      res.className = "mt-2.5 text-xs font-bold text-rose-600";
      return false;
    }
  };

  window.showWordOrderAnswer = function (idx, correctSentence) {
    const res = document.getElementById(`wo-res-${idx}`);
    res.textContent = `Đáp án: "${correctSentence}"`;
    res.className = "mt-2.5 text-xs font-bold text-amber-700";
    speakVi(correctSentence);
  };

  window.pickFillBlankWord = function (btn, word) {
    const card = btn.closest(".exercise-card");
    let targetInput = window.activeFbInput && card.contains(window.activeFbInput) ? window.activeFbInput : null;
    if (!targetInput) {
      const inputs = Array.from(card.querySelectorAll(".fb-input"));
      targetInput = inputs.find((inp) => !inp.value.trim()) || inputs[0];
    }
    if (targetInput) {
      targetInput.value = word;
      targetInput.focus();
      const inputs = Array.from(card.querySelectorAll(".fb-input"));
      const nextEmpty = inputs.find((inp) => !inp.value.trim());
      window.activeFbInput = nextEmpty || targetInput;
    }
  };

  window.checkFillBlank = function (idx, expected) {
    const input = document.getElementById(`fb-input-${idx}`);
    const res = document.getElementById(`fb-res-${idx}`);
    const val = input.value.trim().toLowerCase();
    if (val === expected.toLowerCase()) {
      res.textContent = "✓ Chính xác!";
      res.className = "text-xs font-bold text-emerald-600";
      return true;
    } else {
      res.textContent = "✗ Chưa đúng.";
      res.className = "text-xs font-bold text-rose-600";
      return false;
    }
  };

  window.showFillBlankAnswer = function (idx, expected) {
    const res = document.getElementById(`fb-res-${idx}`);
    res.textContent = `Đáp án: ${expected}`;
    res.className = "text-xs font-bold text-amber-700";
  };

  window.checkAllExercises = function (btn) {
    const card = btn.closest(".exercise-card");
    const singleBtns = card.querySelectorAll(".single-check-btn");
    const ansBtns = card.querySelectorAll(".single-ans-btn");
    let correctCount = 0;

    singleBtns.forEach((b, i) => {
      b.click();
      const row = b.closest(".rounded-xl");
      const resText = row ? row.querySelector("[id$='-res-'], span[id*='-res-'], p[id*='-res-']") : null;
      const isOk = resText && resText.textContent.startsWith("✓");
      if (isOk) {
        correctCount++;
      } else if (ansBtns[i]) {
        ansBtns[i].click();
      }
    });

    const scoreEl = card.querySelector(".batch-score");
    if (scoreEl) {
      scoreEl.textContent = `Kết quả: ${correctCount} / ${singleBtns.length} câu đúng`;
    }
  };

  window.checkAllTrueFalse = function (btn) {
    const card = btn.closest(".exercise-card");
    const rows = card.querySelectorAll(".tf-row");
    let correctCount = 0;

    rows.forEach((row) => {
      const idx = Number(row.dataset.idx);
      const actualAnswer = row.dataset.answer === "true";
      const selectedBtn = row.querySelector(".selected-choice");
      const correctBtn = row.querySelector(`.tf-btn[data-choice="${actualAnswer}"]`);

      if (selectedBtn) {
        const userChoice = selectedBtn.dataset.choice === "true";
        if (userChoice === actualAnswer) correctCount++;
      }
      if (correctBtn) {
        correctBtn.classList.remove("bg-white", "hover:bg-slate-100");
        correctBtn.classList.add("bg-emerald-600", "text-white", "border-emerald-600");
      }

      const expEl = document.getElementById(`tf-exp-${idx}`);
      if (expEl) expEl.classList.remove("hidden");
    });

    const scoreEl = card.querySelector(".batch-score");
    if (scoreEl) {
      scoreEl.textContent = `Kết quả: ${correctCount} / ${rows.length} câu đúng`;
    }
  };

  window.checkAllWordOrder = function (btn) {
    const card = btn.closest(".exercise-card");
    const checkBtns = card.querySelectorAll(".single-wo-check-btn");
    let correctCount = 0;

    checkBtns.forEach((b) => {
      const idx = Number(b.dataset.idx);
      const correctSentence = b.dataset.correct;
      if (window.checkWordOrder(idx, correctSentence, true)) {
        correctCount++;
      } else {
        const res = document.getElementById(`wo-res-${idx}`);
        if (res) {
          res.textContent = `✗ Chưa đúng. Đáp án: "${correctSentence}"`;
          res.className = "mt-2.5 text-xs font-bold text-rose-600";
        }
      }
    });

    const scoreEl = card.querySelector(".batch-score");
    if (scoreEl) {
      scoreEl.textContent = `Kết quả: ${correctCount} / ${checkBtns.length} câu đúng`;
    }
  };

  window.toggleDictationAnswer = function () {
    const ans = document.getElementById("dictation-answer");
    if (ans) ans.classList.toggle("hidden");
  };

  // =========================================================================
  // KHỞI CHẠY BÀI HỌC
  // =========================================================================
  if (bookSelector) {
    const initialLessonId = renderSidebarLessons(bookSelector.value);
    if (initialLessonId) {
      loadBookAndLesson(bookSelector.value, initialLessonId);
    }
  }

  // =========================================================================
  // BẢNG TRẮNG GIẢNG BÀI (WHITEBOARD)
  // =========================================================================
  const wbModal = document.getElementById("whiteboard-modal");
  const wbBox = document.getElementById("whiteboard-box");
  const wbEditor = document.getElementById("whiteboard-editor");
  const openWbBtn = document.getElementById("open-whiteboard-btn");
  const closeWbBtn = document.getElementById("close-whiteboard-btn");
  const wbClearBtn = document.getElementById("wb-clear-btn");
  const wbSpeakBtn = document.getElementById("wb-speak-btn");
  const wbFontInc = document.getElementById("wb-font-inc");
  const wbFontDec = document.getElementById("wb-font-dec");
  const wbFullscreenBtn = document.getElementById("wb-fullscreen-btn");

  if (wbModal && wbEditor && openWbBtn) {
    let wbFontSize = 24;

    const savedBoard = localStorage.getItem("vn_teaching_whiteboard");
    if (savedBoard) {
      wbEditor.innerHTML = savedBoard;
    }

    wbEditor.addEventListener("input", () => {
      localStorage.setItem("vn_teaching_whiteboard", wbEditor.innerHTML);
    });

    openWbBtn.addEventListener("click", () => {
      wbModal.classList.remove("hidden");
      closeMobileSidebar();
      setTimeout(() => wbEditor.focus(), 50);
    });

    if (closeWbBtn) {
      closeWbBtn.addEventListener("click", () => wbModal.classList.add("hidden"));
    }

    window.formatBoardColor = function (hexColor) {
      wbEditor.focus();
      document.execCommand("foreColor", false, hexColor);
      localStorage.setItem("vn_teaching_whiteboard", wbEditor.innerHTML);
    };

    if (wbFontInc) {
      wbFontInc.addEventListener("click", () => {
        wbFontSize = Math.min(48, wbFontSize + 4);
        wbEditor.style.fontSize = `${wbFontSize}px`;
      });
    }

    if (wbFontDec) {
      wbFontDec.addEventListener("click", () => {
        wbFontSize = Math.max(16, wbFontSize - 4);
        wbEditor.style.fontSize = `${wbFontSize}px`;
      });
    }

    if (wbSpeakBtn) {
      wbSpeakBtn.addEventListener("click", () => {
        const selection = window.getSelection().toString().trim();
        const textToRead = selection || wbEditor.innerText.trim();
        if (textToRead) speakVi(textToRead, 0.85);
      });
    }

    if (wbClearBtn) {
      wbClearBtn.addEventListener("click", () => {
        wbEditor.innerHTML = "";
        localStorage.removeItem("vn_teaching_whiteboard");
        wbEditor.focus();
      });
    }

    if (wbFullscreenBtn && wbBox) {
      wbFullscreenBtn.addEventListener("click", () => {
        wbBox.classList.toggle("max-w-4xl");
        wbBox.classList.toggle("h-[80vh]");
        wbBox.classList.toggle("max-w-full");
        wbBox.classList.toggle("h-full");
      });
    }
  }
});
