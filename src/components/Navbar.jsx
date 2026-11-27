import { useEffect, useState } from 'react'
import business from '../config/business'
import { phoneLink } from '../utils/links'
import Brand from './ui/Brand'
import Button from './ui/Button'
import { PhoneIcon } from './ui/Icons'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { nav, name } = business
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(nav.links[0]?.href)

  // Sombra suave depois de fazer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sublinha o link da secção que está a ser vista
  useEffect(() => {
    const sections = nav.links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)
    if (!sections.length || !('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [nav.links])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 960 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${open ? styles.isOpen : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} onClick={close} aria-label={name}>
          <Brand />
        </a>

        <nav className={styles.desktopNav} aria-label="Principal">
          <ul className={styles.links}>
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.link} ${active === link.href ? styles.active : ''}`}
                  aria-current={active === link.href ? 'location' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href={nav.cta.href} size="sm" className={styles.cta}>
            {nav.cta.label}
          </Button>
          {/* No telemóvel: botão compacto para ligar (o "Marcar hora" fica no menu) */}
          {phoneLink && (
            <a href={phoneLink} className={styles.call} aria-label={nav.callLabel} title={nav.callLabel}>
              <PhoneIcon />
            </a>
          )}
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? nav.closeMenuLabel : nav.openMenuLabel}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>

      <div id="menu-movel" className={styles.mobilePanel} hidden={!open}>
        <nav className="container" aria-label="Menu móvel">
          <ul className={styles.mobileLinks}>
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.mobileLink} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={nav.cta.href} className={styles.mobileCta} onClick={close} arrow>
            {nav.cta.label}
          </Button>
        </nav>
      </div>
    </header>
  )
}
