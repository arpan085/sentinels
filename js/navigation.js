(function () {
  // Smooth same-page anchor navigation
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  });

  // Persist clicked job id for job page
  document.addEventListener("click", (e) => {
    const card = e.target.closest("[data-job-id]");
    if (!card) return;
    const id = card.getAttribute("data-job-id");
    try { sessionStorage.setItem("sentinels:job", id); } catch (_) {}
  });
})();
