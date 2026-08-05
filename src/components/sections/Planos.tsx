import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { brand } from '../brand'
import { TAG } from '../type'
import { PLANOS, PLANOS_META } from '../../data/landing'
import { SIGNUP_URL } from '../../config/links'

export default function Planos() {
  return (
    <section id="planos" aria-labelledby="planos-heading" className="py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead
          eyebrow={PLANOS_META.eyebrow}
          title={PLANOS_META.title}
          lead={PLANOS_META.note}
          headingId="planos-heading"
        />

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:mt-14 lg:grid-cols-3">
          {PLANOS.map((plan, i) => (
            <AnimatedSection key={plan.id} delay={0.1 * i} className="h-full">
              <div
                className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
                  plan.highlight
                    ? 'border-leilo-go/50 bg-leilo-go/[0.05] shadow-go-glow'
                    : 'border-white/[0.08] bg-leilo-panel/40'
                }`}
              >
                {plan.badge && <p className={`${TAG} text-leilo-go`}>{plan.badge}</p>}
                <h3 className={`font-euro text-2xl font-bold uppercase tracking-tight text-white ${plan.badge ? 'mt-3' : ''}`}>
                  {plan.name}
                </h3>
                <p className="mt-3">
                  <span className="font-mono text-3xl font-bold text-white sm:text-4xl">{plan.price}</span>
                  <span className="ml-1.5 text-sm text-leilo-muted">/mês</span>
                </p>
                <p className="mt-2 font-mono text-sm font-bold text-leilo-go">{plan.perAnalysis}</p>
                <p className="mt-3 text-sm font-medium text-white/85">{plan.quota}</p>
                <p className="mt-2 text-sm leading-relaxed text-leilo-muted">{brand(plan.desc)}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-white/[0.08] pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                      <span aria-hidden="true" className="mt-0.5 font-mono text-xs font-bold text-leilo-go">
                        ✓
                      </span>
                      {brand(f)}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={SIGNUP_URL}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 block rounded-xl px-5 py-4 text-center font-euro text-base font-bold uppercase tracking-wide ${
                    plan.highlight
                      ? 'bg-leilo-go text-leilo-base shadow-go-glow'
                      : 'border border-white/20 text-white hover:border-leilo-go/60'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-leilo-go/30 bg-leilo-go/[0.05] p-6 text-center">
            <p className={`${TAG} text-leilo-go`}>{PLANOS_META.bonusTag}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/85">{brand(PLANOS_META.bonusNote)}</p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-leilo-muted">
            {brand(PLANOS_META.creditsNote)}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  )
}
