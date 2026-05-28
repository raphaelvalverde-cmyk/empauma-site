import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Empauma Conciergerie',
  description: 'Politique de confidentialité et protection des données personnelles d\'Empauma Conciergerie.',
  robots: 'noindex',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="legal-header">
          <div className="wrap">
            <div className="eyebrow center">RGPD &amp; Données personnelles</div>
            <h1>Politique de <em>confidentialité</em></h1>
          </div>
        </div>

        <div className="legal-content">
          <div className="wrap">
            <div className="legal-body">

              <p className="legal-intro">
                Empauma Conciergerie (Auto-entreprise) s&apos;engage à protéger vos données personnelles et à respecter votre vie privée. La présente politique explique comment nous collectons, utilisons, stockons et protégeons vos données, ainsi que vos droits en la matière, conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>

              <section className="legal-section">
                <h2>1. Données collectées et base légale</h2>
                <p>Nous collectons uniquement les données strictement nécessaires pour vous fournir nos services.</p>
                <ul className="legal-list">
                  <li><span>Données collectées :</span> prénom, nom, numéro de téléphone, adresse email.</li>
                  <li><span>Moment de collecte :</span> lors du remplissage d&apos;un formulaire sur le site ou lors d&apos;une interaction avec nos services.</li>
                  <li><span>Base légale :</span> votre consentement (article 6.1.a du RGPD), ou notre intérêt légitime à gérer la relation client (article 6.1.f du RGPD).</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>2. Finalités du traitement</h2>
                <p>Les données collectées sont utilisées exclusivement pour :</p>
                <ul className="legal-bullets">
                  <li>vous contacter et répondre à vos demandes,</li>
                  <li>gérer la relation commerciale et administrative,</li>
                  <li>respecter les obligations légales et réglementaires.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>3. Partage et transfert des données</h2>
                <p>Les données personnelles ne sont pas partagées avec des tiers, sauf dans les cas suivants :</p>
                <ul className="legal-bullets">
                  <li>lorsque cela est nécessaire à la gestion des services (ex. : prestataires techniques),</li>
                  <li>en cas d&apos;obligation légale ou de demande administrative ou judiciaire,</li>
                  <li>en cas de restructuration, fusion ou cession de l&apos;entreprise, sous réserve que les tiers respectent les mêmes obligations de confidentialité.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>4. Stockage et sécurité des données</h2>
                <ul className="legal-list">
                  <li><span>Lieu de stockage :</span> les données sont hébergées sur des serveurs situés en France, sur des serveurs sécurisés.</li>
                  <li><span>Mesures de sécurité :</span> chiffrement des données, pare-feu, accès limité aux personnes habilitées, surveillance régulière des systèmes.</li>
                  <li><span>Durée de conservation :</span> les données sont conservées pendant un an à compter du dernier contact ou traitement, sauf obligation légale imposant une durée plus longue.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>5. Vos droits</h2>
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="legal-bullets">
                  <li>droit d&apos;accès à vos données,</li>
                  <li>droit de rectification ou de mise à jour,</li>
                  <li>droit à l&apos;effacement,</li>
                  <li>droit à la limitation du traitement,</li>
                  <li>droit d&apos;opposition pour motifs légitimes,</li>
                  <li>droit à la portabilité des données,</li>
                  <li>droit de retirer votre consentement à tout moment.</li>
                </ul>
                <p>
                  Pour exercer ces droits, vous pouvez contacter :{' '}
                  <a href="mailto:contact@empauma-conciergerie.fr">contact@empauma-conciergerie.fr</a>
                </p>
                <p>Une réponse vous sera apportée dans un délai maximal d&apos;un mois.</p>
                <p>
                  Vous pouvez également déposer une plainte auprès de la CNIL si vous estimez que vos droits ne sont pas respectés.
                </p>
              </section>

              <section className="legal-section">
                <h2>6. Cookies et outils de suivi</h2>
                <ul className="legal-list">
                  <li><span>Gestion des cookies :</span> lors de votre première visite, un bandeau d&apos;information vous permet d&apos;accepter, refuser ou paramétrer les cookies.</li>
                  <li><span>Politique cookies :</span> une politique spécifique est accessible via un lien présent sur le site.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>7. Sécurité et confidentialité</h2>
                <p>
                  Toutes les mesures techniques et organisationnelles appropriées sont mises en œuvre afin de garantir la sécurité des données personnelles.
                </p>
                <p>
                  Cependant, aucun système de transmission ou de stockage électronique n&apos;étant totalement sécurisé, une sécurité absolue ne peut être garantie.
                </p>
                <p>
                  En cas de violation de données susceptible d&apos;affecter vos droits et libertés, vous serez informé dans les meilleurs délais conformément au RGPD.
                </p>
              </section>

              <section className="legal-section">
                <h2>8. Vos choix et gestion des préférences</h2>
                <p>Vous pouvez à tout moment :</p>
                <ul className="legal-bullets">
                  <li>demander la modification ou la suppression de vos données,</li>
                  <li>désactiver les cookies via les paramètres de votre navigateur,</li>
                  <li>vous désinscrire des communications marketing via le lien de désabonnement présent dans les emails.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>9. Transfert international des données</h2>
                <p>
                  Les données ne sont pas transférées en dehors de l&apos;Union Européenne, sauf nécessité liée à la gestion des services. Dans ce cas, des garanties appropriées sont mises en place afin d&apos;assurer un niveau de protection conforme au RGPD.
                </p>
              </section>

              <section className="legal-section">
                <h2>10. Mise à jour de la politique</h2>
                <p>
                  Cette politique de confidentialité peut être modifiée à tout moment afin de refléter l&apos;évolution des pratiques ou de la réglementation. Toute mise à jour sera publiée sur cette page.
                </p>
                <p className="legal-date">Date de dernière mise à jour : 28 mai 2026.</p>
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
