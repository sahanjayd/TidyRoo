# TidyRoo — Carpet & Upholstery Cleaning Website

Professional cleaning business website for Melbourne, built with Node.js (Express) for the frontend/server and Python (FastAPI) for all backend API logic.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend server | Node.js + Express |
| Backend API | Python + FastAPI |
| Database | SQLite (default) · PostgreSQL (via `DATABASE_URL`) |
| Email | SMTP (Gmail app passwords work out of the box) |
| Dev tooling | nodemon, concurrently |

---

## Project structure

```
tidyroo/
├── public/               # Static site served by Express
│   ├── images/           # All images (logo, service photos, etc.)
│   ├── index.html
│   ├── services.html
│   ├── pricing.html
│   ├── booking.html
│   ├── reviews.html
│   ├── about.html
│   ├── contact.html
│   ├── legal.html
│   ├── blog.html
│   └── blog-*.html
├── styles/
│   └── main.css          # All styles — design tokens, components, responsive
├── src/
│   └── scripts/
│       ├── main.js       # Navigation, forms, reviews, scroll-reveal
│       ├── booking.js    # Quote form service/room toggles
│       └── slide.js      # Hero slideshow
├── backend/
│   ├── main.py           # FastAPI app — all API endpoints
│   └── requirements.txt  # Python dependencies
├── server.js             # Express server — static serving + API proxy
├── package.json
├── .env.example          # Copy to .env and fill in your values
└── README.md
```

---

## Local setup

### Prerequisites

- Node.js 18+
- Python 3.10+
- pip

### 1. Clone and install Node dependencies

```bash
git clone <repo-url>
cd tidyroo
npm install
```

### 2. Install Python dependencies

```bash
cd backend
pip install -r requirements.txt
cd ..
```

### 3. Configure environment variables

```bash
# Root .env — Node.js server (PORT, BACKEND_URL)
cp .env.example .env

# backend/.env — Python FastAPI (SMTP, database, tokens)
cp backend/.env.example backend/.env
```

Open both files and fill in at minimum:

```
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-char-app-password
CONTACT_RECIPIENT=info@tidyroo.au
REVIEW_ADMIN_TOKEN=any-long-random-string
```

See [Environment variables](#environment-variables) below for the full list.

### 4. Run everything

**Option A — run both servers together (recommended for dev):**

```bash
npm run dev:all
```

**Option B — run separately:**

```bash
# Terminal 1 — Node.js frontend
npm run dev

# Terminal 2 — Python backend
npm run backend
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

Copy `.env.example` to `.env`. All variables are optional unless marked required.

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Express listen port |
| `BACKEND_URL` | `http://localhost:8000` | FastAPI URL (used by proxy) |
| `SMTP_HOST` | `smtp.gmail.com` | SMTP server hostname |
| `SMTP_PORT` | `587` | SMTP port (587 = STARTTLS) |
| `SMTP_USER` | — | Email account for sending |
| `SMTP_PASS` | — | App password (not your login password) |
| `CONTACT_RECIPIENT` | — | Where form emails are delivered |
| `DATABASE_URL` | — | Optional PostgreSQL URL; uses SQLite if not set |
| `REVIEW_ADMIN_TOKEN` | — | **Required for admin** — protects review moderation endpoints |
| `ALLOWED_ORIGINS` | `http://localhost:3000` | CORS allowed origins (comma-separated) |

**Gmail app password:** Google Account → Security → 2-Step Verification → App passwords.

---

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/contact` | General enquiry form |
| `POST` | `/api/booking` | Quote / booking request |
| `POST` | `/api/newsletter` | Newsletter sign-up |
| `GET` | `/api/reviews` | Fetch approved reviews |
| `POST` | `/api/reviews` | Submit a new review (pending approval) |
| `GET` | `/api/reviews/admin` | List all reviews (requires Bearer token) |
| `POST` | `/api/reviews/admin` | Approve or reject a review (requires Bearer token) |
| `GET` | `/api/health` | Health check |

The Node server proxies all `/api/*` requests to FastAPI. Forms use `data-api-form="/api/endpoint"` and are submitted as JSON by `src/scripts/main.js`.

---

## Image placement

All images are served from `/public/images/`. Current images:

| File | Used on |
|------|---------|
| `logo.jpg` | Header, footer (brand icon) |
| `steam.jpg` | Hero slideshow, about page |
| `steam1.jpg` | Hero slideshow |
| `steam2.jpg` | Hero slideshow |
| `service.jpg` | Hero slideshow |
| `service1.jpg` — `service5.jpg` | Services section placeholders |
| `about.jpg` | About page |
| `booking.jpg` | Booking page header |
| `online.jpg` | Online booking section |
| `invoice.jpg` | Pricing section |

To add new images, drop them in `/public/images/` and reference them as `/images/filename.jpg`.

---

## Deployment

### Node.js (frontend + proxy)

Deploy to any Node.js host (Railway, Render, Fly.io, VPS):

```bash
npm start
```

Set `PORT` and `BACKEND_URL` environment variables on the host.

### Python backend

Deploy to a Python host (Railway, Render, Fly.io):

```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

Set all `SMTP_*`, `DATABASE_URL`, `REVIEW_ADMIN_TOKEN`, and `ALLOWED_ORIGINS` variables.

### Database

- **SQLite** (default): a `tidyroo.db` file is created automatically in the `backend/` directory. Good for low-volume use.
- **PostgreSQL**: set `DATABASE_URL=postgresql://user:pass@host/db` — the schema is created automatically on startup.

---

## Review moderation

Submitted reviews go into a `pending` state. To approve or reject them, call the admin endpoint with your `REVIEW_ADMIN_TOKEN`:

```bash
# List pending reviews
curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:8000/api/reviews/admin

# Approve review id=5
curl -X POST -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"review_id": 5, "action": "approve"}' \
  http://localhost:8000/api/reviews/admin
```
