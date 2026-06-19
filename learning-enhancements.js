(function () {
  const PREF_KEY = "kgReadingPrefs";
  const defaults = {
    textScale: 1,
    lineHeight: 1.5,
    highContrast: false,
    reduceMotion: false,
    originalFont: "system"
  };

  function safeParse(raw, fallback) {
    try {
      return JSON.parse(raw);
    } catch (_) {
      return fallback;
    }
  }

  function loadPrefs() {
    return { ...defaults, ...safeParse(localStorage.getItem(PREF_KEY) || "{}", {}) };
  }

  function savePrefs(prefs) {
    localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
  }

  function applyPrefs(prefs) {
    const p = { ...defaults, ...prefs };
    const root = document.documentElement;
    root.style.setProperty("--kg-text-scale", String(p.textScale));
    root.style.setProperty("--kg-line-height", String(p.lineHeight));
    root.dataset.kgHighContrast = p.highContrast ? "true" : "false";
    root.dataset.kgReduceMotion = p.reduceMotion ? "true" : "false";
    root.dataset.kgOriginalFont = p.originalFont || "system";
  }

  function ensureStyles() {
    if (document.getElementById("kg-learning-enhancements-styles")) return;
    const style = document.createElement("style");
    style.id = "kg-learning-enhancements-styles";
    style.textContent = `
      html {
        --kg-text-scale: 1;
        --kg-line-height: 1.5;
      }
      body {
        font-size: calc(1rem * var(--kg-text-scale, 1));
      }
      .gr,
      .prompt-word,
      .hebrew-vocab-card,
      [dir="rtl"],
      .q,
      .theory,
      .exercise-prompt,
      .card,
      .qa-answer {
        line-height: var(--kg-line-height, 1.5) !important;
      }
      html[data-kg-original-font="serif"] .gr,
      html[data-kg-original-font="serif"] .prompt-word,
      html[data-kg-original-font="serif"] .hebrew-vocab-card {
        font-family: "SBL Greek", "SBL Hebrew", "Times New Roman", Georgia, serif !important;
      }
      html[data-kg-high-contrast="true"] body {
        background: #05070b !important;
        color: #f8fafc !important;
      }
      html[data-kg-high-contrast="true"] .card,
      html[data-kg-high-contrast="true"] .panel,
      html[data-kg-high-contrast="true"] .practice-card,
      html[data-kg-high-contrast="true"] .lesson-card {
        border-color: rgba(248,250,252,0.42) !important;
      }
      html[data-kg-high-contrast="true"] a,
      html[data-kg-high-contrast="true"] button,
      html[data-kg-high-contrast="true"] input,
      html[data-kg-high-contrast="true"] select,
      html[data-kg-high-contrast="true"] textarea {
        outline-color: #facc15;
      }
      html[data-kg-reduce-motion="true"] *,
      html[data-kg-reduce-motion="true"] *::before,
      html[data-kg-reduce-motion="true"] *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: 0.01ms !important;
      }
      .kg-accessibility-toggle {
        position: fixed;
        right: 16px;
        bottom: 16px;
        z-index: 9998;
        min-width: 48px;
        min-height: 48px;
        border-radius: 14px;
        border: 1px solid rgba(255,255,255,0.24);
        background: rgba(15,17,23,0.94);
        color: #f8fafc;
        font-weight: 900;
        box-shadow: 0 14px 34px rgba(0,0,0,0.35);
      }
      .kg-accessibility-panel {
        position: fixed;
        right: 16px;
        bottom: 72px;
        z-index: 9998;
        width: min(320px, calc(100vw - 32px));
        padding: 14px;
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.20);
        background: rgba(15,17,23,0.97);
        color: #f8fafc;
        box-shadow: 0 24px 60px rgba(0,0,0,0.45);
      }
      .kg-accessibility-panel[hidden] {
        display: none;
      }
      .kg-accessibility-panel h2 {
        margin: 0 0 10px;
        font-size: 15px;
      }
      .kg-accessibility-panel label {
        display: grid;
        gap: 5px;
        margin: 10px 0;
        color: rgba(226,232,240,0.92);
        font-size: 13px;
        font-weight: 700;
      }
      .kg-accessibility-panel input,
      .kg-accessibility-panel select {
        width: 100%;
      }
      .kg-accessibility-panel .kg-check {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .kg-accessibility-panel .kg-check input {
        width: auto;
      }
    `;
    document.head.appendChild(style);
  }

  function buildPanel() {
    if (document.getElementById("kg-accessibility-toggle")) return;
    const prefs = loadPrefs();
    const toggle = document.createElement("button");
    toggle.id = "kg-accessibility-toggle";
    toggle.className = "kg-accessibility-toggle";
    toggle.type = "button";
    toggle.textContent = "Aa";
    toggle.setAttribute("aria-label", "Reading settings");
    toggle.setAttribute("aria-expanded", "false");

    const panel = document.createElement("section");
    panel.id = "kg-accessibility-panel";
    panel.className = "kg-accessibility-panel";
    panel.hidden = true;
    panel.setAttribute("aria-label", "Reading settings");
    panel.innerHTML = `
      <h2>Reading settings</h2>
      <label>Text size
        <input id="kg-text-scale" type="range" min="0.9" max="1.35" step="0.05" value="${prefs.textScale}">
      </label>
      <label>Line height
        <input id="kg-line-height" type="range" min="1.35" max="1.9" step="0.05" value="${prefs.lineHeight}">
      </label>
      <label>Original-language font
        <select id="kg-original-font">
          <option value="system">System</option>
          <option value="serif">Biblical serif</option>
        </select>
      </label>
      <label class="kg-check"><input id="kg-high-contrast" type="checkbox"> High contrast</label>
      <label class="kg-check"><input id="kg-reduce-motion" type="checkbox"> Reduce motion</label>
    `;
    document.body.append(toggle, panel);

    const controls = {
      textScale: panel.querySelector("#kg-text-scale"),
      lineHeight: panel.querySelector("#kg-line-height"),
      originalFont: panel.querySelector("#kg-original-font"),
      highContrast: panel.querySelector("#kg-high-contrast"),
      reduceMotion: panel.querySelector("#kg-reduce-motion")
    };
    controls.originalFont.value = prefs.originalFont;
    controls.highContrast.checked = !!prefs.highContrast;
    controls.reduceMotion.checked = !!prefs.reduceMotion;

    function update() {
      const next = {
        textScale: Number(controls.textScale.value) || defaults.textScale,
        lineHeight: Number(controls.lineHeight.value) || defaults.lineHeight,
        originalFont: controls.originalFont.value,
        highContrast: controls.highContrast.checked,
        reduceMotion: controls.reduceMotion.checked
      };
      applyPrefs(next);
      savePrefs(next);
    }

    Object.values(controls).forEach((control) => {
      control.addEventListener("input", update);
      control.addEventListener("change", update);
    });
    toggle.addEventListener("click", () => {
      panel.hidden = !panel.hidden;
      toggle.setAttribute("aria-expanded", String(!panel.hidden));
    });
  }

  function initLearningEnhancements() {
    ensureStyles();
    applyPrefs(loadPrefs());
    if (document.body) buildPanel();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLearningEnhancements);
  } else {
    initLearningEnhancements();
  }

  window.KGLearningEnhancements = {
    loadPrefs,
    savePrefs,
    applyPrefs
  };
})();
