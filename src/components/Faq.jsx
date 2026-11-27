import business from '../config/business'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import styles from './Faq.module.css'

/* Só aparece quando houver perguntas em business.js */
export default function Faq() {
  const { faq } = business
  if (!faq?.items?.length) return null

  return (
    <section id="perguntas" className="section section--neutral" aria-labelledby="faq-title">
      <div className={`container ${styles.wrap}`}>
        <Reveal className={styles.head}>
          <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} align="center" />
        </Reveal>
        <Reveal className={styles.list}>
          {faq.items.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
