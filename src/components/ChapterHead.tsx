import type { ReactNode } from 'react'
import AnimatedSection from './AnimatedSection'
import Eyebrow from './Eyebrow'
import { H2, LEAD } from './type'

interface ChapterHeadProps {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  className?: string
  /** Utilitário de largura máxima do H2 (o padrão segura títulos longos em ~2 linhas). */
  titleMax?: string
  headingId?: string
}

/** Abertura padrão de capítulo: eyebrow mono + headline display (+ lead). */
export default function ChapterHead({
  eyebrow,
  title,
  lead,
  className = '',
  titleMax = 'max-w-3xl',
  headingId,
}: ChapterHeadProps) {
  return (
    <AnimatedSection className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={headingId} className={`mt-5 ${titleMax} ${H2}`}>
        {title}
      </h2>
      {lead && <p className={`mt-5 max-w-2xl ${LEAD}`}>{lead}</p>}
    </AnimatedSection>
  )
}
