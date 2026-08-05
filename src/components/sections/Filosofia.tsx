import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { brand } from '../brand'
import { LEAD } from '../type'
import { FILOSOFIA } from '../../data/landing'

export default function Filosofia() {
  return (
    <section aria-labelledby="filosofia-heading" className="py-16 sm:py-20 md:py-24">
      <Container className="max-w-4xl">
        <ChapterHead eyebrow={FILOSOFIA.eyebrow} title={FILOSOFIA.title} headingId="filosofia-heading" />

        <AnimatedSection delay={0.1} className="mt-10 md:mt-12">
          <ul className="flex flex-col divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/[0.08] bg-leilo-panel/40">
            {FILOSOFIA.analogies.map((a) => (
              <li key={a.tool} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="w-36 flex-shrink-0 font-euro text-lg font-bold uppercase text-leilo-go">{a.tool}</span>
                <span className="text-[0.9375rem] text-white/85 sm:text-base">{a.who}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-8 flex flex-col gap-5">
          <p className={LEAD}>{brand(FILOSOFIA.body)}</p>
          <p className="font-euro text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
            {brand(FILOSOFIA.punchline)}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  )
}
