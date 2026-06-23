(function () {
  function revealApp() {
    const loader = document.getElementById("auth-loader");
    const content = document.getElementById("app-content");
    if (loader) loader.style.display = "none";
    if (content) content.style.display = "block";
  }

  function start(options = {}) {
    const loginUrl = options.loginUrl || "index.html";
    const emit = (user) => {
      document.dispatchEvent(new CustomEvent("authReady", { detail: user }));
      revealApp();
    };

    try {
      if (window.firebase && typeof firebase.auth === "function") {
        firebase.auth().onAuthStateChanged((user) => emit(user));
        return;
      }
    } catch (_) {}

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => emit(null), { once: true });
    } else {
      emit(null);
    }
  }

  window.AuthGuard = { start };
})();
