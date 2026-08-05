import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { READOUT } from '../type'
import { CONFIANCA } from '../../data/landing'

export default function Confianca() {
  return (
    <section aria-labelledby="confianca-heading" className="bg-leilo-section py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead
          eyebrow={CONFIANCA.eyebrow}
          title={CONFIANCA.title}
          lead={CONFIANCA.lead}
          headingId="confianca-heading"
        />

        <AnimatedSection delay={0.15} className="mt-10 md:mt-14">
          <ul className="overflow-hidden rounded-2xl border border-white/[0.08] bg-leilo-panel/40">
            {CONFIANCA.rows.map((row) => (
              <li
                key={row}
                className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-4 last:border-0 sm:px-6"
              >
                <span className="text-[0.9375rem] font-medium text-white/90 sm:text-base">{row}</span>
                <span className={`flex flex-shrink-0 items-center gap-1.5 ${READOUT} text-leilo-go`}>
                  <span aria-hidden="true">✓</span>
                  {CONFIANCA.verified}
                </span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mx-auto mt-8 max-w-3xl border-l-2 border-leilo-go/60 pl-4 text-sm leading-relaxed text-leilo-muted">
            {CONFIANCA.honesty}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  )
}
