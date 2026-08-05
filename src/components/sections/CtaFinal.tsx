import AnimatedSection from '../AnimatedSection'
import Container from '../Container'
import CtaButton from '../CtaButton'
import { brand } from '../brand'
import { H2 } from '../type'
import { CTA_FINAL } from '../../data/landing'
import { SIGNUP_URL } from '../../config/links'

export default function CtaFinal() {
  return (
    <section aria-labelledby="cta-final-heading" className="relative overflow-hidden bg-leilo-section py-20 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute -bottom-48 left-1/2 h-96 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-leilo-go/10 blur-[140px]" />

      <Container className="relative flex max-w-3xl flex-col items-center text-center">
        <AnimatedSection>
          <h2 id="cta-final-heading" className={H2}>
            {CTA_FINAL.title}
          </h2>
          <div className="mt-5 flex flex-col gap-1">
            {CTA_FINAL.lines.map((line) => (
              <p key={line} className="text-base font-medium text-white/75 sm:text-lg">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">{CTA_FINAL.body}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-10 w-full max-w-xl">
          {/* No botão o verde da marca não cabe: o próprio botão já é verde. */}
          <CtaButton href={SIGNUP_URL}>{CTA_FINAL.cta}</CtaButton>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-leilo-muted">{brand(CTA_FINAL.tagline)}</p>
        </AnimatedSection>
      </Container>
    </section>
  )
}
