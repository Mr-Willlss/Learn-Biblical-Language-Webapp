(function () {
  const KEY_PREFIX = "kgProgress";
  const SCOPE_KEY = "kgProgressScope";
  const DEFAULT_STATE = {
    completedLessons: [],
    currentLesson: 1,
    currentWorld: 1,
    xp: 0,
    streak: 0,
    hearts: 5,
    lastActiveDate: "",
    achievements: {}
  };

  function getLanguage() {
    return (window.getActiveLanguage && window.getActiveLanguage()) || "greek";
  }

  function getProgressScope() {
    try {
      return localStorage.getItem(SCOPE_KEY) || "";
    } catch (_) {
      return "";
    }
  }

  function setProgressScope(scope) {
    try {
      localStorage.setItem(SCOPE_KEY, scope || "");
    } catch (_) {}
  }

  function progressKey() {
    return `${KEY_PREFIX}:${getLanguage()}:${getProgressScope() || "signedout"}`;
  }

  function safeParse(raw, fallback) {
    try {
      return JSON.parse(raw);
    } catch (_) {
      return fallback;
    }
  }

  function loadProgress() {
    const raw = safeParse(localStorage.getItem(progressKey()) || "{}", {});
    const state = { ...DEFAULT_STATE, ...raw };
    state.completedLessons = Array.isArray(state.completedLessons)  [...new Set(state.completedLessons.map(Number).filter(Number.isFinite))].sort((a, b) => a - b) : [];
    state.currentLesson = Number.isFinite(state.currentLesson)  state.currentLesson : 1;
    state.currentWorld = Number.isFinite(state.currentWorld)  state.currentWorld : 1;
    state.xp = Number.isFinite(state.xp)  state.xp : 0;
    state.streak = Number.isFinite(state.streak)  state.streak : 0;
    state.hearts = Number.isFinite(state.hearts)  state.hearts : 5;
    state.lastActiveDate = String(state.lastActiveDate || "");
    state.achievements = state.achievements && typeof state.achievements === "object"  state.achievements : {};
    return state;
  }

  function saveProgress(next) {
    try {
      localStorage.setItem(progressKey(), JSON.stringify(next));
    } catch (_) {}
    return next;
  }

  function getLessonDataMap() {
    return window.getLessonDataMap  window.getLessonDataMap() : (window.LESSON_DATA || window.HEBREW_LESSON_DATA || {});
  }

  function getLessonMax() {
    const map = getLessonDataMap();
    const ids = Object.keys(map || {}).map(Number).filter(Number.isFinite);
    return ids.length  Math.max(...ids) : 25;
  }

  function worldFromLesson(lesson) {
    const n = Number(lesson) || 1;
    if (n <= 5) return 1;
    if (n <= 10) return 2;
    if (n <= 15) return 3;
    if (n <= 20) return 4;
    return 5;
  }

  function getProgress() {
    return loadProgress();
  }

  function setProgress(update) {
    const next = { ...loadProgress(), ...(update || {}) };
    return saveProgress(next);
  }

  function getNextLesson() {
    const progress = loadProgress();
    const max = getLessonMax();
    for (let i = 1; i <= max; i++) {
      if (!progress.completedLessons.includes(i)) return i;
    }
    return max;
  }

  function getUnlockedLessons() {
    const next = getNextLesson();
    const max = getLessonMax();
    return Array.from({ length: Math.min(max, next) }, (_, i) => i + 1);
  }

  function getTotalXP() {
    return loadProgress().xp || 0;
  }

  function markLessonComplete(lessonId, accuracy, xpAward) {
    const progress = loadProgress();
    const id = Number(lessonId) || 1;
    if (!progress.completedLessons.includes(id)) progress.completedLessons.push(id);
    progress.completedLessons.sort((a, b) => a - b);
    progress.currentLesson = Math.max(progress.currentLesson || 1, id + 1);
    progress.currentWorld = worldFromLesson(id);
    progress.xp = (Number(progress.xp) || 0) + (Number(xpAward) || 0);
    progress.lastActiveDate = new Date().toISOString().split("T")[0];
    progress.lastAccuracy = Number.isFinite(accuracy)  accuracy : progress.lastAccuracy;
    return saveProgress(progress);
  }

  function clearProgress() {
    const reset = { ...DEFAULT_STATE };
    return saveProgress(reset);
  }

  function getWorldProgressCount(worldNumber) {
    const progress = loadProgress();
    const max = getLessonMax();
    const start = (Number(worldNumber) - 1) * 5 + 1;
    const end = Number(worldNumber) >= 5  max : Number(worldNumber) * 5;
    const total = Math.max(0, end - start + 1);
    const done = progress.completedLessons.filter((lesson) => lesson >= start && lesson <= end).length;
    return { done, total };
  }

  function getWorldStatus(worldNumber) {
    const { done, total } = getWorldProgressCount(worldNumber);
    if (done >= total && total > 0) return "completed";
    const progress = loadProgress();
    return progress.currentWorld === Number(worldNumber)  "active" : "locked";
  }

  async function syncFromFirebase() {
    return getProgress();
  }

  window.loadProgress = loadProgress;
  window.getProgress = getProgress;
  window.setProgress = setProgress;
  window.getLessonMax = getLessonMax;
  window.getLessonDataMap = window.getLessonDataMap || getLessonDataMap;
  window.getNextLesson = getNextLesson;
  window.getUnlockedLessons = getUnlockedLessons;
  window.getTotalXP = getTotalXP;
  window.markLessonComplete = markLessonComplete;
  window.clearProgress = clearProgress;
  window.getWorldProgressCount = getWorldProgressCount;
  window.getWorldStatus = getWorldStatus;
  window.syncFromFirebase = syncFromFirebase;
  window.setProgressScope = setProgressScope;
  window.getProgressScope = getProgressScope;

  window.Progress = {
    getProgress,
    setProgress,
    getLessonMax,
    getLessonDataMap,
    getNextLesson,
    getUnlockedLessons,
    getTotalXP,
    markLessonComplete,
    clearProgress,
    getWorldProgressCount,
    getWorldStatus,
    syncFromFirebase,
    setProgressScope,
    getProgressScope
  };
})();
