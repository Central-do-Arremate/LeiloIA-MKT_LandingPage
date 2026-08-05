import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import CtaButton from '../CtaButton'
import { brand } from '../brand'
import { H3, TAG } from '../type'
import { CONTA } from '../../data/landing'
import { SIGNUP_URL } from '../../config/links'

export default function ContaDoLote() {
  return (
    <section aria-labelledby="conta-heading" className="bg-leilo-section py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={CONTA.eyebrow} title={CONTA.title} lead={CONTA.lead} headingId="conta-heading" />

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-2 lg:gap-8">
          {/* A conta que ninguém faz inteira — lado do problema, sem verde. */}
          <AnimatedSection delay={0.1}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-leilo-panel/40 p-6 sm:p-8">
              <p className={`${TAG} text-leilo-stop`}>{CONTA.ledgerTitle}</p>
              <ul className="mt-6 flex flex-col gap-4">
                {CONTA.ledger.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-leilo-stop/80" />
                    <span className="text-base font-medium text-white/85 sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic leading-relaxed text-leilo-muted">{CONTA.ledgerNote}</p>
            </div>
          </AnimatedSection>

          {/* A resposta — lado verde. */}
          <AnimatedSection delay={0.2}>
            <div className="h-full rounded-2xl border border-leilo-go/30 bg-leilo-go/[0.04] p-6 sm:p-8 shadow-go-glow">
              <h3 className={H3}>{brand(CONTA.answerTitle)}</h3>
              <ul className="mt-6 flex flex-col gap-3.5">
                {CONTA.answers.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-1 font-mono text-sm font-bold text-leilo-go">
                      ✓
                    </span>
                    <span className="text-base font-medium text-white sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2} className="mx-auto mt-10 max-w-2xl md:mt-14">
          <CtaButton href={SIGNUP_URL}>{CONTA.cta}</CtaButton>
        </AnimatedSection>
      </Container>
    </section>
  )
}
