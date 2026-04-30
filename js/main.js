(function () {
  // Render jobs grid if present
  const grid = document.querySelector("[data-jobs-grid]");
  if (grid && window.SENTINELS_JOBS) {
    grid.innerHTML = window.SENTINELS_JOBS.map((j) => `
      <a href="pages/job.html" class="job-card block" data-job-id="${j.id}">
        <span class="job-tag">${j.tag}</span>
        <h3>${j.title}</h3>
        <p>${j.description}</p>
        <div class="job-meta">
          <span>📍 ${j.location}</span>
          <span>💼 ${j.type}</span>
        </div>
        <span class="apply-link">Apply now</span>
      </a>
    `).join("");
  }

  // Job page: hydrate selected job
  const jobView = document.querySelector("[data-job-view]");
  if (jobView && window.SENTINELS_JOBS) {
    let id;
    try { id = sessionStorage.getItem("sentinels:job"); } catch (_) {}
    const job = window.SENTINELS_JOBS.find((j) => j.id === id) || window.SENTINELS_JOBS[0];
    jobView.querySelector("[data-job-tag]").textContent = job.tag;
    jobView.querySelector("[data-job-title]").textContent = job.title;
    jobView.querySelector("[data-job-desc]").textContent = job.description;
    jobView.querySelector("[data-job-location]").textContent = job.location;
    jobView.querySelector("[data-job-type]").textContent = job.type;
    jobView.querySelector("[data-job-salary]").textContent = job.salary;
    jobView.querySelector("[data-job-reqs]").innerHTML =
      job.requirements.map((r) => `<li>${r}</li>`).join("");
  }

  // Footer year
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
