import { useState } from 'react'
import business from '../config/business'
import { directionsLink, emailLink, instagramLink, instagramName, phoneLink, whatsappLink } from '../utils/links'
import Button from './ui/Button'
import { ClockIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsappIcon } from './ui/Icons'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import useTilt from './ui/useTilt'
import styles from './Contact.module.css'

const emptyForm = { name: '', phone: '', service: '', message: '' }

export default function Contact() {
  const { contactSection: c, contact, hours, services } = business
  const ovalRef = useTilt(7)
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)
  // O horário em business.js começa à segunda; getDay() do JS começa ao domingo.
  const [todayIndex] = useState(() => (new Date().getDay() + 6) % 7)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Sem servidor: se houver email configurado, abre a aplicação de email do
    // visitante com o pedido já escrito. Caso contrário, pede para ligar.
    if (contact.email) {
      const body = [
        `${c.form.nameLabel}: ${form.name}`,
        `${c.form.phoneLabel}: ${form.phone}`,
        form.service && `${c.form.serviceLabel}: ${form.service}`,
        form.message && `\n${form.message}`,
      ]
        .filter(Boolean)
        .join('\n')
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        c.form.emailSubject,
      )}&body=${encodeURIComponent(body)}`
    }
    setSent(true)
  }

  // Mensagem de WhatsApp já escrita com os dados do formulário
  const requestText = [
    c.form.whatsappIntro,
    `${c.form.nameLabel}: ${form.name}`,
    `${c.form.phoneLabel}: ${form.phone}`,
    form.service && `${c.form.serviceLabel}: ${form.service}`,
    form.message && `${c.form.messageLabel}: ${form.message}`,
  ]
    .filter(Boolean)
    .join('\n')
  const whatsappRequestLink = whatsappLink ? `${whatsappLink}?text=${encodeURIComponent(requestText)}` : null

  const reset = () => {
    setForm(emptyForm)
    setSent(false)
  }

  const channels = [
    phoneLink && { Icon: PhoneIcon, label: c.callLabel, value: contact.phoneDisplay, href: phoneLink },
    whatsappLink && {
      Icon: WhatsappIcon,
      label: c.whatsappLabel,
      value: contact.whatsappDisplay || contact.whatsapp,
      href: whatsappLink,
      external: true,
    },
    emailLink && { Icon: MailIcon, label: c.emailLabel, value: contact.email, href: emailLink },
    instagramLink && {
      Icon: InstagramIcon,
      label: c.instagramLabel,
      value: instagramName,
      href: instagramLink,
      external: true,
    },
  ].filter(Boolean)

  return (
    <section id="contactos" className="section" aria-labelledby="contact-title">
      <div className="container">
        {/* ---------- Chamada com foto oval ---------- */}
        <Reveal className={styles.cta}>
          <div ref={ovalRef} className={`media ${styles.oval}`}>
            <img src={c.ctaImage} alt={c.ctaImageAlt} loading="lazy" decoding="async" width="1200" height="800" />
          </div>
          <div className={styles.ctaCopy}>
            <h2 id="contact-title">
              {c.ctaTitleLines.map((line) => (
                <span key={line} className={styles.line}>
                  {line}{' '}
                </span>
              ))}
            </h2>
            <p className="lead">{c.ctaText}</p>
            <div className={styles.ctaActions}>
              {phoneLink && (
                <Button href={phoneLink} icon={<PhoneIcon />}>
                  {c.callLabel} · {contact.phoneDisplay}
                </Button>
              )}
              {whatsappLink && (
                <Button href={whatsappLink} external variant="secondary" icon={<WhatsappIcon />}>
                  {c.whatsappLabel}
                </Button>
              )}
            </div>
          </div>
        </Reveal>

        {/* ---------- Detalhes ---------- */}
        <Reveal className={styles.head}>
          <SectionHeading eyebrow={c.eyebrow} title={c.title} align="center" />
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.card} variant="left">
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>{c.contactTitle}</h3>
              <ul className={styles.channels}>
                {channels.map(({ Icon, label, value, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={styles.channel}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <span className={styles.channelIcon}>
                        <Icon />
                      </span>
                      <span className={styles.channelText}>
                        <span className={styles.channelLabel}>{label}</span>
                        <span className={styles.channelValue}>{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div id="como-chegar" className={styles.block}>
              <h3 className={styles.blockTitle}>{c.addressTitle}</h3>
              <div className={styles.address}>
                <span className={styles.channelIcon}>
                  <PinIcon />
                </span>
                <address>
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </address>
              </div>
              <Button href={directionsLink} external variant="secondary" size="sm" arrow>
                {c.directionsLabel}
              </Button>
            </div>

            <div className={styles.block}>
              <h3 className={styles.blockTitle}>
                <ClockIcon /> {c.hoursTitle}
              </h3>
              <dl className={styles.hours}>
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`${styles.hoursRow} ${h.closed ? styles.closed : ''} ${
                      i === todayIndex ? styles.today : ''
                    }`}
                  >
                    <dt>
                      {h.day}
                      {i === todayIndex && <span className={styles.todayTag}>{c.todayLabel}</span>}
                    </dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal className={styles.card} variant="right" delay={100}>
            {sent ? (
              <div className={styles.success} role="status" aria-live="polite">
                <h3>
                  {c.form.successTitle}
                  {form.name ? `, ${form.name.trim().split(' ')[0]}` : ''}.
                </h3>
                {!contact.email && <p>{c.form.successText}</p>}
                <div className={styles.successActions}>
                  {whatsappRequestLink && (
                    <Button href={whatsappRequestLink} external icon={<WhatsappIcon />}>
                      {c.form.whatsappSendLabel}
                    </Button>
                  )}
                  {phoneLink && (
                    <Button href={phoneLink} variant="secondary" icon={<PhoneIcon />}>
                      {c.callLabel} · {contact.phoneDisplay}
                    </Button>
                  )}
                  <Button variant="secondary" onClick={reset}>
                    {c.form.resetLabel}
                  </Button>
                </div>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>{c.form.title}</h3>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="cf-name">{c.form.nameLabel}</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={update}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="cf-phone">{c.form.phoneLabel}</label>
                    <input
                      id="cf-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      value={form.phone}
                      onChange={update}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="cf-service">{c.form.serviceLabel}</label>
                  <select id="cf-service" name="service" value={form.service} onChange={update}>
                    <option value="">{c.form.servicePlaceholder}</option>
                    {services.items.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="cf-message">{c.form.messageLabel}</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows="4"
                    placeholder={c.form.messagePlaceholder}
                    value={form.message}
                    onChange={update}
                  />
                </div>

                <Button type="submit" arrow className={styles.submit}>
                  {c.form.submitLabel}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
