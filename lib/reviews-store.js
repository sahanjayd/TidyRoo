import { randomUUID } from 'crypto'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

// ── Netlify Blobs (production) ─────────────────────────────────────────────

async function getBlobStore() {
  if (!process.env.NETLIFY) return null
  try {
    const { getStore } = await import('@netlify/blobs')
    return getStore({ name: 'reviews', consistency: 'strong' })
  } catch {
    return null
  }
}

// ── Local JSON file (development fallback) ─────────────────────────────────

const DEV_DB = join(process.cwd(), '.reviews-dev.json')

function devRead() {
  if (!existsSync(DEV_DB)) return []
  return JSON.parse(readFileSync(DEV_DB, 'utf8'))
}

function devWrite(reviews) {
  writeFileSync(DEV_DB, JSON.stringify(reviews, null, 2))
}

// ── Public API ─────────────────────────────────────────────────────────────

export async function createReview({ name, suburb, review, rating }) {
  const id = randomUUID()
  const record = {
    id,
    name,
    suburb: suburb || null,
    review,
    rating: parseInt(rating, 10),
    created_at: new Date().toISOString(),
    approved: false,
  }
  const store = await getBlobStore()
  if (store) {
    await store.set(`review:${id}`, JSON.stringify(record))
  } else {
    const all = devRead()
    all.push(record)
    devWrite(all)
  }
  return id
}

export async function listApproved(limit = 50) {
  const store = await getBlobStore()
  if (store) {
    const { blobs } = await store.list({ prefix: 'review:' })
    const all = await Promise.all(blobs.map(b => store.get(b.key, { type: 'json' })))
    return all
      .filter(r => r?.approved)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, limit)
  }
  return devRead()
    .filter(r => r.approved)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, limit)
}

export async function listPending() {
  const store = await getBlobStore()
  if (store) {
    const { blobs } = await store.list({ prefix: 'review:' })
    const all = await Promise.all(blobs.map(b => store.get(b.key, { type: 'json' })))
    return all.filter(r => r && !r.approved).sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
  }
  return devRead().filter(r => !r.approved).sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
}

export async function approveReview(id) {
  const store = await getBlobStore()
  const key = `review:${id}`
  if (store) {
    const record = await store.get(key, { type: 'json' })
    if (!record) return false
    record.approved = true
    record.approved_at = new Date().toISOString()
    await store.set(key, JSON.stringify(record))
  } else {
    const all = devRead()
    const i = all.findIndex(r => r.id === id)
    if (i === -1) return false
    all[i].approved = true
    all[i].approved_at = new Date().toISOString()
    devWrite(all)
  }
  return true
}

export async function deleteReview(id) {
  const store = await getBlobStore()
  if (store) {
    await store.delete(`review:${id}`)
  } else {
    devWrite(devRead().filter(r => r.id !== id))
  }
  return true
}
