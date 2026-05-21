const starSvg = (
  <svg viewBox="0 0 24 24" fill="#C49A58" aria-hidden="true">
    <path d="M12 2l3 6.5 7 .9-5 4.9 1.2 7-6.2-3.4L5.8 21l1.2-7-5-4.9 7-.9z" />
  </svg>
)

const testimonials = [
  {
    text: "J'avais hésité longtemps avant de me lancer dans la location saisonnière. Depuis que j'ai confié ma maison à Empauma, tout se passe sans effort. Elle est actuellement en location et tout se passe très bien. Ce qui m'a rassurée, c'est d'être tenue informée à chaque étape, sans avoir à relancer personne. Je ne regrette absolument pas mon choix.",
    name: 'Ghislaine',
    detail: 'Propriétaire à Pierrefeu-du-Var',
  },
  {
    text: "Un seul interlocuteur, des réponses rapides, et un logement toujours impeccable à chaque retour. Je recommande sans hésiter.",
    name: 'Laurent',
    detail: 'Propriétaire à Hyères',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials section-pad" id="avis">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="pattern-dots pattern-1" />
      <span className="star-deco" style={{ bottom: '18%', left: '10%', fontSize: '28px', animationDelay: '-3s' }}>✦</span>

      <div className="wrap">
        <div className="center-head reveal">
          <div className="eyebrow center">Avis clients</div>
          <h2 className="section-title">La confiance de <em>nos propriétaires</em></h2>
          <p className="section-lead">
            Ils nous ont confié leur bien et profitent aujourd&apos;hui de revenus sereins, sans la moindre contrainte.
          </p>
        </div>

        <div className="testimonials-grid reveal-stagger">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="testimonial-stars" aria-label="5 étoiles">
                {[...Array(5)].map((_, j) => <span key={j}>{starSvg}</span>)}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div>
                  <div className="name">{t.name}</div>
                  <div className="detail">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
