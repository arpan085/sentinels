(function () {
  function showToast(msg) {
    let t = document.querySelector(".toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(() => t.classList.add("show"));
    setTimeout(() => t.classList.remove("show"), 2400);
  }

  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (!form.matches("[data-form]")) return;
    e.preventDefault();
    const kind = form.getAttribute("data-form");

    if (kind === "apply") {
      // Simulate login gate
      const loggedIn = sessionStorage.getItem("sentinels:auth") === "1";
      if (!loggedIn) {
        sessionStorage.setItem("sentinels:auth", "1");
      }
      showToast("Application Submitted ✓");
      setTimeout(() => { window.location.href = "../index.html"; }, 1400);
    } else if (kind === "contact") {
      showToast("Message sent — we'll be in touch.");
      form.reset();
    }
  });

  window.SentinelsToast = showToast;
})();
