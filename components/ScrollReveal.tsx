'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-stagger')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    elements.forEach(el => observer.observe(el))

    document.querySelectorAll('.reveal-stagger').forEach(group => {
      Array.from(group.children).forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `${i * 0.09}s`
      })
    })

    return () => observer.disconnect()
  }, [])

  return null
}
