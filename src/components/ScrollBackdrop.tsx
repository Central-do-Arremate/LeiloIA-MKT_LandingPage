import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TONE } from '../config/tones'

/**
 * Fundo contínuo da página.
 *
 * Uma única camada fixa atrás de todo o conteúdo, cuja cor é função do scroll.
 * Qualquer elemento com `data-tone="#hex"` vira uma parada da escala: o tom
 * vale cheio quando o CENTRO daquele elemento cruza o centro da viewport, e
 * entre duas paradas a cor é a mistura das duas. Resultado: a virada de cor
 * cai no miolo da seção, não na emenda entre elas.
 *
 * As seções são medidas em runtime (e remedidas quando o layout muda) porque
 * a página carrega em lazy — a altura só existe depois que cada bloco monta.
 */
export default function ScrollBackdrop() {
  const { scrollY } = useScroll()
  // Estado inicial válido: useTransform exige ao menos duas paradas crescentes.
  const [scale, setScale] = useState<{ at: number[]; tone: string[] }>({
    at: [0, 1],
    tone: [TONE.abertura, TONE.abertura],
  })

  useEffect(() => {
    let raf = 0

    const measure = () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>('[data-tone]'))
      const half = window.innerHeight / 2
      const at: number[] = []
      const tone: string[] = []

      for (const el of els) {
        const value = el.dataset.tone
        if (!value) continue

        const rect = el.getBoundingClientRect()
        // Seção que renderizou vazia (ex.: Resultados sem depoimentos) não
        // ganha parada — senão a escala gasta um degrau em nada.
        if (rect.height < 1) continue

        const center = rect.top + window.scrollY + rect.height / 2 - half
        const previous = at[at.length - 1]
        // A escala precisa ser estritamente crescente pro useTransform.
        at.push(previous === undefined ? Math.max(0, center) : Math.max(center, previous + 1))
        tone.push(value)
      }

      if (at.length < 2) return
      setScale((current) =>
        current.at.join() === at.join() && current.tone.join() === tone.join() ? current : { at, tone },
      )
    }

    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(measure)
    }

    schedule()
    window.addEventListener('resize', schedule)
    // Pega as seções lazy entrando e mudando a altura do documento.
    const observer = new ResizeObserver(schedule)
    observer.observe(document.body)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', schedule)
      observer.disconnect()
    }
  }, [])

  const backgroundColor = useTransform(scrollY, scale.at, scale.tone)

  return (
    <>
      <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20" style={{ backgroundColor }} />
      {/* Luz de topo fixa: dá profundidade e impede que a escala inteira leia
          como um cinza chapado. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(115%_75%_at_50%_-10%,rgba(255,255,255,0.05),transparent_62%)]"
      />
    </>
  )
}
