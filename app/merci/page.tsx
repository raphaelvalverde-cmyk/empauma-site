import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Merci — Empauma Conciergerie',
  description: 'Votre message a bien été envoyé. Nous vous répondrons dans les 24h ouvrées.',
  robots: 'noindex',
}

export default function MerciPage() {
  return (
    <div className="merci-page">
      <div className="merci-card">
        <div className="merci-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#7A8C4E" strokeWidth="1.8" width="56" height="56">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="eyebrow center">Message envoyé</div>

        <h1>
          Merci pour<br />
          <em>votre confiance</em>
        </h1>

        <p className="merci-lead">
          Nous avons bien reçu votre demande et nous vous répondrons
          dans les <strong>24h ouvrées</strong>.
        </p>

        <p className="merci-sub">
          Un accusé de réception vient d&apos;être envoyé à votre adresse e-mail.
        </p>

        <Link href="/" className="btn btn-gold">
          <span>Retour à l&apos;accueil</span>
          <span className="arrow">→</span>
        </Link>

        <div className="merci-signature">
          <p>&ldquo;Votre bien entre de bonnes mains.&rdquo;</p>
          <span>— L&apos;équipe Empauma</span>
        </div>
      </div>
    </div>
  )
}
