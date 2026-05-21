const checkIcon = (
  <svg className="check" viewBox="0 0 24 24" fill="none" stroke="#7A8C4E" strokeWidth="2.5" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12l3 3 5-6" />
  </svg>
)

const offerItems = [
  'Photos professionnelles du logement',
  'Création et optimisation des annonces',
  'Tarification dynamique des nuitées',
  'Gestion complète des réservations',
  'Réponses aux voyageurs 7j/7',
  'Arrivées et départs automatisés',
  <>Ménage pro <em style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>(payé par les voyageurs)</em></>,
  <>Linge de maison <em style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>(payé par les voyageurs)</em></>,
  'Services complémentaires',
  'Démarches administratives et légales',
]

export default function Offer() {
  return (
    <section className="offer section-pad" id="offre">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <span className="star-deco" style={{ top: '12%', right: '6%', fontSize: '24px' }}>✦</span>

      <div className="wrap">
        <div className="center-head reveal">
          <div className="eyebrow center">Notre offre</div>
          <h2 className="section-title">Une formule <em>simple et transparente</em></h2>
          <p className="section-lead">
            Une seule commission, tout inclus. Pas de frais d&apos;entrée, pas de surprise : nos intérêts sont alignés avec les vôtres.
          </p>
        </div>

        <div className="offer-layout">
          <div className="offer-text reveal">
            <h3>Notre rémunération dépend <em>de votre réussite</em></h3>
            <p style={{ fontSize: '15px', color: 'var(--ink-soft)', fontWeight: 300 }}>
              Nous nous rémunérons uniquement sur le chiffre d&apos;affaires réellement généré par votre bien.
              Plus vous gagnez, mieux nous nous portons : c&apos;est notre garantie d&apos;un engagement total.
            </p>
            <ul className="offer-points">
              {[
                { title: 'Transparence totale', desc: 'Un reporting clair et régulier sur les performances de votre logement.' },
                { title: 'Aucun frais caché', desc: 'Vous ne payez que sur ce que vous gagnez. Jamais d\'avance, jamais de surprise.' },
                { title: 'Simplicité absolue', desc: 'Un seul interlocuteur, un seul contrat, une gestion entièrement déléguée.' },
              ].map((pt, i) => (
                <li key={i}>
                  <span className="pt-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="2.5" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="pt-content">
                    <strong>{pt.title}</strong>
                    <span>{pt.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="offer-card reveal">
            <div className="offer-card-ribbon">Tout inclus</div>
            <div className="label">Gestion complète</div>
            <div className="price">20<span>% TTC</span></div>
            <div className="price-sub">du chiffre d&apos;affaires généré par votre bien</div>
            <div className="divider" />
            <ul className="offer-list">
              {offerItems.map((item, i) => (
                <li key={i}>{checkIcon} {item}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">
              <span>Confier mon bien</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
