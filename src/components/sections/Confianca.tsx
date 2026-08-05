import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { brand } from '../brand'
import { READOUT, TAG } from '../type'
import { CONFIANCA, LEO } from '../../data/landing'

export default function Confianca() {
  return (
    <section aria-labelledby="confianca-heading" className="py-16 sm:py-20 md:py-24">
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

        {/* Assinatura da lista: quem responde por esses itens tem rosto. */}
        <AnimatedSection delay={0.2} className="mt-6">
          <div className="flex items-center gap-5 rounded-2xl border border-leilo-go/25 bg-leilo-go/[0.04] p-4 sm:p-5">
            {/* O retrato original é de corpo inteiro; o zoom com origem no
                rosto é o que faz a assinatura ler como assinatura. */}
            <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-20">
              <img
                src="/assets/photos/leo-retrato-900.avif"
                alt="Leonardo Ribeiro"
                width={600}
                height={900}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="h-full w-full origin-[50%_28%] scale-[1.7] object-cover object-[50%_26%]"
              />
            </div>
            <div>
              <p className={`${TAG} text-leilo-muted`}>Metodologia assinada por</p>
              <p className="mt-1.5 font-euro text-lg font-semibold uppercase tracking-tight text-white sm:text-xl">
                {LEO.signoff}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p className="mx-auto mt-8 max-w-3xl border-l-2 border-leilo-go/60 pl-4 text-sm leading-relaxed text-leilo-muted">
            {brand(CONFIANCA.honesty)}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  )
}
