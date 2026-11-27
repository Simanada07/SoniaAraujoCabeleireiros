import { useState } from 'react'
import business from '../config/business'
import { directionsLink, emailLink, instagramLink, instagramName, phoneLink, whatsappLink } from '../utils/links'
import Brand from './ui/Brand'
import { InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsappIcon } from './ui/Icons'
import styles from './Footer.module.css'

export default function Footer() {
  const { name, footer, contact, hoursSummary, contactSection, nav } = business
  const [year] = useState(() => new Date().getFullYear())

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <a href="#top" aria-label={name} className={styles.brand}>
            <Brand light size={44} />
          </a>
          {footer.note && <p className={styles.note}>{footer.note}</p>}
        </div>

        <div>
          <h3 className={styles.title}>{footer.linksTitle}</h3>
          <ul className={styles.list}>
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>{footer.hoursTitle}</h3>
          <ul className={styles.list}>
            {hoursSummary.map((h) => (
              <li key={h.label} className={styles.hoursItem}>
                <span className={styles.hoursLabel}>{h.label}</span>
                <span>{h.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>{footer.contactTitle}</h3>
          <ul className={styles.list}>
            {phoneLink && (
              <li>
                <a href={phoneLink} className={styles.iconLink}>
                  <PhoneIcon /> {contact.phoneDisplay}
                </a>
              </li>
            )}
            {whatsappLink && (
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                  <WhatsappIcon /> {contactSection.whatsappLabel}
                </a>
              </li>
            )}
            {instagramLink && (
              <li>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                  <InstagramIcon /> {instagramName}
                </a>
              </li>
            )}
            {emailLink && (
              <li>
                <a href={emailLink} className={styles.iconLink}>
                  <MailIcon /> {contact.email}
                </a>
              </li>
            )}
            <li>
              <a href={directionsLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                <PinIcon />
                <span>
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {name}. {footer.rights}
        </p>
      </div>
    </footer>
  )
}
