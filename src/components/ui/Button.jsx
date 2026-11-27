import { ArrowIcon } from './Icons'
import styles from './Button.module.css'

/**
 * Um único botão para todo o site.
 * variant: "primary" | "secondary" | "light" | "outlineLight"
 * arrow: mostra uma seta à direita. icon: ícone à esquerda.
 * Usa <a> quando recebe `href`, senão <button>.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  arrow = false,
  icon,
  children,
  className = '',
  type = 'button',
  ...rest
}) {
  const classes = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ')
  const content = (
    <>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {arrow && (
        <span className={styles.icon} aria-hidden="true">
          <ArrowIcon />
        </span>
      )}
    </>
  )

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  )
}
