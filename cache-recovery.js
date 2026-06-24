(async function () {
  try {
    const key = "cacheRecoveryDone";
    if (sessionStorage.getItem(key) === "1") return;
    sessionStorage.setItem(key, "1");

    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((reg) => reg.unregister()));
    }

    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((name) => caches.delete(name)));
    }
  } catch (_) {}
})();
