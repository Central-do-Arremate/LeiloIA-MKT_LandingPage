import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { brand } from '../brand'
import { LEAD } from '../type'
import { MEMORIA } from '../../data/landing'

// Rotações fixas por chip — bagunça controlada, igual em todo render.
const CHIP_TILT = ['-rotate-2', 'rotate-1', 'rotate-3', '-rotate-1', 'rotate-2', '-rotate-3', 'rotate-1', '-rotate-2']

export default function Memoria() {
  return (
    <section aria-labelledby="memoria-heading" className="relative overflow-hidden bg-leilo-section py-16 sm:py-20 md:py-24">
      <Container className="relative">
        <ChapterHead eyebrow={MEMORIA.eyebrow} title={MEMORIA.title} headingId="memoria-heading" />

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:mt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <AnimatedSection delay={0.1} className="flex flex-col gap-6">
            {MEMORIA.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className={LEAD}>
                {brand(p)}
              </p>
            ))}
          </AnimatedSection>

          {/* As anotações soltas que o produto aposenta. */}
          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl border border-dashed border-white/15 p-6 sm:p-8">
              <div className="flex flex-wrap gap-3">
                {MEMORIA.chips.map((chip, i) => (
                  <span
                    key={chip}
                    className={`inline-block rounded-md border border-white/10 bg-leilo-panel px-3 py-2 font-mono text-xs text-white/60 ${CHIP_TILT[i % CHIP_TILT.length]}`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-leilo-stop/80">
                ── sua memória, três dias depois ──
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
