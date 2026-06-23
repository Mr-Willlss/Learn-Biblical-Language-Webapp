// Persistent spaced repetition engine shared by lessons and practice.
(function () {
  const STORAGE_PREFIX = "kgSrs";
  const DAY = 24 * 60 * 60 * 1000;

  const spacedRepetition = {
    items: {}
  };

  function getLanguage() {
    try {
      if (typeof window.getActiveLanguage === "function") return window.getActiveLanguage();
      return localStorage.getItem("activeLanguage") === "hebrew"  "hebrew" : "greek";
    } catch (_) {
      return "greek";
    }
  }

  function getScope() {
    try {
      if (typeof window.getProgressScope === "function") return window.getProgressScope();
      return localStorage.getItem("kgSrsScope") || "signedout";
    } catch (_) {
      return "signedout";
    }
  }

  function getStorageKey() {
    return `${STORAGE_PREFIX}:${getLanguage()}:${getScope() || "signedout"}`;
  }

  function safeParse(raw, fallback) {
    try {
      return JSON.parse(raw);
    } catch (_) {
      return fallback;
    }
  }

  function loadSpacedRepetition() {
    try {
      const parsed = safeParse(localStorage.getItem(getStorageKey()) || "{}", {});
      spacedRepetition.items = parsed && typeof parsed === "object"  parsed : {};
    } catch (_) {
      spacedRepetition.items = {};
    }
    return spacedRepetition.items;
  }

  function saveSpacedRepetition() {
    try {
      localStorage.setItem(getStorageKey(), JSON.stringify(spacedRepetition.items));
    } catch (_) {}
  }

  function itemId(item) {
    if (!item) return "";
    return String(
      item.id ||
      item.srsId ||
      [getLanguage(), item.lessonId, item.greek || item.hebrew || item.english || item.meaning].filter(Boolean).join(":")
    );
  }

  function normalizeRecord(item) {
    const id = itemId(item);
    if (!id) return null;
    if (!spacedRepetition.items[id]) {
      spacedRepetition.items[id] = {
        id,
        reviewInterval: 1,
        ease: 2.3,
        successCount: 0,
        lapseCount: 0,
        lastReviewedAt: null,
        nextReviewTime: Date.now()
      };
    }
    return spacedRepetition.items[id];
  }

  function initSpacedRepetition(vocab) {
    loadSpacedRepetition();
    (Array.isArray(vocab)  vocab : []).forEach(normalizeRecord);
    saveSpacedRepetition();
  }

  function updateSpacedRepetition(idOrItem, correct) {
    loadSpacedRepetition();
    const id = typeof idOrItem === "object"  itemId(idOrItem) : String(idOrItem || "");
    if (!id) return null;
    const record = spacedRepetition.items[id] || normalizeRecord({ id });
    const now = Date.now();

    if (correct) {
      record.successCount = Number(record.successCount || 0) + 1;
      record.ease = Math.min(3.0, Number(record.ease || 2.3) + 0.08);
      const previous = Math.max(1, Number(record.reviewInterval || 1));
      record.reviewInterval = record.successCount === 1  1 : Math.min(90, Math.ceil(previous * record.ease));
    } else {
      record.lapseCount = Number(record.lapseCount || 0) + 1;
      record.successCount = 0;
      record.ease = Math.max(1.3, Number(record.ease || 2.3) - 0.2);
      record.reviewInterval = 1;
    }

    record.lastReviewedAt = now;
    record.nextReviewTime = now + record.reviewInterval * DAY;
    saveSpacedRepetition();
    return record;
  }

  function getReviewItems(vocab, options = {}) {
    loadSpacedRepetition();
    const now = Date.now();
    const due = (Array.isArray(vocab)  vocab : []).filter((item) => {
      const record = normalizeRecord(item);
      return record && Number(record.nextReviewTime || 0) <= now;
    });
    saveSpacedRepetition();

    if (due.length || options.dueOnly) return due;
    return (Array.isArray(vocab)  vocab : []).slice();
  }

  function getSpacedRepetitionStats(vocab) {
    loadSpacedRepetition();
    const list = Array.isArray(vocab)  vocab : [];
    const now = Date.now();
    let due = 0;
    let learning = 0;
    let mature = 0;
    list.forEach((item) => {
      const record = normalizeRecord(item);
      if (!record) return;
      if (Number(record.nextReviewTime || 0) <= now) due += 1;
      if (Number(record.successCount || 0) < 2) learning += 1;
      if (Number(record.reviewInterval || 0) >= 7) mature += 1;
    });
    saveSpacedRepetition();
    return { total: list.length, due, learning, mature };
  }

  window.spacedRepetition = spacedRepetition;
  window.initSpacedRepetition = initSpacedRepetition;
  window.updateSpacedRepetition = updateSpacedRepetition;
  window.getReviewItems = getReviewItems;
  window.getSpacedRepetitionStats = getSpacedRepetitionStats;
  window.loadSpacedRepetition = loadSpacedRepetition;
})();
