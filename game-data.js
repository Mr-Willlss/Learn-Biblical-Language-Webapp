(function () {
  const SOURCE_PAGE = "lesson-player.html";
  const START_MARKER = "const LESSON_DATA =";
  const END_MARKER = "const firebaseConfig =";

  async function loadLessonData() {
    if (window.LESSON_DATA) return window.LESSON_DATA;
    if (window.__LESSON_DATA_PROMISE) return window.__LESSON_DATA_PROMISE;

    window.__LESSON_DATA_PROMISE = fetch(SOURCE_PAGE, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load ${SOURCE_PAGE}`);
        return response.text();
      })
      .then((source) => {
        const start = source.indexOf(START_MARKER);
        const end = source.indexOf(END_MARKER, start);
        if (start < 0 || end < 0) throw new Error("Lesson data block not found");
        const raw = source.slice(start + START_MARKER.length, end).trim().replace(/;\s*$/, "");
        const data = Function(`"use strict"; return (${raw});`)();
        window.LESSON_DATA = data;
        window.__LESSON_DATA = data;
        return data;
      })
      .catch(() => {
        window.LESSON_DATA = window.LESSON_DATA || {};
        window.__LESSON_DATA = window.__LESSON_DATA || window.LESSON_DATA;
        return window.LESSON_DATA;
      });

    return window.__LESSON_DATA_PROMISE;
  }

  window.loadLessonData = loadLessonData;
  window.getLessonDataMap = function () {
    return window.LESSON_DATA || window.__LESSON_DATA || {};
  };

  loadLessonData();
})();
