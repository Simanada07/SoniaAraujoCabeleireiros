import { useEffect, useRef } from 'react'

/**
 * Inclinação 3D suave que segue o rato.
 * Só funciona em ecrãs com rato (não em telemóveis) e é desligada para quem
 * tem "reduzir movimento" ativo no sistema.
 * Escreve as variáveis CSS --rx e --ry no elemento; o CSS decide o resto.
 */
export default function useTilt(maxDeg = 6) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduced) return undefined

    let frame = 0
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5 // -0.5 … 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--ry', `${(x * maxDeg * 2).toFixed(2)}deg`)
        el.style.setProperty('--rx', `${(-y * maxDeg * 2).toFixed(2)}deg`)
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [maxDeg])

  return ref
}
