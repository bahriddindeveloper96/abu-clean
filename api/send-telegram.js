import axios from 'axios'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, phone, service, message } = req.body  // <- message qo'shildi

  if (!name || !phone) {
    return res.status(400).json({ message: 'Name and phone are required' })
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return res.status(500).json({ message: 'Telegram bot token or chat ID not set' })
  }

  const telegramMessage = `
📩 Yangi so'rov:
👤 Ism: ${name}
📞 Telefon: ${phone}
🛠 Xizmat: ${service || 'Not specified'}
💬 Xabar: ${message || 'Bo\'sh'}
  `

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML'
      }
    )

    if (response.data.ok) {
      return res.status(200).json({ message: 'Sent successfully' })
    } else {
      return res.status(500).json({ message: response.data.description })
    }
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Telegramga yuborishda xatolik' })
  }
}
