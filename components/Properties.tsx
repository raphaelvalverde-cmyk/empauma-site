const locIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7A8C4E" strokeWidth="2" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const properties = [
  { tag: 'Villa', name: 'Villa du Réal Martin', location: 'Pierrefeu-du-Var' },
  { tag: 'Maison', name: 'Maison de village', location: 'Le Lavandou' },
]

export default function Properties() {
  return (
    <section className="properties section-pad" id="logements">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="pattern-dots pattern-1" />
      <span className="star-deco" style={{ top: '18%', left: '5%', fontSize: '24px' }}>✦</span>

      <div className="wrap">
        <div className="center-head reveal">
          <div className="eyebrow center">Nos logements</div>
          <h2 className="section-title">Des biens <em>choyés au quotidien</em></h2>
          <p className="section-lead">Quelques exemples de logements que nous gérons avec soin dans la région.</p>
        </div>

        <div className="properties-grid reveal-stagger">
          {properties.map((prop, i) => (
            <div key={i} className="property-card">
              <div className="property-photo">
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
