(function () {
  if (typeof gsap === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  const isDashboard = !!document.querySelector(".dash-wrap");

  // ---------- Block reveal system (skip on dashboard) ----------
  if (!isDashboard) {
    const stages = document.querySelectorAll("[data-stage]");
    stages.forEach((stage) => {
      const items = stage.querySelectorAll(".block");
      if (!items.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: stage,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  } else {
    // Make sure dashboard blocks are fully visible (no scroll animation).
    gsap.set(".block", { opacity: 1, y: 0, clearProps: "all" });
  }

  // ---------- Stroke-to-fill text ----------
  document.querySelectorAll(".stroke-text").forEach((el) => {
    gsap.fromTo(el,
      { "--fill": "0%" },
      {
        "--fill": "100%",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  });

  // ---------- Highlight marker ----------
  document.querySelectorAll(".highlight").forEach((el) => {
    gsap.fromTo(el,
      { "--hl": "0%" },
      {
        "--hl": "104%",
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // ---------- Pencil underline ----------
  document.querySelectorAll(".underline-wrap path").forEach((p) => {
    gsap.fromTo(p,
      { strokeDashoffset: 600 },
      {
        strokeDashoffset: 0,
        duration: 1.1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: p,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // ---------- Hero shield: floating + slow rotation idle ----------
  const shield = document.querySelector("[data-shield]");
  if (shield && !isDashboard) {
    // Idle float
    gsap.to(shield, {
      y: -18,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    // Subtle tilt sway
    gsap.to(shield, {
      rotate: 6,
      duration: 5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }

  // ---------- Nav border on scroll ----------
  ScrollTrigger.create({
    start: 80,
    end: 99999,
    onUpdate: (self) => {
      const nav = document.querySelector(".nav");
      if (!nav) return;
      nav.style.borderBottomColor = self.scroll() > 80 ? "var(--border)" : "transparent";
    },
  });

  // Safety: refresh after a tick so first-load measurements are correct.
  requestAnimationFrame(() => ScrollTrigger.refresh());
})();
