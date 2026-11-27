import { useEffect } from 'react'
import business from './config/business'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'

/* Liga as cores de business.js aos tokens de CSS */
const colorTokens = {
  background: '--color-bg',
  neutral: '--color-neutral',
  surface: '--color-surface',
  ink: '--color-ink',
  inkMuted: '--color-ink-muted',
  accent: '--color-accent',
  accentHover: '--color-accent-hover',
  accentSoft: '--color-accent-soft',
  line: '--color-line',
  onAccent: '--color-on-accent',
  gold: '--color-gold',
}

// Aplicado antes do primeiro desenho para não haver "salto" de cor
const root = document.documentElement
Object.entries(colorTokens).forEach(([key, token]) => {
  if (business.colors?.[key]) root.style.setProperty(token, business.colors[key])
})

export default function App() {
  useEffect(() => {
    document.documentElement.lang = business.language || 'pt-PT'
    document.title = business.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', business.meta.description)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
