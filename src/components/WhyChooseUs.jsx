import business from '../config/business'
import { iconsByName } from '../utils/icons'
import { HeartIcon } from './ui/Icons'
import Reveal from './ui/Reveal'
import styles from './WhyChooseUs.module.css'

/* Faixa de pontos fortes logo abaixo do hero */
export default function WhyChooseUs() {
  const { features } = business
  if (!features?.length) return null

  return (
    <section className={styles.band} aria-label="Pontos fortes">
      <ul className={`container ${styles.grid}`}>
        {features.map((item, i) => {
          const Icon = iconsByName[item.icon] || HeartIcon
          return (
            <Reveal as="li" key={item.title} className={styles.item} delay={i * 80}>
              <span className={styles.icon}>
                <Icon />
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
