import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../motion/Reveal'
import { useReveal } from '../../hooks/useReveal'

interface TetoLineProps {
  /** Chip mono que cavalga a linha. */
  tag: string
  tagSide?: 'left' | 'right'
  /**
   * Lavagens de prejuízo/lucro e os rótulos das zonas. Só onde a página está
   * de fato falando de dinheiro — sem elas a linha é só uma régua.
   */
  zones?: { above: string; below: string }
  className?: string
}

/**
 * A Linha do Teto — a assinatura da marca, a mesma que o app usa.
 *
 * Régua verde de 2px que ignora a grade de conteúdo e sangra de ponta a ponta,
 * desenhando da esquerda pra direita quando entra em cena. É o teto do lance
 * desenhado: acima dela o negócio é prejuízo, abaixo é lucro — que é
 * literalmente o que o produto calcula.
 *
 * Aparece POUCAS vezes na página (hero, oferta, fecho). Em qualquer outro
 * lugar o marcador é o tique do <Eyebrow>. Régua que aparece toda hora deixa
 * de significar teto e vira listra.
 */
export default function TetoLine({ tag, tagSide = 'right', zones, className = '' }: TetoLineProps) {
  const reduce = useReducedMotion()
  // Gatilho próprio: a régua tem 2px de altura e o chip só faz sentido em cima
  // dela. Se o desenho não dispara, sobra um chip flutuando no vazio.
  const { ref, shown } = useReveal()

  return (
    <div ref={ref} className={`relative left-1/2 w-screen max-w-none -translate-x-1/2 ${className}`} aria-hidden="true">
      {zones && (
        <>
          <span
            className="pointer-events-none absolute inset-x-0 bottom-full h-24 sm:h-32"
            style={{ background: 'linear-gradient(to top, rgba(251,69,39,0.05), transparent)' }}
          />
          <span
            className="pointer-events-none absolute inset-x-0 top-full h-24 sm:h-32"
            style={{ background: 'linear-gradient(to bottom, rgba(205,255,30,0.05), transparent)' }}
          />
        </>
      )}

      <motion.div
        className="h-0.5 w-full origin-left bg-leilo-go"
        style={{ boxShadow: '0 0 16px -2px rgba(205,255,30,0.45)' }}
        initial={false}
        animate={{ scaleX: shown || reduce ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
      />

      {zones && (
        <>
          <span className="absolute bottom-2 left-4 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-leilo-stop/70 sm:left-8">
            {zones.above}
          </span>
          <span className="absolute left-4 top-2 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-leilo-go-dim sm:left-8">
            {zones.below}
          </span>
        </>
      )}

      <motion.span
        className={`absolute top-1/2 -translate-y-1/2 border border-leilo-go/40 bg-leilo-base px-3 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-leilo-go ${
          tagSide === 'right' ? 'right-4 sm:right-10' : 'left-4 sm:left-10'
        }`}
        initial={false}
        animate={shown || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.7, ease: EASE }}
      >
        <span className="absolute inset-0 -z-10 bg-leilo-go/10" />
        {tag}
      </motion.span>
    </div>
  )
}
