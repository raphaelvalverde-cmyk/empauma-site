'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#accueil" className="nav-logo" aria-label="Empauma — Accueil">
            <span className="star">✦</span>
            <span className="name">EMPAUMA</span>
            <span className="sub">Conciergerie</span>
          </a>
          <ul className="nav-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#offre">Offre</a></li>
            <li><a href="#logements">Logements</a></li>
            <li><a href="#avis">Avis</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary"><span>Contactez-nous</span></a>
            <button
              className={`burger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <a href="#accueil" onClick={closeMenu}>Accueil</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#offre" onClick={closeMenu}>Offre</a>
        <a href="#logements" onClick={closeMenu}>Logements</a>
        <a href="#avis" onClick={closeMenu}>Avis</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#contact" className="btn btn-primary" onClick={closeMenu}><span>Contactez-nous</span></a>
      </div>
    </>
  )
}
