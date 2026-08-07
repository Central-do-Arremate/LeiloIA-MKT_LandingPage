import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE } from './Reveal'
import { useReveal } from '../../hooks/useReveal'

interface SplitLinesProps {
  /**
   * As linhas, já quebradas à mão. Não medimos o texto para descobrir onde ele
   * quebra: a medição só existe depois do layout, e o prerender roda em Node —
   * o servidor entregaria um número de linhas e o cliente outro. Quebrar à mão
   * também é melhor edição, porque a quebra passa a ser escolha de quem
   * escreve ("em menos de 1 minuto" nunca parte no meio).
   */
  lines: readonly ReactNode[]
  className?: string
  /** Classe aplicada a cada linha (peso, cor, tamanho). */
  lineClassName?: string
  as?: 'h1' | 'h2' | 'p'
  id?: string
}

/**
 * Título entrando linha a linha por trás de uma máscara.
 *
 * Reservado às aberturas de ato e ao H1 — cinco ou seis usos na página
 * inteira. Aplicado em todo heading vira maneirismo, e é exatamente o tipo de
 * efeito que faz uma página parecer gerada.
 */
export default function SplitLines({
  lines,
  className = '',
  lineClassName = '',
  as: Tag = 'h2',
  id,
}: SplitLinesProps) {
  const reduce = useReducedMotion()
  // Este reveal esconde um TÍTULO atrás de uma máscara: se não disparar, o
  // título não existe na página. Daí o gatilho próprio, que confere na
  // montagem se o elemento já está visível — ver hooks/useReveal.
  const { ref, shown } = useReveal<HTMLHeadingElement>()

  return (
    <Tag id={id} className={className} ref={ref}>
      {lines.map((line, i) => (
        // A máscara é o overflow-hidden deste wrapper: a linha começa
        // deslocada pra baixo e sobe por trás da borda dele.
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName}`}
            initial={false}
            animate={shown ? { y: 0, opacity: 1 } : { y: reduce ? 0 : '105%', opacity: reduce ? 0 : 1 }}
            transition={{
              duration: reduce ? 0.2 : 0.75,
              delay: reduce ? 0 : i * 0.09,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
