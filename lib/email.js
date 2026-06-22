import nodemailer from 'nodemailer'

const SMTP_HOST      = process.env.SMTP_HOST      || 'smtp.gmail.com'
const SMTP_PORT      = parseInt(process.env.SMTP_PORT || '587', 10)
const SMTP_USER      = process.env.SMTP_USER      || ''
const SMTP_PASS      = process.env.SMTP_PASS      || ''
const CONTACT_EMAIL  = process.env.CONTACT_RECIPIENT || 'info@tidyroo.au'

export async function sendEmail(subject, html, to = CONTACT_EMAIL) {
  if (!SMTP_USER || !SMTP_PASS) {
    console.log(`[email skipped — SMTP not configured] ${subject}`)
    return
  }
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
  await transporter.sendMail({ from: SMTP_USER, to, subject, html })
}
