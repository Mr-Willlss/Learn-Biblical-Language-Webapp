(function () {
  const STORAGE_KEY = "activeLanguage";
  const ROUTES = {
    dashboard: { greek: "dashboard.html", hebrew: "dashboard-hebrew.html" },
    practice: { greek: "practice.html", hebrew: "practice-hebrew.html" },
    lessons: { greek: "lessons.html", hebrew: "lessons-hebrew.html" },
    vocabulary: { greek: "vocabulary.html", hebrew: "vocabulary-hebrew.html" },
    friends: { greek: "friends.html", hebrew: "friends-hebrew.html" },
    leaderboard: { greek: "leaderboard.html", hebrew: "leaderboard-hebrew.html" },
    rewards: { greek: "rewards.html", hebrew: "rewards-hebrew.html" },
    studyRoom: { greek: "study-room.html", hebrew: "study-room-hebrew.html" },
    quests: { greek: "quests.html", hebrew: "quests-hebrew.html" },
    lessonPlayer: { greek: "lesson-player.html", hebrew: "lesson-hebrew.html" },
    languageHome: { greek: "language-home.html", hebrew: "language-home.html" },
    profile: { greek: "profile.html", hebrew: "profile.htmllang=hebrew" },
    index: { greek: "index.html", hebrew: "index.htmllang=hebrew" }
  };

  function getActiveLanguage() {
    try {
      const stored = String(localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
      if (stored === "hebrew" || stored === "greek") return stored;
    } catch (_) {}
    return location.pathname.toLowerCase().includes("-hebrew.") || new URLSearchParams(location.search).get("lang") === "hebrew"
       "hebrew"
      : "greek";
  }

  function setLanguageScope(lang) {
    const next = String(lang || "greek").toLowerCase() === "hebrew"  "hebrew" : "greek";
    try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
    document.documentElement.lang = next === "hebrew"  "he" : "en";
    document.documentElement.dir = next === "hebrew"  "rtl" : "ltr";
    document.body.setAttribute("data-language", next);
    return next;
  }

  function applyLanguageScope() {
    return setLanguageScope(getActiveLanguage());
  }

  function getLanguageLabel(lang) {
    return String(lang || getActiveLanguage()) === "hebrew"  "Biblical Hebrew" : "Koine Greek";
  }

  function mapHref(href, lang) {
    const next = String(lang || getActiveLanguage()) === "hebrew"  "hebrew" : "greek";
    const clean = href.split("#")[0].split("")[0];
    const suffix = href.includes("#")  `#${href.split("#")[1]}` : "";
    const query = href.includes("")  `${href.split("")[1].split("#")[0]}` : "";
    const mappings = {
      "dashboard.html": ROUTES.dashboard[next],
      "practice.html": ROUTES.practice[next],
      "lessons.html": ROUTES.lessons[next],
      "vocabulary.html": ROUTES.vocabulary[next],
      "friends.html": ROUTES.friends[next],
      "leaderboard.html": ROUTES.leaderboard[next],
      "rewards.html": ROUTES.rewards[next],
      "study-room.html": ROUTES.studyRoom[next],
      "quests.html": ROUTES.quests[next],
      "lesson-player.html": ROUTES.lessonPlayer[next],
      "language-home.html": ROUTES.languageHome[next],
      "profile.html": ROUTES.profile[next],
      "index.html": ROUTES.index[next]
    };
    return mappings[clean]  mappings[clean] + suffix + (query && !mappings[clean].includes("")  query : "") : href;
  }

  function applyLanguageLinks() {
    const lang = getActiveLanguage();
    document.querySelectorAll("a[href]").forEach((anchor) => {
      const href = anchor.getAttribute("href") || "";
      if (/^(https:|mailto:|tel:|#|data:)/i.test(href)) return;
      anchor.setAttribute("href", mapHref(href, lang));
    });
  }

  window.getActiveLanguage = getActiveLanguage;
  window.setLanguageScope = setLanguageScope;
  window.applyLanguageScope = applyLanguageScope;
  window.applyLanguageLinks = applyLanguageLinks;
  window.getLanguageLabel = getLanguageLabel;
  applyLanguageScope();
})();
