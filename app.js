(function () {
  function ensureToastHost() {
    let host = document.getElementById("app-toast-host");
    if (host) return host;
    host = document.createElement("div");
    host.id = "app-toast-host";
    host.style.cssText = "position:fixed;left:16px;right:16px;bottom:16px;z-index:99999;pointer-events:none";
    document.body.appendChild(host);
    return host;
  }

  if (typeof window.showToast !== "function") {
    window.showToast = function (message, tone) {
      const host = ensureToastHost();
      const toast = document.createElement("div");
      toast.textContent = String(message || "");
      toast.style.cssText = [
        "pointer-events:auto",
        "margin:8px auto 0",
        "max-width:560px",
        "padding:10px 12px",
        "border-radius:12px",
        "background:rgba(15,17,23,0.94)",
        "color:#f8fafc",
        "border:1px solid rgba(255,255,255,0.16)",
        "box-shadow:0 14px 34px rgba(0,0,0,0.35)"
      ].join(";");
      if (tone === "good") toast.style.borderColor = "rgba(34,197,94,0.45)";
      if (tone === "bad") toast.style.borderColor = "rgba(239,68,68,0.45)";
      if (tone === "info") toast.style.borderColor = "rgba(59,130,246,0.45)";
      host.appendChild(toast);
      setTimeout(() => toast.remove(), 2600);
    };
  }
})();
