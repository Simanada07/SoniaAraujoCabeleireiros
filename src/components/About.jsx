import business from '../config/business'
import { directionsLink } from '../utils/links'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import styles from './About.module.css'

/* Faixa de cor: texto à esquerda, foto à direita recortada por um arco */
export default function About() {
  const { about } = business
  if (!about) return null

  const isMaps = about.cta?.href === 'maps'
  const href = isMaps ? directionsLink : about.cta?.href

  return (
    <section id="sobre" className={styles.band} aria-labelledby="about-title">
      <div className={styles.inner}>
        <Reveal className={styles.copy}>
          <SectionHeading id="about-title" eyebrow={about.eyebrow} titleLines={about.titleLines} light />
          {about.paragraphs.map((p) => (
            <p key={p} className={styles.paragraph}>
              {p}
            </p>
          ))}
          {about.cta && (
            <Button href={href} external={isMaps} variant="light" arrow className={styles.cta}>
              {about.cta.label}
            </Button>
          )}
        </Reveal>

        <Reveal className={styles.visual} variant="right" delay={150}>
          <div className={`media ${styles.image}`}>
            <img src={about.image} alt={about.imageAlt} loading="lazy" decoding="async" width="1200" height="900" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
