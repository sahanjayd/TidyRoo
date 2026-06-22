import { NextResponse } from 'next/server'
import { listPending, approveReview, deleteReview } from '../../../../lib/reviews-store'

function authorized(request) {
  const token = process.env.REVIEW_ADMIN_TOKEN
  return token && request.headers.get('authorization') === `Bearer ${token}`
}

export async function GET(request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const pending = await listPending()
    return NextResponse.json({ pending })
  } catch {
    return NextResponse.json({ pending: [] })
  }
}

export async function POST(request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { action, id } = await request.json()
    if (!action || !id) {
      return NextResponse.json({ error: 'Missing action or id' }, { status: 400 })
    }
    if (action === 'approve') {
      await approveReview(id)
    } else if (action === 'reject') {
      await deleteReview(id)
    } else {
      return NextResponse.json({ error: "action must be 'approve' or 'reject'" }, { status: 400 })
    }
    return NextResponse.json({ ok: true, id })
  } catch (err) {
    console.error('[/api/reviews/admin]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
