import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import CtaButton from '../CtaButton'
import { FECHAMENTO } from '../../data/landing'
import { SIGNUP_URL } from '../../config/links'

export default function Fechamento() {
  return (
    <section aria-labelledby="fechamento-heading" className="py-16 sm:py-20 md:py-24">
      <Container className="max-w-4xl">
        <ChapterHead
          eyebrow={FECHAMENTO.eyebrow}
          title={FECHAMENTO.title}
          lead={FECHAMENTO.lead}
          headingId="fechamento-heading"
        />

        <AnimatedSection delay={0.1} className="mt-10">
          <ul className="flex flex-col gap-3">
            {FECHAMENTO.costs.map((cost) => (
              <li key={cost} className="flex items-start gap-3 text-base text-white/85 sm:text-lg">
                <span aria-hidden="true" className="mt-1 font-mono text-sm font-bold text-leilo-stop">
                  −
                </span>
                {cost}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10">
          <p className="text-lg font-semibold leading-relaxed text-white sm:text-xl">{FECHAMENTO.punchline}</p>
          <div className="mt-8 max-w-2xl">
            <CtaButton href="#planos" variant="ghost">
              Ver os planos de novo ↑
            </CtaButton>
            <CtaButton href={SIGNUP_URL} className="mt-3">
              Escolher meu plano e começar
            </CtaButton>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
