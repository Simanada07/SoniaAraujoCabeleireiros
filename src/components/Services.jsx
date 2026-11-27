import business from '../config/business'
import { ArrowIcon } from './ui/Icons'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import ServiceCard from './ui/ServiceCard'
import styles from './Services.module.css'

export default function Services() {
  const { services } = business
  if (!services?.items?.length) return null

  return (
    <section id="servicos" className={`section section--neutral ${styles.section}`} aria-labelledby="services-title">
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.intro}>
          <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.title} text={services.text} />
          {services.link && (
            <a href={services.link.href} className={`text-link ${styles.link}`}>
              {services.link.label}
              <ArrowIcon />
            </a>
          )}
        </Reveal>

        <ul className={styles.grid}>
          {services.items.map((service, i) => (
            <Reveal as="li" key={service.title} delay={i * 80}>
              <ServiceCard {...service} linkLabel={services.cardLinkLabel} href={services.link?.href} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
