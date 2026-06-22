import { NextResponse } from 'next/server'
import { sendEmail } from '../../../lib/email'

export async function POST(request) {
  try {
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }
    await sendEmail(
      'TidyRoo newsletter signup',
      `<h2>New newsletter signup — TidyRoo</h2>
      <p><strong>Email:</strong> ${email}</p>
      <hr><p style="color:#888">Add to your mailing list</p>`
    )
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[/api/newsletter]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
