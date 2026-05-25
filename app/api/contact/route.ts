import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

// Adresse "from" : utilise le domaine vérifié si dispo, sinon le domaine Resend par défaut
const FROM_ADDRESS = 'Empauma Conciergerie <onboarding@resend.dev>'
const TO_ADDRESS   = 'contact@empauma-conciergerie.fr'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, type, dispo, message } = body

    if (!name || !email || !phone || !type || !dispo) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    // 1. Notification à Empauma
    const notif = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      replyTo: email,
      subject: `Nouveau contact — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafaf7; border-radius: 12px;">
          <h2 style="color: #3D4F25; margin-bottom: 24px;">Nouvelle demande de contact</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #888; width: 140px;">Nom</td><td style="padding: 10px 0; color: #2E2A1E; font-weight: 500;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #888;">Email</td><td style="padding: 10px 0; color: #2E2A1E;"><a href="mailto:${email}" style="color: #C49A58;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; color: #888;">Téléphone</td><td style="padding: 10px 0; color: #2E2A1E;"><a href="tel:${phone}" style="color: #C49A58;">${phone}</a></td></tr>
            <tr><td style="padding: 10px 0; color: #888;">Type de bien</td><td style="padding: 10px 0; color: #2E2A1E;">${type}</td></tr>
            <tr><td style="padding: 10px 0; color: #888;">Disponibilité</td><td style="padding: 10px 0; color: #2E2A1E;">${dispo}</td></tr>
            ${message ? `<tr><td style="padding: 10px 0; color: #888; vertical-align: top;">Message</td><td style="padding: 10px 0; color: #2E2A1E;">${message.replace(/\n/g, '<br/>')}</td></tr>` : ''}
          </table>
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e8e0d0; color: #aaa; font-size: 12px;">
            Empauma Conciergerie — empauma-conciergerie.fr
          </div>
        </div>
      `,
    })

    if (notif.error) {
      console.error('Resend notification error:', notif.error)
      return NextResponse.json({ error: notif.error.message }, { status: 500 })
    }

    // 2. Accusé de réception au visiteur
    const confirm = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [email],
      subject: 'Nous avons bien reçu votre message — Empauma Conciergerie',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafaf7; border-radius: 12px;">
          <h2 style="color: #3D4F25;">Merci, ${name} !</h2>
          <p style="color: #5C5545; line-height: 1.7;">
            Nous avons bien reçu votre demande et nous vous répondrons dans les <strong>24h ouvrées</strong>.
          </p>
          <p style="color: #5C5545; line-height: 1.7;">
            En attendant, n'hésitez pas à nous appeler directement au <strong>06 66 73 85 07</strong>.
          </p>
          <p style="font-style: italic; color: #7A8C4E; margin-top: 32px;">&ldquo;Votre bien entre de bonnes mains.&rdquo;</p>
          <p style="color: #888; font-size: 13px;">— L'équipe Empauma Conciergerie</p>
        </div>
      `,
    })

    if (confirm.error) {
      // L'email de confirmation a échoué mais la notif est passée — on redirige quand même
      console.warn('Resend confirmation warning:', confirm.error)
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erreur inattendue:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
