import { NextResponse } from 'next/server'
import { sendEmail } from '../../../lib/email'

export async function POST(request) {
  try {
    const { name, phone, email, address, services_summary, extras, date, time, notes } = await request.json()
    if (!name || !phone || !email || !address) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    await sendEmail(
      `TidyRoo booking request — ${name}`,
      `<h2>New booking request — TidyRoo</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Services:</strong> ${services_summary || '—'}</p>
      <p><strong>Extras:</strong> ${extras || '—'}</p>
      <p><strong>Date:</strong> ${date || '—'}</p>
      <p><strong>Time window:</strong> ${time || '—'}</p>
      <p><strong>Notes:</strong><br>${notes || '—'}</p>
      <hr><p style="color:#888">Sent via TidyRoo booking form</p>`
    )
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[/api/booking]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
