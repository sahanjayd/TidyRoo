// -----------------------------
// Tiny utils
// -----------------------------
const $ = (sel, scope = document) => scope.querySelector(sel);
const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));
const money = new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" });

function debounce(fn, wait = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

// -----------------------------
// Data (left as-is, but feel free to Melbourne-ify suburbs later)
// -----------------------------
const DATA = {
  faqs: [
    { q: 'How long does the steam clean take to dry?', a: 'Most carpets are walk-on dry in three to six hours. We use high extraction and air movers where needed to speed things up.' },
    { q: 'Can you move furniture?', a: 'Yes, light items like chairs and side tables are moved carefully and returned with protective tabs. We ask that electronics and breakables are moved beforehand.' },
    { q: 'Are the products child and pet safe?', a: 'We select biodegradable, low-tox detergents and rinse thoroughly. Surfaces are safe once dry. Let us know about sensitivities and we will tailor the solution.' },
    { q: 'Do you service weekend or after-hours slots?', a: 'Standard hours are Monday to Saturday, 8am to 6pm. For urgent bond cleans or commercial work we can accommodate after-hours on request.' },
    { q: 'What if a stain comes back?', a: 'If something wicks back after service, call us within seven days. Our satisfaction guarantee covers a complimentary re-clean of the affected area.' }
  ]
};

// -----------------------------
// Pricing config (update as needed)
// -----------------------------
const PRICING = {
  base: { carpet: 79, upholstery: 99, rugs: 69, mattress: 69, tiles: 129 },
  perRoom: { carpet: 25, upholstery: 0, rugs: 0, mattress: 0, tiles: 0 },
  extras: { "stain-guard": 15, "deodorise": 10, "flood": 89 }
};

// -----------------------------
// Components
// -----------------------------
function starMarkup(count) {
  return `
    <span class="sr-only">${count} out of 5 stars</span>
    <span aria-hidden="true">${'★'.repeat(count)}</span>
  `;
}

const REVIEW_STORAGE_KEY = 'tidyroo.reviews';
const REVIEW_MEMORY = [];

function formatReviewDate(date = new Date()) {
  return date.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });
}

function getStoredReviews() {
  if (!('localStorage' in window)) return REVIEW_MEMORY.slice();
  try {
    const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return REVIEW_MEMORY.slice();
  }
}

function saveReview(review) {
  if (!('localStorage' in window)) {
    REVIEW_MEMORY.unshift(review);
    return REVIEW_MEMORY.slice();
  }
  try {
    const reviews = getStoredReviews();
    reviews.unshift(review);
    localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviews));
    return reviews;
  } catch (err) {
    REVIEW_MEMORY.unshift(review);
    return REVIEW_MEMORY.slice();
  }
}

function initMobileNav() {
  const toggle = $('#menuToggle');
  const mobileNav = $('#mobileNav');
  if (!toggle || !mobileNav) return;

  const setState = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    mobileNav.setAttribute('aria-expanded', String(open));
    // Prefer class toggles; CSS should handle display
    mobileNav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setState(open);
  });

  // Close on link click
  $$('a', mobileNav).forEach((link) => link.addEventListener('click', () => setState(false)));
}

function initActiveNav() {
  const normalize = (href = '') => {
    const [path] = href.split('#');
    const parts = path.split('/');
    const last = parts.pop() || '';
    return last || 'index.html';
  };

  const current = normalize(window.location.pathname || '');
  const links = [...$$('.desktop-nav a'), ...$$('.mobile-nav a')];

  links.forEach((link) => {
    const target = normalize(link.getAttribute('href') || '');
    const matchesHome = target === 'index.html' && current === 'index.html';
    if (target === current || matchesHome) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initCurrentYear() {
  const yearEl = $('#currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initBeforeAfter() {
  $$('.before-after').forEach((block) => {
    const slider = $('input[type="range"]', block);
    const before = block.querySelector('.before-image');
    if (!slider || !before) return;

    const update = () => {
      const value = Number(slider.value || 50);
      const rightClip = Math.max(0, 100 - value);
      before.style.clipPath = `inset(0 ${rightClip}% 0 0)`;
    };

    slider.addEventListener('input', update);
    update();
  });
}

function renderTestimonials() {
  const container = $('#homeTestimonials');
  if (!container) return;

  const items = getStoredReviews().slice(0, 3);
  container.innerHTML = '';
  if (!items.length) return;

  const frag = document.createDocumentFragment();

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'testimonial';

    const stars = document.createElement('div');
    stars.className = 'badge-live';
    const rating = Math.min(5, Math.max(1, Number(item.rating) || 5));
    stars.innerHTML = starMarkup(rating);

    const body = document.createElement('p');
    body.textContent = item.text || '';

    const cite = document.createElement('cite');
    const name = item.name || 'Anonymous';
    const suburb = item.suburb ? ` - ${item.suburb}` : '';
    cite.textContent = `${name}${suburb}`;

    card.append(stars, body, cite);
    frag.appendChild(card);
  });

  container.appendChild(frag);
}

function renderFaq() {
  const container = $('#faqList');
  if (!container) return;

  DATA.faqs.forEach((faq, idx) => {
    const details = document.createElement('details');
    details.className = 'accordion-item';
    if (idx === 0) details.setAttribute('open', '');

    const summary = document.createElement('summary');
    summary.className = 'accordion-header';
    summary.textContent = faq.q;

    const content = document.createElement('div');
    content.className = 'accordion-content';
    content.textContent = faq.a;

    details.append(summary, content);
    container.appendChild(details);
  });
}

function renderReviewsPage(items = null) {
  const container = $('#reviewsList');
  if (!container) return;
  const emptyState = $('#reviewEmptyState');

  const reviews = Array.isArray(items) ? items : getStoredReviews();
  container.innerHTML = '';

  if (!reviews.length) {
    if (emptyState) emptyState.hidden = false;
    return;
  }

  if (emptyState) emptyState.hidden = true;

  const frag = document.createDocumentFragment();

  reviews.forEach((item, idx) => {
    const card = document.createElement('article');
    card.className = 'testimonial';

    const slugBase = [item.name, item.suburb, item.date, idx]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-');
    const titleId = `review-${slugBase || idx}`;
    card.setAttribute('aria-labelledby', titleId);

    const header = document.createElement('header');
    header.className = 'row';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.gap = '12px';

    const stars = document.createElement('div');
    stars.id = titleId;
    const rating = Math.min(5, Math.max(1, Number(item.rating) || 5));
    stars.innerHTML = starMarkup(rating);

    const date = document.createElement('span');
    date.className = 'badge-neutral';
    date.textContent = item.date || formatReviewDate();

    header.append(stars, date);

    const body = document.createElement('p');
    body.textContent = item.text || '';

    const cite = document.createElement('cite');
    const name = item.name || 'Anonymous';
    const suburb = item.suburb ? ` - ${item.suburb}` : '';
    cite.textContent = `${name}${suburb}`;

    card.append(header, body, cite);
    frag.appendChild(card);
  });

  container.appendChild(frag);
}

function initReviewForm() {
  const form = $('#reviewForm');
  if (!form) return;
  const success = $('#reviewSuccess');
  const filter = $('#reviewFilter');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const suburb = String(data.get('suburb') || '').trim();
    const text = String(data.get('review') || '').trim();
    const rating = Math.min(5, Math.max(1, parseInt(data.get('rating') || '5', 10) || 5));

    const review = {
      name,
      suburb,
      text,
      rating,
      date: formatReviewDate()
    };

    const reviews = saveReview(review);
    renderReviewsPage(reviews);
    form.reset();
    if (filter) filter.value = '';

    if (success) {
      success.textContent = 'Thanks! Your review is now live on this page.';
      success.hidden = false;
    }
  });
}

// -----------------------------
// Google Places (Address Autocomplete)
// The HTML loads the script with &callback=initAutocomplete
// -----------------------------
function setupPlacesAutocomplete() {
  const input = $('#address');
  if (!input) return;
  if (!(window.google && google.maps && google.maps.places)) return;

  const ac = new google.maps.places.Autocomplete(input, {
    types: ['address'],
    componentRestrictions: { country: 'au' }
  });

  // Bias to Greater Melbourne
  const melbBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-38.6, 144.2), // SW approx
    new google.maps.LatLng(-37.4, 145.6)  // NE approx
  );
  ac.setBounds(melbBounds);
  ac.setOptions({ strictBounds: false });
}

// Expose callback for the Google script tag
window.initAutocomplete = setupPlacesAutocomplete;

// -----------------------------
// Quote estimate
// -----------------------------
function getCheckedValues(scope, name) {
  return Array.from(scope.querySelectorAll(`input[name="${name}"]:checked`)).map(n => n.value);
}

function calculateEstimate(form) {
  const service = form.service?.value || 'carpet';
  const rooms = Math.max(0, parseInt(form.rooms?.value || '0', 10) || 0);
  const extras = getCheckedValues(form, 'extras[]');

  const base = PRICING.base[service] ?? 79;
  const perRoom = PRICING.perRoom[service] ?? 0;

  let total = base + rooms * perRoom;
  for (const e of extras) total += PRICING.extras[e] ?? 0;

  return {
    total: Math.min(Math.max(total, 49), 9999),
    service,
    rooms,
    extras
  };
}

// -----------------------------
// Forms (enhanced submit + success message)
// -----------------------------
function initForms() {
  const encode = (formData) => {
    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      params.append(key, value);
    }
    return params.toString();
  };

  $$('form[data-enhanced]').forEach((form) => {
    const response =
      $('[data-form-response]', form.parentElement) ||
      $('[data-form-response]');
    let busy = false;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (busy) return;
      if (!form.reportValidity()) return;

      busy = true;
      try {
        // Build hidden summaries for quote form
        prepareServiceSummaries(form);

        const data = new FormData(form);
        if (!data.get('form-name') && form.name) {
          data.set('form-name', form.name);
        }

        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode(data)
        });

        if (!res.ok) {
          throw new Error('Netlify form submit failed: ' + res.status);
        }

        if (response) {
          if (form.name === 'callback') {
            response.textContent =
              'Thanks! We have your details and will call you back shortly.';
          } else if (form.name === 'quote') {
            response.textContent =
              'Thanks! A TidyRoo coordinator will confirm the details shortly.';
          } else {
            response.textContent =
              'Thanks! We have your details and will get back to you shortly.';
          }

          response.hidden = false;
          response.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        form.reset();
      } catch (err) {
        alert(
          'Sorry, something went wrong submitting your form. Please try again or call us.'
        );
      } finally {
        busy = false;
      }
    });
  });
}


// -----------------------------
// Hours badge (Melbourne time)
// -----------------------------
function initBusinessHoursBadge() {
  const badge = $('[data-last-minute]');
  if (!badge) return;
  const now = new Date();
  const localNow = new Date(now.toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' }));
  const day = localNow.getDay();         // 0 Sun .. 6 Sat
  const hour = localNow.getHours();      // 0..23

  const openDay = day >= 1 && day <= 6;  // Mon-Sat
  const withinHours = hour >= 8 && hour < 18; // 8am-6pm
  if (!(openDay && withinHours)) badge.hidden = true;
}

// -----------------------------
// Misc UI
// -----------------------------
function initFloatingContact() {
  const fab = $('#contactFab');
  if (!fab) return;
  const dismiss = $('[data-dismiss-fab]', fab);
  if (dismiss) dismiss.addEventListener('click', (e) => {
    e.preventDefault();
    fab.style.display = 'none';
  });
}

function initScrollShadow() {
  const header = $('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  });
}

// -----------------------------
// Scroll reveal animations
// -----------------------------
function initReveal() {
  const selector = [
    '.hero-copy > *',
    '.card',
    '.testimonial',
    '.trust-pill',
    '.process-step',
    '.service-area-list li',
    '.banner',
    '.cta-strip',
    'section h2'
  ].join(',');

  const els = $$(selector);
  if (!els.length || !('IntersectionObserver' in window)) return;

  els.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${Math.min(i * 30, 300)}ms`);
  });

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { root: null, threshold: 0.12 });

  els.forEach((el) => io.observe(el));
}

function initCouponToggle() {
  const input = $('#couponCode');
  const message = $('#couponMessage');
  if (!input || !message) return;

  input.addEventListener('input', () => {
    const code = input.value.trim().toUpperCase();
    if (code === 'ROO10') {
      message.textContent = 'Nice! ROO10 applies 10% off your service total.';
      message.hidden = false;
    } else if (code.length >= 4) {
      message.textContent = 'Enter ROO10 for our current new customer offer.';
      message.hidden = false;
    } else {
      message.hidden = true;
    }
  });
}

function initReviewFilter() {
  const filter = $('#reviewFilter');
  const list = $('#reviewsList');
  if (!filter || !list) return;

  filter.addEventListener('input', () => {
    const q = filter.value.trim().toLowerCase();
    $$('.testimonial', list).forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
  });
}

// -----------------------------
// Boot
// -----------------------------
function initUI() {
  initMobileNav();
  initActiveNav();
  initCurrentYear();
  initBeforeAfter();
  renderTestimonials();
  renderFaq();
  renderReviewsPage();
  initReviewForm();
  initForms();
  initQuoteServices();
  initBusinessHoursBadge();
  initFloatingContact();
  initScrollShadow();
  initReveal();
  initCouponToggle();
  initReviewFilter();

  // If Google script loaded without calling the callback (edge cases), try once:
  setupPlacesAutocomplete();
}

document.addEventListener('DOMContentLoaded', initUI);
