import Image from 'next/image'

export default function Hero() {
  return (
    <header className="hero" id="accueil">
      <div className="hero-bg">
        <Image
          src="/images/fond-mer.jpg"
          alt="Vue sur mer en Provence-Alpes-Côte d'Azur"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <svg
        className="hero-deco-leaf"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M100 20 Q140 60 130 110 Q120 160 100 180 Q80 160 70 110 Q60 60 100 20Z" fill="#C49A58" />
        <path d="M100 20 L100 180" stroke="#8C5E28" strokeWidth="1.5" />
        <path
          d="M100 50 Q115 60 122 75 M100 70 Q88 80 78 95 M100 90 Q117 100 125 118 M100 110 Q83 120 75 138 M100 130 Q116 140 122 158"
          stroke="#8C5E28"
          strokeWidth="1"
          opacity="0.7"
        />
      </svg>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="eyebrow reveal">Conciergerie premium · Provence-Alpes-Côte d&apos;Azur</div>
          <h1 className="reveal">
            Vos locations saisonnières en PACA,{' '}
            <em>gérées de A à Z.</em>
          </h1>
          <p className="hero-slogan reveal">Votre bien entre de bonnes mains.</p>
          <div className="hero-actions reveal">
            <a href="#contact" className="btn btn-gold">
              <span>Contactez-nous</span>
              <span className="arrow">→</span>
            </a>
            <a
              href="#services"
              className="btn btn-ghost"
              style={{ color: 'var(--cream)', borderColor: 'var(--cream)' }}
            >
              <span>Découvrir notre offre</span>
            </a>
          </div>
          <div className="hero-trust reveal">
            <div className="hero-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C49A58" strokeWidth="2" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Un seul interlocuteur
            </div>
            <div className="hero-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C49A58" strokeWidth="2" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              100% prise en charge
            </div>
            <div className="hero-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C49A58" strokeWidth="2" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Zéro frais caché
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="mouse" />
        <span>Défiler</span>
      </div>
    </header>
  )
}
