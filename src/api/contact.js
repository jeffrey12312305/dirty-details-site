import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      firstName,
      lastName,
      email,
      subject,
      vehicleType,
      message,
      photos = []
    } = req.body

    const fullName = `${firstName || ''} ${lastName || ''}`.trim()

    const html = `
      <h2>New Dirty Details Contact Request</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Vehicle Type:</strong> ${vehicleType}</p>
      <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `

    const attachments = photos.map((photo) => ({
      filename: photo.name,
      content: photo.content
    }))

    const { data, error } = await resend.emails.send({
      from: 'Dirty Details <noreply@dirtydetailsstl.com>',
      to: ['Jeff@dirtydetailsstl.com'],
      replyTo: email,
      subject: subject || 'New Dirty Details Contact Request',
      html,
      attachments
    })

    if (error) {
      return res.status(400).json({ error })
    }

    return res.status(200).json({ success: true, data })
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' })
  }
}