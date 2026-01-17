const { Pool } = require('pg');
const crypto = require('crypto');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSL === 'disable' ? false : { rejectUnauthorized: false }
});

function jsonResponse(statusCode, payload) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  if (!process.env.DATABASE_URL) {
    return jsonResponse(500, { error: 'Database not configured' });
  }

  let payload = {};
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (err) {
    return jsonResponse(400, { error: 'Invalid JSON' });
  }

  const name = String(payload.name || '').trim();
  const suburb = String(payload.suburb || '').trim();
  const text = String(payload.text || payload.review || '').trim();
  const ratingRaw = parseInt(payload.rating, 10);
  const rating = Number.isFinite(ratingRaw)
    ? Math.min(5, Math.max(1, ratingRaw))
    : 0;

  if (!name || !text || !rating) {
    return jsonResponse(400, { error: 'Missing required fields' });
  }

  if (text.length < 10) {
    return jsonResponse(400, { error: 'Review text is too short' });
  }

  if (name.length > 80 || suburb.length > 80 || text.length > 1000) {
    return jsonResponse(400, { error: 'Review text is too long' });
  }

  const id = crypto.randomUUID();

  try {
    await pool.query(
      'INSERT INTO reviews (id, name, suburb, text, rating, created_at, approved) VALUES ($1, $2, $3, $4, $5, now(), false)',
      [id, name, suburb || null, text, rating]
    );
  } catch (err) {
    return jsonResponse(500, { error: 'Failed to save review' });
  }

  return jsonResponse(201, { ok: true, id });
};
