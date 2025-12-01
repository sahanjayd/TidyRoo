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
  testimonials: [
    { name: 'Amelia R.', suburb: 'Paddington', quote: 'Our living room carpet looks brand new. The tech even moved the lounge carefully and put sliders underneath.', rating: 5 },
    { name: 'Jayden T.', suburb: 'New Farm', quote: 'Booked the same morning and they squeezed us in. No lingering wet smell and the kids bedroom dried fast.', rating: 5 },
    { name: 'Sophie L.', suburb: 'Carindale', quote: 'Clear quote, eco products, no upsells. They spot treated a red wine stain I had given up on.', rating: 5 },
    { name: 'Michael B.', suburb: 'West End', quote: 'Tile and grout surround the kitchen came up amazingly. They sealed afterwards and it still looks sharp.', rating: 5 },
    { name: 'Priya D.', suburb: 'Bulimba', quote: 'Quick to communicate and respectful with our pets. Lounge suite smells fresh without heavy perfumes.', rating: 5 },
    { name: 'Will H.', suburb: 'Woolloongabba', quote: 'Arrived on time, wore boot covers, and talked us through drying tips. Really impressed with the service.', rating: 5 }
  ],
  faqs: [
    { q: 'How long does the steam clean take to dry?', a: 'Most carpets are walk-on dry in three to six hours. We use high extraction and air movers where needed to speed things up.' },
    { q: 'Can you move furniture?', a: 'Yes, light items like chairs and side tables are moved carefully and returned with protective tabs. We ask that electronics and breakables are moved beforehand.' },
    { q: 'Are the products child and pet safe?', a: 'We select biodegradable, low-tox detergents and rinse thoroughly. Surfaces are safe once dry. Let us know about sensitivities and we will tailor the solution.' },
    { q: 'Do you service weekend or after-hours slots?', a: 'Standard hours are Monday to Saturday, 8am to 6pm. For urgent bond cleans or commercial work we can accommodate after-hours on request.' },
    { q: 'What if a stain comes back?', a: 'If something wicks back after service, call us within seven days. Our satisfaction guarantee covers a complimentary re-clean of the affected area.' }
  ],
  extendedReviews: [
    { name: 'Amelia R.', suburb: 'Paddington', date: 'May 2025', rating: 5, text: 'Absolutely wrapped with the result. Booking was simple online and they arrived ten minutes early. They protected the walls and dried the carpet with fans before leaving.' },
    { name: 'Jayden T.', suburb: 'New Farm', date: 'April 2025', rating: 5, text: 'Called the night before a rental inspection. Team squeezed us in and left the place spotless. Agent commented on the fresh smell.' },
    { name: 'Sophie L.', suburb: 'Carindale', date: 'April 2025', rating: 5, text: 'Transparent about pricing, no surprises. Upholstery feels soft again and the allergy symptoms in our home have improved.' },
    { name: 'Michael B.', suburb: 'West End', date: 'March 2025', rating: 5, text: 'Friendly tech walked me through each step and even left drying blocks under the timber legs. Highly recommend their tile service.' },
    { name: 'Priya D.', suburb: 'Bulimba', date: 'March 2025', rating: 5, text: 'Loved the eco focus. They brought their own mats to protect our floors and left a checklist with drying tips. Whole process felt easy.' },
    { name: 'Will H.', suburb: 'Woolloongabba', date: 'February 2025', rating: 5, text: 'Great communication from start to finish. Digital invoice, clear maintenance advice, and they even deodorised our rugs as a courtesy.' },
    { name: 'Emily C.', suburb: 'Teneriffe', date: 'January 2025', rating: 5, text: 'We booked the full home package after a renovation. Carpets, tiles, and upholstery all look brilliant and dust levels are way down.' },
    { name: 'Carlos F.', suburb: 'Kangaroo Point', date: 'January 2025', rating: 5, text: 'Best carpet clean we have had in years. Same-day booking and the coupon made it sharp value. They even left shoe covers for us.' },
    { name: 'Leah S.', suburb: 'Upper Mount Gravatt', date: 'December 2024', rating: 5, text: 'Mattress sanitising service helped with our toddler’s allergies. They followed up the next day to check in. Great customer care.' },
    { name: 'Thomas W.', suburb: 'South Brisbane', date: 'December 2024', rating: 5, text: 'Booked for our strata common areas. Responsive admin team, insured, and provided SWMS documents immediately. Building manager is happy.' },
    { name: 'Nina M.', suburb: 'Fortitude Valley', date: 'November 2024', rating: 5, text: 'The before-and-after on the dining chairs is insane. Technician explained stain guard options clearly and there was no pressure.' },
    { name: 'Oliver K.', suburb: 'Greenslopes', date: 'November 2024', rating: 5, text: 'We manage Airbnb properties and rely on TidyRoo for quick turnarounds. They always leave the place guest-ready with a nice neutral scent.' }
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

  const items = DATA.testimonials.slice(0, 3);
  const frag = document.createDocumentFragment();

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'testimonial';
    card.innerHTML = `
      <div class="badge-live">${starMarkup(item.rating)}</div>
      <p>${item.quote}</p>
      <cite>${item.name} · ${item.suburb}</cite>
    `;
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

function renderReviewsPage() {
  const container = $('#reviewsList');
  if (!container) return;

  const frag = document.createDocumentFragment();

  DATA.extendedReviews.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'testimonial';
    const titleId = `review-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    card.setAttribute('aria-labelledby', titleId);

    card.innerHTML = `
      <header class="row" style="justify-content: space-between; align-items: center; gap: 12px;">
        <div id="${titleId}">${starMarkup(item.rating)}</div>
        <span class="badge-neutral">${item.date}</span>
      </header>
      <p>${item.text}</p>
      <cite>${item.name} · ${item.suburb}</cite>
    `;
    frag.appendChild(card);
  });

  container.appendChild(frag);
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

function initQuoteSummary() {
  const form = $('#quoteForm');
  const output = $('#quoteSummary');
  if (!form || !output) return;

  const update = () => {
    const est = calculateEstimate(form);
    const bits = [`${money.format(est.total)} estimated`, `• ${est.service}`];
    if (est.rooms > 0) bits.push(`• ${est.rooms} rooms`);
    if (est.extras.length) bits.push(`• extras: ${est.extras.join(', ')}`);
    output.textContent = est.rooms > 0 || est.extras.length ? bits.join(' ') : 'Enter room details to view your estimate.';
  };

  const debounced = debounce(update, 120);

  form.addEventListener('input', debounced);
  // Initial render
  update();
}

// -----------------------------
// Forms (enhanced submit + success message)
// -----------------------------
function initForms() {
  // Helper: turn FormData into x-www-form-urlencoded string
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
        const data = new FormData(form);

        // IMPORTANT for Netlify: ensure form-name is present
        if (!data.get('form-name') && form.name) {
          data.set('form-name', form.name);
        }

        // Netlify AJAX submit pattern: POST to "/"
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode(data)
        });

        if (!res.ok) {
          throw new Error('Netlify form submit failed: ' + res.status);
        }

        // Show success message
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

        if (form.id === 'quoteForm') {
          initQuoteSummary();
        }
      } catch (err) {
        alert(
          'Sorry, something went wrong submitting your form. Please try again or call us.'
        );
        // console.error(err);
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
  initCurrentYear();
  initBeforeAfter();
  renderTestimonials();
  renderFaq();
  renderReviewsPage();
  initForms();
  initQuoteSummary();
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
