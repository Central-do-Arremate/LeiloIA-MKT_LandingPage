import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE } from './Reveal'
import { useReveal } from '../../hooks/useReveal'

interface RevealGroupProps {
  children: ReactNode
  className?: string
  /** Intervalo entre filhos. 60ms lê como cascata; acima de ~100ms lê como espera. */
  stagger?: number
  delay?: number
}

/**
 * Cascata em lista/grade. O pai orquestra e cada <RevealItem> herda o tempo,
 * então a ordem do stagger é a ordem do DOM — não precisa calcular delay por
 * índice em lugar nenhum.
 *
 * Sob reduced-motion o stagger some e os itens só fazem fade; o conteúdo nunca
 * fica preso invisível.
 */
export default function RevealGroup({ children, className = '', stagger = 0.06, delay = 0 }: RevealGroupProps) {
  const reduce = useReducedMotion()
  const { ref, shown } = useReveal()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={shown ? 'shown' : 'hidden'}
      variants={{
        hidden: {},
        shown: {
          transition: {
            staggerChildren: reduce ? 0 : stagger,
            delayChildren: reduce ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface RevealItemProps {
  children: ReactNode
  className?: string
  y?: number
  /** Renderiza como <li> quando o grupo é uma lista de verdade. */
  as?: 'div' | 'li'
}

/** Um degrau da cascata. Só funciona dentro de <RevealGroup>. */
export function RevealItem({ children, className = '', y = 16, as = 'div' }: RevealItemProps) {
  const reduce = useReducedMotion()
  const Tag = as === 'li' ? motion.li : motion.div

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : y },
        shown: { opacity: 1, y: 0, transition: { duration: reduce ? 0.2 : 0.5, ease: EASE } },
      }}
    >
      {children}
    </Tag>
  )
}
