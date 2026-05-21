export default function Metrics() {
  return (
    <section className="metrics">
      <span className="star-deco star-1">✦</span>
      <span className="star-deco star-2">✦</span>
      <span className="star-deco star-3">✦</span>
      <span className="star-deco star-4">✦</span>

      <div className="wrap">
        <div className="metrics-grid reveal-stagger">
          <div className="metric">
            <div className="metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#C49A58" strokeWidth="1.8">
                <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
              </svg>
            </div>
            <div className="metric-number">99+</div>
            <div className="metric-label">nuits louées</div>
          </div>

          <div className="metric-divider" aria-hidden="true" />

          <div className="metric">
            <div className="metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="#C49A58" stroke="#C49A58" strokeWidth="1.8">
                <path d="M12 2l3 6.5 7 .9-5 4.9 1.2 7-6.2-3.4L5.8 21l1.2-7-5-4.9 7-.9z" />
              </svg>
            </div>
            <div className="metric-number">
              4,8<span style={{ fontSize: '32px', color: 'var(--cream)' }}>/5</span>
            </div>
            <div className="metric-label">note moyenne sur Airbnb</div>
          </div>

          <div className="metric-divider" aria-hidden="true" />

          <div className="metric">
            <div className="metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#C49A58" strokeWidth="1.8">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M17 7h4v4" />
              </svg>
            </div>
            <div className="metric-number">
              +30<span style={{ fontSize: '32px', color: 'var(--cream)' }}>%</span>
            </div>
            <div className="metric-label">de revenus en moyenne pour les propriétaires</div>
          </div>
        </div>
      </div>
    </section>
  )
}
