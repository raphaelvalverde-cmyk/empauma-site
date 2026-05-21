import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Offer from '@/components/Offer'
import Metrics from '@/components/Metrics'
import Properties from '@/components/Properties'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main>
        <Hero />
        <Services />
        <Offer />
        <Metrics />
        <Properties />
        <Testimonials />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
