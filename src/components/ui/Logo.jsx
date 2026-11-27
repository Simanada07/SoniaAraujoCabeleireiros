import business from '../../config/business'

/* Logótipo "SA". Se existir um ficheiro em business.logo.image, usa-o;
   caso contrário desenha o monograma: um S e um A sobrepostos, em dourado. */
export default function Logo({ size = 48, color = 'var(--color-gold)', className = '' }) {
  const { logo, name } = business

  if (logo?.image) {
    return <img src={logo.image} alt={name} height={size} className={className} style={{ height: size, width: 'auto' }} />
  }

  const [first, second] = logo?.monogram || ['S', 'A']

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label={name}
      style={{ display: 'block', overflow: 'visible' }}
    >
      <g fill={color} style={{ fontFamily: 'var(--font-brand)' }}>
        <text x="6" y="82" style={{ fontSize: '96px', fontWeight: 400 }}>
          {first}
        </text>
        <text x="30" y="96" style={{ fontSize: '104px', fontWeight: 400 }}>
          {second}
        </text>
      </g>
    </svg>
  )
}
