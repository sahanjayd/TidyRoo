"""
TidyRoo Python Backend — FastAPI
Handles: contact/callback forms, booking requests, newsletter signups, reviews API.
"""

import os
import uuid
import smtplib
import sqlite3
from datetime import datetime, timezone
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from contextlib import contextmanager
from pathlib import Path
from typing import Optional

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

load_dotenv(dotenv_path=Path(__file__).parent / ".env")

# ─── Config ───────────────────────────────────────────────────────────────────

SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASS = os.getenv("SMTP_PASS", "")
CONTACT_RECIPIENT = os.getenv("CONTACT_RECIPIENT", "info@tidyroo.au")
REVIEW_ADMIN_TOKEN = os.getenv("REVIEW_ADMIN_TOKEN", "")
DATABASE_URL = os.getenv("DATABASE_URL", "")  # PostgreSQL DSN (optional)
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

DB_FILE = os.path.join(os.path.dirname(__file__), "tidyroo.db")

# ─── App ──────────────────────────────────────────────────────────────────────

app = FastAPI(title="TidyRoo API", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── SQLite helpers (fallback when PostgreSQL is not configured) ───────────────

def get_db():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS reviews (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            suburb TEXT,
            review_text TEXT NOT NULL,
            rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
            created_at TEXT NOT NULL,
            approved INTEGER NOT NULL DEFAULT 0,
            approved_at TEXT
        )
    """)
    conn.execute("""
        CREATE INDEX IF NOT EXISTS idx_reviews_approved
        ON reviews (approved, created_at DESC)
    """)
    conn.commit()
    conn.close()


init_db()

# ─── Email helper ─────────────────────────────────────────────────────────────

def send_email(subject: str, body_html: str, to: str = CONTACT_RECIPIENT):
    """Send an email via SMTP. Silently skips if credentials are not configured."""
    if not SMTP_USER or not SMTP_PASS:
        print(f"[Email skipped — SMTP not configured] Subject: {subject}")
        return

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = SMTP_USER
    msg["To"] = to
    msg.attach(MIMEText(body_html, "html"))

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, to, msg.as_string())
    except Exception as exc:
        print(f"[Email error] {exc}")

# ─── Pydantic models ──────────────────────────────────────────────────────────

class ContactForm(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    phone: str = Field(..., min_length=6, max_length=30)
    email: Optional[str] = Field(default=None, max_length=254)
    preferred_time: Optional[str] = None
    notes: str = Field(..., min_length=5, max_length=2000)


class BookingForm(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    phone: str = Field(..., min_length=6, max_length=30)
    email: str = Field(..., max_length=254)
    address: str = Field(..., min_length=3, max_length=500)
    services_summary: Optional[str] = None
    extras: Optional[str] = None
    date: Optional[str] = None
    time: Optional[str] = None
    notes: Optional[str] = Field(default=None, max_length=2000)


class NewsletterForm(BaseModel):
    email: str = Field(..., max_length=254)


class ReviewSubmit(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    suburb: Optional[str] = Field(default=None, max_length=100)
    text: str = Field(..., min_length=10, max_length=1000)
    rating: int = Field(..., ge=1, le=5)


class ReviewAction(BaseModel):
    action: str  # "approve" or "reject"
    id: str

# ─── Routes: forms ────────────────────────────────────────────────────────────

@app.post("/api/contact")
async def handle_contact(form: ContactForm):
    body = f"""
    <h2>New callback request — TidyRoo</h2>
    <p><strong>Name:</strong> {form.name}</p>
    <p><strong>Phone:</strong> {form.phone}</p>
    <p><strong>Email:</strong> {form.email or '—'}</p>
    <p><strong>Preferred time:</strong> {form.preferred_time or '—'}</p>
    <p><strong>Notes:</strong><br>{form.notes}</p>
    <hr><p style="color:#888">Sent via TidyRoo contact form</p>
    """
    send_email(f"TidyRoo callback request — {form.name}", body)
    return {"ok": True, "message": "Thanks! We will call you back shortly."}


@app.post("/api/booking")
async def handle_booking(form: BookingForm):
    body = f"""
    <h2>New booking request — TidyRoo</h2>
    <p><strong>Name:</strong> {form.name}</p>
    <p><strong>Phone:</strong> {form.phone}</p>
    <p><strong>Email:</strong> {form.email}</p>
    <p><strong>Address:</strong> {form.address}</p>
    <p><strong>Services:</strong> {form.services_summary or '—'}</p>
    <p><strong>Extras:</strong> {form.extras or '—'}</p>
    <p><strong>Date:</strong> {form.date or '—'}</p>
    <p><strong>Time window:</strong> {form.time or '—'}</p>
    <p><strong>Notes:</strong><br>{form.notes or '—'}</p>
    <hr><p style="color:#888">Sent via TidyRoo booking form</p>
    """
    send_email(f"TidyRoo booking request — {form.name}", body)
    return {"ok": True, "message": "Thanks! A TidyRoo coordinator will confirm shortly."}


@app.post("/api/newsletter")
async def handle_newsletter(form: NewsletterForm):
    body = f"""
    <h2>New newsletter signup — TidyRoo</h2>
    <p><strong>Email:</strong> {form.email}</p>
    <hr><p style="color:#888">Add to your mailing list</p>
    """
    send_email("TidyRoo newsletter signup", body)
    return {"ok": True, "message": "Thanks for joining the TidyRoo crew!"}

# ─── Routes: reviews ──────────────────────────────────────────────────────────

@app.get("/api/reviews")
async def list_reviews(limit: int = 50):
    limit = min(max(1, limit), 50)
    conn = get_db()
    rows = conn.execute(
        "SELECT id, name, suburb, review_text AS text, rating, created_at AS createdAt "
        "FROM reviews WHERE approved = 1 ORDER BY created_at DESC LIMIT ?",
        (limit,)
    ).fetchall()
    conn.close()
    return {"reviews": [dict(r) for r in rows]}


@app.post("/api/reviews")
async def submit_review(payload: ReviewSubmit):
    review_id = str(uuid.uuid4())
    now = datetime.now(timezone.utc).isoformat()
    conn = get_db()
    conn.execute(
        "INSERT INTO reviews (id, name, suburb, review_text, rating, created_at, approved) "
        "VALUES (?, ?, ?, ?, ?, ?, 0)",
        (review_id, payload.name, payload.suburb, payload.text, payload.rating, now)
    )
    conn.commit()
    conn.close()

    body = f"""
    <h2>New review pending approval — TidyRoo</h2>
    <p><strong>Name:</strong> {payload.name}</p>
    <p><strong>Suburb:</strong> {payload.suburb or '—'}</p>
    <p><strong>Rating:</strong> {payload.rating}/5</p>
    <p><strong>Review:</strong><br>{payload.text}</p>
    <p>Approve or reject at <code>/api/reviews/admin</code>.</p>
    """
    send_email("TidyRoo — new review pending approval", body)
    return {"ok": True, "id": review_id}


@app.get("/api/reviews/admin")
async def admin_list_reviews(authorization: Optional[str] = Header(default=None)):
    if not REVIEW_ADMIN_TOKEN or authorization != f"Bearer {REVIEW_ADMIN_TOKEN}":
        raise HTTPException(status_code=401, detail="Unauthorized")
    conn = get_db()
    rows = conn.execute(
        "SELECT id, name, suburb, review_text AS text, rating, created_at AS createdAt "
        "FROM reviews WHERE approved = 0 ORDER BY created_at ASC"
    ).fetchall()
    conn.close()
    return {"pending": [dict(r) for r in rows]}


@app.post("/api/reviews/admin")
async def admin_review_action(
    action: ReviewAction,
    authorization: Optional[str] = Header(default=None)
):
    if not REVIEW_ADMIN_TOKEN or authorization != f"Bearer {REVIEW_ADMIN_TOKEN}":
        raise HTTPException(status_code=401, detail="Unauthorized")

    conn = get_db()
    if action.action == "approve":
        now = datetime.now(timezone.utc).isoformat()
        conn.execute(
            "UPDATE reviews SET approved = 1, approved_at = ? WHERE id = ?",
            (now, action.id)
        )
    elif action.action == "reject":
        conn.execute("DELETE FROM reviews WHERE id = ?", (action.id,))
    else:
        conn.close()
        raise HTTPException(status_code=400, detail="action must be 'approve' or 'reject'")

    conn.commit()
    conn.close()
    return {"ok": True, "id": action.id}


@app.get("/api/health")
async def health():
    return {"status": "ok", "service": "TidyRoo API"}
