import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

/**
 * Curva de entrada da página inteira. Sai rápido e freia longo — é o que faz
 * o movimento ler como peso, e não como "elemento aparecendo".
 */
export const EASE = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Distância vertical de entrada. 0 = só opacidade. */
  y?: number
}

/**
 * Revelação de BLOCO — o padrão da página.
 *
 * Para listas e grades use <RevealGroup>: revelar oito itens de uma vez com
 * este componente entrega tudo no mesmo frame, e é justamente a cascata que dá
 * acabamento. Aqui é para o bloco inteiro (um cabeçalho, um painel).
 *
 * O gatilho é o `useReveal`, não o `whileInView` do Framer — ver o comentário
 * do hook sobre por que a diferença importa numa página com seções lazy.
 */
export default function Reveal({ children, className = '', delay = 0, y = 28 }: RevealProps) {
  const reduce = useReducedMotion()
  const { ref, shown } = useReveal()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : y }}
      transition={{ duration: reduce ? 0.2 : 0.6, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
