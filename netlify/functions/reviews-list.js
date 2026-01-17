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

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (event.httpMethod !== 'GET') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  if (!process.env.DATABASE_URL) {
    return jsonResponse(500, { error: 'Database not configured' });
  }

  const rawLimit = parseInt(event.queryStringParameters?.limit || '', 10);
  const limit = Number.isFinite(rawLimit) && rawLimit > 0 ? Math.min(rawLimit, 50) : 50;

  try {
    const result = await pool.query(
      'SELECT id, name, suburb, text, rating, created_at FROM reviews WHERE approved = true ORDER BY created_at DESC LIMIT $1',
      [limit]
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
    return jsonResponse(500, { error: 'Failed to load reviews' });
  }
};
