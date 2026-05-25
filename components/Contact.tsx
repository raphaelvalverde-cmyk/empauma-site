'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value,
      type:    (form.elements.namedItem('type')     as HTMLSelectElement).value,
      dispo:   (form.elements.namedItem('dispo')    as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error()
      router.push('/merci')
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.')
      setLoading(false)
    }
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <span className="star-deco star-1">✦</span>
      <span className="star-deco star-2">✦</span>

      <div className="wrap">
        <div className="center-head reveal">
          <div className="eyebrow center">Contact</div>
          <h2 className="section-title">Discutons de <em>votre projet</em></h2>
          <p className="section-lead">
            Un premier échange sans engagement pour évaluer le potentiel de votre bien et répondre à toutes vos questions.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-block reveal">
            <h3>Contactez-<em>nous</em></h3>
            <p>Joignez-nous directement, nous vous répondrons dans les plus brefs délais.</p>

            <div className="contact-method">
              <div className="contact-method-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </div>
              <div>
                <div className="label">Email</div>
                <a href="mailto:contact@empauma-conciergerie.fr" className="value">
                  contact@empauma-conciergerie.fr
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-method-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="label">Téléphone</div>
                <a href="tel:0666738507" className="value">06 66 73 85 07</a>
              </div>
            </div>

            <div className="contact-decor">
              <p>&ldquo;Votre bien entre de bonnes mains.&rdquo;</p>
              <div className="sign">— Empauma Conciergerie</div>
            </div>
          </div>

          <div className="contact-form reveal">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom et prénom</label>
                  <input type="text" id="name" name="name" placeholder="Camille Béringer" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Adresse e-mail</label>
                  <input type="email" id="email" name="email" placeholder="vous@email.fr" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Numéro de téléphone</label>
                  <input type="tel" id="phone" name="phone" placeholder="06 00 00 00 00" required />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Type de bien</label>
                  <select id="type" name="type" required defaultValue="">
                    <option value="" disabled>Sélectionnez…</option>
                    <option>T1</option>
                    <option>T2</option>
                    <option>T3</option>
                    <option>T4 et plus</option>
                    <option>Villa</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="dispo">Disponibilité</label>
                <select id="dispo" name="dispo" required defaultValue="">
                  <option value="" disabled>Sélectionnez…</option>
                  <option>Immédiatement</option>
                  <option>Dans moins d&apos;un mois</option>
                  <option>Dans plus d&apos;un mois</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Votre message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Parlez-nous de votre bien et de vos attentes…"
                />
              </div>

              {error && (
                <p style={{ color: '#B5703F', fontSize: '14px', marginBottom: '12px' }}>
                  {error}
                </p>
              )}

              <button type="submit" className="btn btn-primary" disabled={loading}>
                <span>{loading ? 'Envoi en cours…' : 'Envoyer ma demande'}</span>
                {!loading && <span className="arrow">→</span>}
              </button>
              <p className="form-note">Réponse garantie sous 24h ouvrées. Vos données restent confidentielles.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
