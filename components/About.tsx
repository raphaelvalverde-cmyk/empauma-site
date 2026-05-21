export default function About() {
  return (
    <section className="about section-pad" id="apropos">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <svg className="leaf-deco leaf-1" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <ellipse cx="50" cy="50" rx="15" ry="40" fill="#7A8C4E" transform="rotate(20 50 50)" />
        <ellipse cx="35" cy="40" rx="12" ry="32" fill="#7A8C4E" transform="rotate(-15 35 40)" opacity="0.7" />
      </svg>
      <svg className="leaf-deco leaf-2" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <ellipse cx="50" cy="50" rx="15" ry="40" fill="#C49A58" transform="rotate(-30 50 50)" />
      </svg>

      <div className="wrap">
        <div className="center-head reveal">
          <div className="eyebrow center">À propos</div>
          <h2 className="section-title">L&apos;histoire d&apos;<em>Empauma</em></h2>
          <p className="section-lead">
            Une conciergerie née d&apos;un mot provençal et d&apos;une conviction : votre bien mérite d&apos;être pris en main avec soin.
          </p>
        </div>

        <div className="about-blocks reveal-stagger">
          <div className="about-block">
            <div className="about-block-num">01 — Origine</div>
            <h3>Pourquoi Empauma ?</h3>
            <p>
              Empauma signifie prendre en main, tenir dans la paume avec soin. Ce mot rare, ancré dans la culture du Var,
              résume notre métier. Confier son bien, c&apos;est le déposer entre des mains attentives — et c&apos;est précisément
              la promesse que nous portons chaque jour.
            </p>
          </div>

          <div className="about-block feature">
            <div className="about-block-num">02 — Engagement</div>
            <h3>Notre mission</h3>
            <p>
              Empauma simplifie la gestion de vos locations courte durée pour maximiser vos revenus sans effort. Nous prenons
              en charge chaque étape : check-in/out, annonce optimisée, ménage professionnel, maintenance, et outils digitaux
              pour une gestion optimale. Forts de notre expertise locale et de notre engagement, nous devenons votre partenaire
              de confiance.
            </p>
          </div>

          <div className="about-block">
            <div className="about-block-num">03 — Rencontre</div>
            <h3>Qui suis-je ?</h3>
            <p>
              Je m&apos;appelle Raphaël Valverde, fondateur d&apos;Empauma. J&apos;ai créé cette conciergerie parce que j&apos;ai moi-même
              vécu la difficulté de gérer une location de vacances : les imprévus, la communication avec les voyageurs, la
              logistique permanente. Je sais ce que c&apos;est de jongler avec tout ça seul. Mon objectif est simple : aider les
              propriétaires à valoriser leur bien sans en subir les contraintes, comme j&apos;aurais aimé être aidé à l&apos;époque.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
