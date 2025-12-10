// pages/api/bookings.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Booking = {
  arrival: string
  departure: string
  guests: string
  room: string
  name: string
  email: string
  phone: string
  notes?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method)
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const booking: Booking = req.body
    console.log('Received booking:', booking)

    if (!booking.arrival || !booking.departure || !booking.name || !booking.email || !booking.phone) {
      console.log('Missing required fields')
      return res.status(400).json({ message: 'Missing required fields' })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    })

    const textMessage = `
حجز جديد:
الاسم: ${booking.name}
الهاتف: ${booking.phone}
الإيميل: ${booking.email}
الوصول: ${booking.arrival}
المغادرة: ${booking.departure}
الغرفة: ${booking.room}
الأشخاص: ${booking.guests}
ملاحظة: ${booking.notes || '—'}
    `

    console.log('Sending email to admin...')
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'حجز جديد من الموقع',
      text: textMessage
    })
    console.log('Email sent to admin')

    console.log('Sending email to customer...')
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: booking.email,
      subject: 'Confirmation de réservation',
      text: `توصلنا بطلب الحجز ديالك ✅\nغادي يوصلك الرد فـ أقل من 12 ساعة.\n\n${textMessage}`
    })
    console.log('Email sent to customer')

    return res.status(200).json({
      success: true,
      message: '✅ توصلنا بطلب الحجز، غادي يوصلك الرد فـ أقل من 12 ساعة'
    })

  } catch (err) {
    console.error('Error sending booking:', err)
    return res.status(500).json({ message: 'خطأ أثناء إرسال الحجز' })
  }
}
