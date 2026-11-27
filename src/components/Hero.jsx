import business from '../config/business'
import { phoneLink } from '../utils/links'
import { iconsByName } from '../utils/icons'
import Button from './ui/Button'
import Logo from './ui/Logo'
import styles from './Hero.module.css'

/* Selo redondo com o nome à volta e o monograma ao centro */
function Badge({ text }) {
  const r = 38
  const circumference = 2 * Math.PI * r
  return (
    <div className={styles.badge} aria-hidden="true">
      <svg viewBox="0 0 100 100" className={styles.badgeRing}>
        <defs>
          <path id="badge-circle" d={`M50,50 m-${r},0 a${r},${r} 0 1,1 ${r * 2},0 a${r},${r} 0 1,1 -${r * 2},0`} />
        </defs>
        <text className={styles.badgeText} textLength={circumference} lengthAdjust="spacing">
          <textPath href="#badge-circle">{text.toUpperCase()}</textPath>
        </text>
      </svg>
      <span className={styles.badgeLogo}>
        <Logo size={34} color="var(--color-on-accent)" />
      </span>
    </div>
  )
}

export default function Hero() {
  const { hero } = business
  const lines = hero.titleLines

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1 id="hero-title" className={styles.title}>
          {lines.map((line, i) => (
            <span key={line} className={i === lines.length - 1 ? styles.accentLine : undefined}>
              {line}
              {i < lines.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        <span className="rule" />
        <p className={styles.text}>{hero.text}</p>

        <div className={styles.actions}>
          <Button href={hero.primaryCta.href} arrow>
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </div>

        {hero.trust?.length > 0 && (
          <ul className={styles.trust}>
            {hero.trust.map((item) => {
              const Icon = iconsByName[item.icon]
              const content = (
                <>
                  {Icon && (
                    <span className={styles.trustIcon}>
                      <Icon />
                    </span>
                  )}
                  <span>{item.text}</span>
                </>
              )
              return (
                <li key={item.text}>
                  {item.link === 'phone' && phoneLink ? (
                    <a href={phoneLink} className={styles.trustItem}>
                      {content}
                    </a>
                  ) : (
                    <span className={styles.trustItem}>{content}</span>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <div className={styles.visual}>
        <div className={`media ${styles.image}`}>
          <img src={hero.image} alt={hero.imageAlt} fetchPriority="high" width="1200" height="1400" />
        </div>
        {hero.badgeText && <Badge text={hero.badgeText} />}
      </div>
    </section>
  )
}
