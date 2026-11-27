import { ArrowIcon } from './Icons'
import useTilt from './useTilt'
import styles from './ServiceCard.module.css'

/* Cartão com a foto em forma de arco, título, texto e link.
   Inclina-se em 3D a seguir o rato (só em computador). */
export default function ServiceCard({ title, text, image, imageAlt, linkLabel, href }) {
  const tiltRef = useTilt(5)

  return (
    <article ref={tiltRef} className={styles.card}>
      <div className={`media ${styles.arch}`}>
        <img src={image} alt={imageAlt} loading="lazy" decoding="async" width="600" height="760" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        {linkLabel && href && (
          <a href={href} className={`text-link ${styles.link}`}>
            {linkLabel}
            <ArrowIcon />
          </a>
        )}
      </div>
    </article>
  )
}
