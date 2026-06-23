(function () {
  Object.defineProperty(window, "HEBREW_LESSON_DATA", {
    configurable: true,
    enumerable: true,
    get() {
      return window.__HEBREW_LESSON_DATA || window.LESSON_DATA || window.__LESSON_DATA || {};
    },
    set(value) {
      window.__HEBREW_LESSON_DATA = value;
    }
  });

  window.HEBREW_VIDEO_URLS = window.HEBREW_VIDEO_URLS || {};
})();
