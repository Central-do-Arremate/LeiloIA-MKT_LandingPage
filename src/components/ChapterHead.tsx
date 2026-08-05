import type { ReactNode } from 'react'
import AnimatedSection from './AnimatedSection'
import Eyebrow from './Eyebrow'
import { brand } from './brand'
import { H2, LEAD } from './type'

/** Título/lead vêm como string na maioria das seções — aí a marca ganha cor. */
const paint = (node: ReactNode) => (typeof node === 'string' ? brand(node) : node)

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
      <Eyebrow>{brand(eyebrow)}</Eyebrow>
      <h2 id={headingId} className={`mt-5 ${titleMax} ${H2}`}>
        {paint(title)}
      </h2>
      {lead && <p className={`mt-5 max-w-2xl ${LEAD}`}>{paint(lead)}</p>}
    </AnimatedSection>
  )
}
