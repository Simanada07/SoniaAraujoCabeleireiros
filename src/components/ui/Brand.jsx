import business from '../../config/business'
import Logo from './Logo'
import styles from './Brand.module.css'

/* Monograma SA + "SÓNIA ARAÚJO / CABELEIREIROS", como no logótipo */
export default function Brand({ light = false, size = 40, className = '' }) {
  const { brandName, brandSub } = business
  return (
    <span className={`${styles.brand} ${light ? styles.light : ''} ${className}`}>
      <Logo size={size} color={light ? 'var(--color-on-accent)' : 'var(--color-gold)'} />
      <span className={styles.text} aria-hidden="true">
        <span className={styles.name}>{brandName}</span>
        {brandSub && <span className={styles.sub}>{brandSub}</span>}
      </span>
    </span>
  )
}
