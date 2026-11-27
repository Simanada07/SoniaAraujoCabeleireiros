/* ETIQUETA + Título + traço — o cabeçalho de todas as secções */
export default function SectionHeading({ eyebrow, title, titleLines, text, id, align = 'left', light = false }) {
  const center = align === 'center'
  const lines = titleLines || (title ? [title] : [])

  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: center ? 'center' : 'flex-start',
        textAlign: align,
        gap: 'var(--space-3)',
      }}
    >
      {eyebrow && (
        <span className="eyebrow" style={light ? { color: 'var(--color-on-accent)', opacity: 0.85 } : undefined}>
          {eyebrow}
        </span>
      )}
      {lines.length > 0 && (
        <h2 id={id} style={light ? { color: 'var(--color-on-accent)' } : undefined}>
          {lines.map((line, i) => (
            <span key={line} style={{ display: 'block' }}>
              {line}
              {i < lines.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h2>
      )}
      <span className="rule" style={light ? { background: 'var(--color-on-accent)' } : undefined} />
      {text && (
        <p className="lead" style={light ? { color: 'var(--color-on-accent)', opacity: 0.9 } : undefined}>
          {text}
        </p>
      )}
    </header>
  )
}
