const { Pool } = require('pg');

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

function isAuthorized(headers) {
  const token = process.env.REVIEW_ADMIN_TOKEN;
  if (!token) return false;
  const auth = headers.authorization || headers.Authorization || '';
  return auth === `Bearer ${token}`;
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!process.env.DATABASE_URL) {
    return jsonResponse(500, { error: 'Database not configured' });
  }

  if (!isAuthorized(event.headers || {})) {
    return jsonResponse(401, { error: 'Unauthorized' });
  }

  if (event.httpMethod === 'GET') {
    try {
      const result = await pool.query(
        'SELECT id, name, suburb, text, rating, created_at FROM reviews WHERE approved = false ORDER BY created_at DESC'
      );

      const reviews = result.rows.map((row) => ({
        id: row.id,
        name: row.name,
        suburb: row.suburb || '',
        text: row.text,
        rating: row.rating,
        createdAt: row.created_at
      }));

      return jsonResponse(200, { reviews });
    } catch (err) {
      return jsonResponse(500, { error: 'Failed to load pending reviews' });
    }
  }

  if (event.httpMethod === 'POST') {
    let payload = {};
    try {
      payload = JSON.parse(event.body || '{}');
    } catch (err) {
      return jsonResponse(400, { error: 'Invalid JSON' });
    }

    const id = String(payload.id || '').trim();
    const action = String(payload.action || '').trim().toLowerCase();

    if (!id || !action) {
      return jsonResponse(400, { error: 'Missing id or action' });
    }

    if (action === 'approve') {
      try {
        const result = await pool.query(
          'UPDATE reviews SET approved = true, approved_at = now() WHERE id = $1 AND approved = false RETURNING id',
          [id]
        );
        if (!result.rowCount) {
          return jsonResponse(404, { error: 'Review not found' });
        }
        return jsonResponse(200, { ok: true, id });
      } catch (err) {
        return jsonResponse(500, { error: 'Failed to approve review' });
      }
    }

    if (action === 'reject') {
      try {
        const result = await pool.query(
          'DELETE FROM reviews WHERE id = $1 AND approved = false RETURNING id',
          [id]
        );
        if (!result.rowCount) {
          return jsonResponse(404, { error: 'Review not found' });
        }
        return jsonResponse(200, { ok: true, id });
      } catch (err) {
        return jsonResponse(500, { error: 'Failed to reject review' });
      }
    }

    return jsonResponse(400, { error: 'Unsupported action' });
  }

  return jsonResponse(405, { error: 'Method not allowed' });
};
