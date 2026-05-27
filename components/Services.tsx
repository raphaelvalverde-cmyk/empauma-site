const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    title: 'Photographies professionnelles',
    desc: 'Des clichés lumineux et soignés qui valorisent chaque espace de votre logement et attirent l\'œil des voyageurs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Configuration des annonces',
    desc: 'Création et optimisation de vos annonces sur Airbnb, Booking et Abritel pour une visibilité maximale.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M17 7h4v4" />
      </svg>
    ),
    title: 'Tarification dynamique',
    desc: 'Des prix ajustés en temps réel selon la saison et la demande locale pour maximiser vos revenus toute l\'année.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    title: 'Gestion des réservations',
    desc: 'Suivi complet des calendriers, confirmations et coordination de chaque séjour, sans aucune intervention de votre part.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Communication voyageurs',
    desc: 'Messages personnalisés et réponses 7j/7 à chaque étape, pour des voyageurs rassurés et des avis élogieux.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Arrivées & départs automatisés',
    desc: 'Boîte à clés, interphone ou serrure connectée. Accueil physique personnalisé disponible sur demande.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
        <path d="M3 21v-4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4" />
        <path d="M3 7l9-4 9 4M12 3v10" />
      </svg>
    ),
    title: 'Ménage, blanchisserie & entretien',
    desc: 'Une équipe professionnelle assure un logement impeccable et du linge frais entre chaque séjour.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
        <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
        <path d="M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
    title: 'Services complémentaires',
    desc: 'Paniers gourmands, fleurs, transferts, décoration : des attentions sur mesure pour des séjours d\'exception.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Démarches administratives',
    desc: 'Prise en charge des démarches légales nécessaires à la location de votre bien : déclaration en mairie, numéro d\'enregistrement et conformité réglementaire.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M7 8h10M7 12h6M7 16h8" />
        <path d="M16 16l2 2 3-3" />
      </svg>
    ),
    title: 'Reporting & Facturation',
    desc: 'Chaque mois, vous recevez une facture détaillée et transparente ainsi qu\'un rapport complet des performances de votre logement : taux d\'occupation, revenus générés et retour voyageurs.',
  },
]

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="pattern-dots pattern-1" />
      <span className="star-deco" style={{ top: '14%', left: '6%', fontSize: '26px' }}>✦</span>
      <span className="star-deco" style={{ bottom: '18%', right: '8%', fontSize: '22px', animationDelay: '-2s' }}>✦</span>

      <div className="wrap">
        <div className="center-head reveal">
          <div className="eyebrow center">Nos services</div>
          <h2 className="section-title">Une gestion <em>clés en main</em></h2>
          <p className="section-lead">
            De la mise en ligne de votre annonce au départ de chaque voyageur, nous orchestrons chaque détail
            pour vous offrir une tranquillité totale.
          </p>
        </div>

        <div className="services-grid reveal-stagger">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
