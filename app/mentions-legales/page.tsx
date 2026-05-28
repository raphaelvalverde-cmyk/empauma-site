import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mentions légales — Empauma Conciergerie',
  description: 'Mentions légales d\'Empauma Conciergerie.',
  robots: 'noindex',
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="legal-header">
          <div className="wrap">
            <div className="eyebrow center">Informations légales</div>
            <h1>Mentions <em>légales</em></h1>
          </div>
        </div>

        <div className="legal-content">
          <div className="wrap">
            <div className="legal-body">

              <section className="legal-section">
                <h2>Identification de l&apos;entreprise</h2>
                <ul className="legal-list">
                  <li><span>Nom de l&apos;entreprise :</span> Empauma Conciergerie</li>
                  <li><span>Forme juridique :</span> Auto-entreprise</li>
                  <li><span>Numéro de SIRET :</span> 932 544 083 00011</li>
                  <li><span>Adresse du siège social :</span> 7 Hameau de la Bouisse</li>
                  <li><span>Adresse email de contact :</span> <a href="mailto:contact@empauma-conciergerie.fr">contact@empauma-conciergerie.fr</a></li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>Hébergement du site</h2>
                <ul className="legal-list">
                  <li><span>Nom de l&apos;hébergeur :</span> Vercel</li>
                  <li><span>Adresse postale :</span> 340 S Lemon Ave #4133, Walnut, CA 91789 – États-Unis</li>
                  <li><span>Contact :</span> <a href="mailto:privacy@vercel.com">privacy@vercel.com</a></li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>Directeur de la publication</h2>
                <ul className="legal-list">
                  <li><span>Nom et fonction :</span> VALVERDE Raphaël, Fondateur</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>Propriété intellectuelle</h2>
                <p>
                  Tous les contenus présents sur le site Empauma Conciergerie (textes, images, logos, vidéos, graphismes, etc.) sont protégés par des droits d&apos;auteur.
                </p>
                <p>
                  Toute reproduction, représentation, modification ou exploitation, totale ou partielle, des contenus du site sans autorisation écrite préalable de Empauma Conciergerie est strictement interdite.
                </p>
              </section>

              <section className="legal-section">
                <h2>Responsabilité</h2>
                <p>
                  Empauma Conciergerie s&apos;efforce de fournir des informations fiables et à jour sur le site. Cependant, nous déclinons toute responsabilité en cas d&apos;erreurs, omissions ou indisponibilité temporaire du site.
                </p>
                <p>
                  En cas d&apos;interruption ou de dysfonctionnement, Empauma Conciergerie ne peut être tenu responsable des conséquences qui en découlent.
                </p>
              </section>

              <section className="legal-section">
                <h2>Traitement des données personnelles</h2>
                <p>
                  Pour toute information concernant le traitement des données personnelles, merci de consulter notre{' '}
                  <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>.
                </p>
              </section>

              <section className="legal-section">
                <h2>Litiges</h2>
                <p>
                  En cas de litige, nous privilégions une résolution à l&apos;amiable dans un délai de 30 jours. À défaut, les tribunaux compétents seront ceux de Toulon.
                </p>
              </section>

              <section className="legal-section">
                <h2>Modifications des mentions légales</h2>
                <p>
                  Les présentes mentions légales peuvent être modifiées à tout moment sans préavis. Il est conseillé aux utilisateurs de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
                </p>
              </section>

              <section className="legal-section">
                <h2>Utilisation internationale</h2>
                <p>
                  Le site Empauma Conciergerie est soumis à la législation française. Toute utilisation en dehors de la France doit respecter les lois locales, mais en cas de litige, seule la loi française s&apos;applique.
                </p>
              </section>

              <div className="legal-back">
                <Link href="/" className="btn btn-ghost">
                  <span>← Retour à l&apos;accueil</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
