import { NextResponse } from 'next/server'
import { sendEmail } from '../../../lib/email'

export async function POST(request) {
  try {
    const { name, phone, email, preferred_time, notes } = await request.json()
    if (!name || !phone || !notes) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    await sendEmail(
      `TidyRoo callback request — ${name}`,
      `<h2>New callback request — TidyRoo</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || '—'}</p>
      <p><strong>Preferred time:</strong> ${preferred_time || '—'}</p>
      <p><strong>Notes:</strong><br>${notes}</p>
      <hr><p style="color:#888">Sent via TidyRoo contact form</p>`
    )
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[/api/contact]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
