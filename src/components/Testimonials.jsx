import business from '../config/business'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import styles from './Testimonials.module.css'

/* Só aparece quando houver testemunhos reais em business.js */
export default function Testimonials() {
  const { testimonials } = business
  if (!testimonials?.items?.length) return null

  return (
    <section id="testemunhos" className="section section--neutral" aria-labelledby="testimonials-title">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionHeading id="testimonials-title" eyebrow={testimonials.eyebrow} title={testimonials.title} align="center" />
        </Reveal>
        <ul className={styles.grid}>
          {testimonials.items.map((t, i) => (
            <Reveal as="li" key={t.name + i} delay={i * 80}>
              <figure className={styles.card}>
                <blockquote>
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption>{t.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
