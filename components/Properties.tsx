import Image from 'next/image'

const locIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7A8C4E" strokeWidth="2" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const properties = [
  {
    tag: 'Villa',
    name: 'Villa du Réal Martin',
    location: 'Pierrefeu-du-Var',
    img: '/images/maison-pierrefeu.jpg',
  },
  {
    tag: 'Maison',
    name: 'Maison de village',
    location: 'Le Lavandou',
    img: '/images/maison-lavandou.jpg',
  },
]

export default function Properties() {
  return (
    <section className="properties section-pad" id="logements">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="pattern-dots pattern-1" />
      <span className="star-deco" style={{ top: '18%', left: '5%', fontSize: '24px' }}>✦</span>
      <span className="star-deco" style={{ bottom: '22%', right: '6%', fontSize: '20px', animationDelay: '-2.5s' }}>✦</span>
      <span className="star-deco" style={{ top: '60%', left: '3%', fontSize: '15px', animationDelay: '-1s' }}>✿</span>
      <span className="star-deco" style={{ top: '8%', right: '8%', fontSize: '16px', animationDelay: '-4s' }}>❋</span>
      {/* Sun deco (Provençal symbol) */}
      <svg className="leaf-deco" style={{ bottom: '5%', left: '5%', width: '55px', opacity: 0.1, animationDelay: '-3s' }} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="16" fill="#C49A58"/>
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x1 = 50 + 22 * Math.cos(rad)
          const y1 = 50 + 22 * Math.sin(rad)
          const x2 = 50 + 36 * Math.cos(rad)
          const y2 = 50 + 36 * Math.sin(rad)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C49A58" strokeWidth="3" strokeLinecap="round"/>
        })}
      </svg>

      <div className="wrap">
        <div className="center-head reveal">
          <div className="eyebrow center">Nos logements</div>
          <h2 className="section-title">Des biens <em>choyés au quotidien</em></h2>
          <p className="section-lead">Quelques exemples de logements que nous gérons avec soin dans la région.</p>
        </div>

        <div className="properties-grid reveal-stagger">
          {properties.map((prop, i) => (
            <div key={i} className="property-card">
              <div className="property-photo" style={{ position: 'relative' }}>
                <Image
                  src={prop.img}
                  alt={prop.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="property-tag">{prop.tag}</span>
              </div>
              <div className="property-info">
                <h3>{prop.name}</h3>
                <div className="loc">
                  {locIcon}
                  {prop.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
