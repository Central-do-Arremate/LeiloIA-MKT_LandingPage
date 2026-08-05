import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { TAG } from '../type'
import { CASE_STUDY, RESULTADOS_META, TESTIMONIALS } from '../../data/landing'

/**
 * Depoimentos e estudo de caso. Enquanto TESTIMONIALS estiver vazio e
 * CASE_STUDY for null (estado atual, de propósito — nada de depoimento
 * inventado), a seção inteira some. Preencher em src/data/landing.ts e ela
 * aparece sozinha.
 */
export default function Resultados() {
  if (TESTIMONIALS.length === 0 && !CASE_STUDY) return null

  return (
    <section aria-labelledby="resultados-heading" className="py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={RESULTADOS_META.eyebrow} title={RESULTADOS_META.title} headingId="resultados-heading" />

        {TESTIMONIALS.length > 0 && (
          <ul className="mt-10 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={0.1 * i}>
                <li className="h-full rounded-2xl border border-white/[0.08] bg-leilo-panel/40 p-6 sm:p-8">
                  <p className="text-base leading-relaxed text-white/90 sm:text-lg">“{t.quote}”</p>
                  <p className="mt-5 font-semibold text-white">{t.name}</p>
                  <p className="mt-0.5 text-sm text-leilo-muted">{t.context}</p>
                </li>
              </AnimatedSection>
            ))}
          </ul>
        )}

        {CASE_STUDY && (
          <AnimatedSection delay={0.2} className="mt-8">
            <div className="rounded-2xl border border-leilo-go/30 bg-leilo-go/[0.04] p-6 sm:p-8">
              <p className={`${TAG} text-leilo-go`}>Estudo de caso</p>
              <h3 className="mt-3 font-euro text-xl font-bold uppercase text-white">{CASE_STUDY.vehicle}</h3>
              <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ['Cenário inicial', CASE_STUDY.scenario],
                  ['Pontos identificados', CASE_STUDY.findings],
                  ['Como a metodologia ajudou', CASE_STUDY.decision],
                  ['Resultado', CASE_STUDY.result],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className={`${TAG} text-leilo-muted`}>{label}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-white/85">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimatedSection>
        )}
      </Container>
    </section>
  )
}
