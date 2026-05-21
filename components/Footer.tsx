export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-star star-1">✦</span>
      <span className="footer-star star-2">✦</span>

      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="name">EMPAUMA</div>
            <div className="sub">Conciergerie</div>
            <div className="slogan">Votre bien entre de bonnes mains</div>
          </div>
          <nav className="footer-nav" aria-label="Navigation pied de page">
            <a href="#accueil">Accueil</a>
            <a href="#services">Nos services</a>
            <a href="#offre">Notre offre</a>
            <a href="#logements">Nos logements</a>
            <a href="#apropos">À propos</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2026 Empauma. Tous droits réservés.</div>
          <div className="footer-legal">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
