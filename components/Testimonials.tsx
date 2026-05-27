import Image from 'next/image'

const starSvg = (
  <svg viewBox="0 0 24 24" fill="#C49A58" aria-hidden="true">
    <path d="M12 2l3 6.5 7 .9-5 4.9 1.2 7-6.2-3.4L5.8 21l1.2-7-5-4.9 7-.9z" />
  </svg>
)

const testimonials = [
  {
    text: "J'avais hésité longtemps avant de me lancer dans la location saisonnière. Depuis que j'ai confié ma maison à Empauma, tout se passe sans effort. Elle est actuellement en location et tout se passe très bien. Ce qui m'a rassurée, c'est d'être tenue informée à chaque étape, sans avoir à relancer personne. Je ne regrette absolument pas mon choix.",
    name: 'Sylvie',
    detail: 'Propriétaire à Pierrefeu-du-Var',
    avatar: '/images/profil-sylvie.jpg',
  },
  {
    text: "Un seul interlocuteur, des réponses rapides, et un logement toujours impeccable à chaque retour. Je recommande sans hésiter.",
    name: 'Laurent',
    detail: 'Propriétaire à Hyères',
    avatar: '/images/profil-laurent.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials section-pad" id="avis">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="pattern-dots pattern-1" />
      <span className="star-deco" style={{ bottom: '18%', left: '10%', fontSize: '28px', animationDelay: '-3s' }}>✦</span>
      <span className="star-deco" style={{ top: '12%', right: '7%', fontSize: '20px', animationDelay: '-1.5s' }}>✦</span>
      <span className="star-deco" style={{ top: '40%', left: '4%', fontSize: '16px', animationDelay: '-4s' }}>✿</span>
      <span className="star-deco" style={{ bottom: '8%', right: '14%', fontSize: '22px', animationDelay: '-0.8s' }}>✤</span>

      {/* Lavender sprig deco */}
      <svg className="leaf-deco" style={{ bottom: '6%', right: '4%', width: '60px', animationDelay: '-5s', opacity: 0.13 }} viewBox="0 0 60 100" fill="none" aria-hidden="true">
        <line x1="30" y1="10" x2="30" y2="95" stroke="#9B89B3" strokeWidth="2"/>
        {[20,30,40,50,60,70,80].map((y, i) => (
          <ellipse key={i} cx={i % 2 === 0 ? 22 : 38} cy={y} rx="7" ry="5"
            fill="#9B89B3" transform={`rotate(${i % 2 === 0 ? -25 : 25} ${i % 2 === 0 ? 22 : 38} ${y})`} />
        ))}
      </svg>

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
                <div className="testimonial-avatar">
                  <span className="avatar-initial">{t.name[0]}</span>
                  <Image
                    src={t.avatar}
                    alt={`Photo de ${t.name}`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    sizes="64px"
                  />
                </div>
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
