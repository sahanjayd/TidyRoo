// -----------------------------
// Hero slideshow config
// -----------------------------
// Swap to your local files, e.g. "images/carpet.jpg"
const HERO_SLIDES = [
  {
    label: "Upholstery cleaning",
    img700: "images/service.jpg",
    img900: "images/service.jpg",
    alt: "Technician unloading eco-friendly cleaning equipment from van"
  },
  {
    label: "Carpet Steam Cleaning",
    img700: "images/service1.jpg",
    img900: "images/service1.jpg",
    alt: "Cleaner gently steaming a grey fabric sofa cushion"
  },
  {
    label: "Mattress sanitising",
    img700: "images/service2.jpg",
    img900: "images/service2.jpg",
    alt: "Wool rug being rinsed and brushed"
  },
  {
    label: "Staircase Cleaning",
    img700: "images/service3.jpg",
    img900: "images/service3.jpg",
    alt: "Technician sanitising a mattress with a handheld extractor"
  },
  {
    label: "Curtains Steam Cleaning",
    img700: "images/service4.jpg",
    img900: "images/service4.jpg",
    alt: "Close-up of sparkling clean floor tiles and grout lines"
  },
  {
    label: "Tile & grout cleaning",
    img700: "images/service5.jpg",
    img900: "images/service5.jpg",
    alt: "Close-up of sparkling"
  }
];

// -----------------------------
// Hero slideshow
// -----------------------------
function initHeroSlideshow() {
  const root = document.getElementById("heroMedia");
  const picture = document.getElementById("heroPicture");
  const caption = document.getElementById("heroCaption");
  const dotsWrap = document.getElementById("heroDots");
  const prevBtn = root?.querySelector(".hero-prev");
  const nextBtn = root?.querySelector(".hero-next");
  if (!root || !picture || !caption || !dotsWrap || !prevBtn || !nextBtn || HERO_SLIDES.length === 0) return;

  const autoplay = root.getAttribute("data-autoplay") !== "false";
  const intervalMs = parseInt(root.getAttribute("data-interval") || "5000", 10);

  let idx = 0;
  let timer = null;
  let isHover = false;

  // Build dots
  dotsWrap.innerHTML = "";
  HERO_SLIDES.forEach((s, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", s.label);
    dot.addEventListener("click", () => goTo(i, true));
    dotsWrap.appendChild(dot);
  });

  function render() {
    const s = HERO_SLIDES[idx];

    // Preload next image (nice-to-have)
    const next = HERO_SLIDES[(idx + 1) % HERO_SLIDES.length];
    if (next) {
      const pre = new Image();
      pre.src = next.img700;
    }

    picture.innerHTML = `
      <source srcset="${s.img900}" type="image/jpeg" />
      <img src="${s.img700}" alt="${s.alt}" loading="eager" />
    `;
    caption.textContent = s.label;

    // Update dots
    Array.from(dotsWrap.children).forEach((d, i) => {
      d.classList.toggle("is-active", i === idx);
      d.setAttribute("aria-selected", i === idx ? "true" : "false");
      d.tabIndex = i === idx ? 0 : -1;
    });
  }

  function goTo(i, user = false) {
    idx = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
    render();
    if (user) restart();
  }

  function next() { goTo(idx + 1); }
  function prev() { goTo(idx - 1); }

  function start() {
    if (!autoplay) return;
    stop();
    timer = setInterval(() => { if (!isHover) next(); }, intervalMs);
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function restart() {
    stop();
    start();
  }

  // Controls
  nextBtn.addEventListener("click", () => goTo(idx + 1, true));
  prevBtn.addEventListener("click", () => goTo(idx - 1, true));

  // Pause on hover/focus for accessibility
  root.addEventListener("mouseenter", () => { isHover = true; });
  root.addEventListener("mouseleave", () => { isHover = false; });

  // Keyboard support
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(idx + 1, true); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); goTo(idx - 1, true); }
    if (e.key === " ")          { e.preventDefault(); // space toggles
      if (timer) stop(); else start();
    }
  });
  root.setAttribute("tabindex", "0"); // allow keyboard focus

  // Basic swipe (touch)
  let touchX = null;
  root.addEventListener("touchstart", (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", (e) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) { dx < 0 ? goTo(idx + 1, true) : goTo(idx - 1, true); }
    touchX = null;
  }, { passive: true });

  // Init
  render();
  start();
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlideshow();
});

