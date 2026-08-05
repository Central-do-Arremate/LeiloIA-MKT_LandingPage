import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { brand } from '../brand'
import { BODY, H3, TAG } from '../type'
import { PASSOS } from '../../data/landing'

export default function Passos() {
  return (
    <section id="como-funciona" aria-labelledby="passos-heading" className="bg-leilo-section py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={PASSOS.eyebrow} title={PASSOS.title} headingId="passos-heading" />

        {/* Trilho cronometrado — o laudo em < 1 min. */}
        <div className="mt-10 md:mt-14">
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PASSOS.timed.map((step, i) => (
              <AnimatedSection key={step.stamp} delay={0.1 * i}>
                <li className="h-full rounded-2xl border border-white/[0.08] bg-leilo-panel/40 p-6">
                  <p className="font-mono text-2xl font-bold text-leilo-go">{step.stamp}</p>
                  <h3 className={`mt-4 ${H3}`}>{brand(step.title)}</h3>
                  <p className={`mt-2.5 ${BODY}`}>{brand(step.body)}</p>
                </li>
              </AnimatedSection>
            ))}
          </ol>

          <AnimatedSection delay={0.3} className="mt-6 flex items-center gap-4">
            <span aria-hidden="true" className="h-px flex-1 bg-leilo-go/40" />
            <p className="rounded-full border border-leilo-go/50 bg-leilo-go/10 px-4 py-1.5 font-mono text-sm font-bold text-leilo-go">
              {PASSOS.checkpoint}
            </p>
            <span aria-hidden="true" className="h-px flex-1 bg-leilo-go/40" />
          </AnimatedSection>
        </div>

        {/* Depois do cronômetro — sem pressa, quando precisar. */}
        <AnimatedSection delay={0.2} className="mt-12 md:mt-16">
          <p className={`${TAG} text-leilo-muted`}>{PASSOS.untimedTag}</p>
          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PASSOS.untimed.map((step) => (
              <div key={step.title} className="rounded-2xl border border-white/[0.06] p-6">
                <h3 className={H3}>{step.title}</h3>
                <p className={`mt-2.5 ${BODY}`}>{step.body}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
