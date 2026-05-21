'use client'

import { useState } from 'react'

const faqs = [
  {
    q: "Quels services sont inclus dans l'offre de conciergerie ?",
    a: "Nous nous occupons de tout : mise en ligne de l'annonce, gestion des réservations, communication avec les voyageurs, ménage, blanchisserie, maintenance, et bien plus. Votre implication ? Aucune, si ce n'est de profiter des revenus générés.",
  },
  {
    q: 'Quel est le coût de vos services ?',
    a: "Nous fonctionnons avec un pourcentage fixe de 20% TTC du chiffre d'affaires d'un bien. Pas de frais supplémentaires, vous payez uniquement sur ce que vous gagnez. Notre intérêt est de maximiser vos profits car nos revenus dépendent des vôtres.",
  },
  {
    q: 'Comment gérez-vous les imprévus avec les voyageurs ?',
    a: "Nous offrons une assistance 24h/7j. Qu'il s'agisse d'un problème d'arrivée, de maintenance ou de questions sur place, nous intervenons rapidement pour tout résoudre.",
  },
  {
    q: 'Puis-je récupérer mon logement temporairement ?',
    a: "Vous restez totalement maître de votre calendrier. C'est simple, vous nous informez, et nous bloquons immédiatement les dates sur les plateformes.",
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="faq section-pad" id="faq">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="pattern-dots pattern-1" />
      <span className="star-deco star-1">✦</span>

      <div className="wrap">
        <div className="center-head reveal">
          <div className="eyebrow center">Questions fréquentes</div>
          <h2 className="section-title">Tout ce qu&apos;il faut <em>savoir</em></h2>
        </div>

        <div className="faq-list reveal">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                {faq.q}
                <span className="faq-toggle" aria-hidden="true" />
              </button>
              <div
                className="faq-a"
                style={{ maxHeight: openIdx === i ? '400px' : '0' }}
              >
                <div className="faq-a-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
