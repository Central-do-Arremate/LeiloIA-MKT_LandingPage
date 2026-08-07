import ChapterHead from '../ChapterHead'
import Reveal from '../motion/Reveal'
import RevealGroup, { RevealItem } from '../motion/RevealGroup'
import Container from '../Container'
import { brand } from '../brand'
import { LEAD } from '../type'
import { MEMORIA } from '../../data/landing'

// Rotações fixas por chip — bagunça controlada, igual em todo render.
const CHIP_TILT = ['-rotate-2', 'rotate-1', 'rotate-3', '-rotate-1', 'rotate-2', '-rotate-3', 'rotate-1', '-rotate-2']

export default function Memoria() {
  return (
    <section aria-labelledby="memoria-heading" className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <Container className="relative">
        <ChapterHead eyebrow={MEMORIA.eyebrow} title={MEMORIA.title} headingId="memoria-heading" />

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:mt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <RevealGroup stagger={0.1} className="flex flex-col gap-6">
            {MEMORIA.paragraphs.map((p) => (
              <RevealItem key={p.slice(0, 24)} className={LEAD}>
                {brand(p)}
              </RevealItem>
            ))}
          </RevealGroup>

          {/* As anotações soltas que o produto aposenta.
              Os chips caem um a um: a bagunça se ACUMULANDO na frente do
              leitor é o argumento da seção. Aparecer tudo pronto seria só um
              amontoado; em cascata, é a semana dele. */}
          <Reveal delay={0.15}>
            <div className="relative rounded-2xl border border-dashed border-white/15 p-6 sm:p-8">
              <RevealGroup stagger={0.08} className="flex flex-wrap gap-3">
                {MEMORIA.chips.map((chip, i) => (
                  // A inclinação fica num filho, não no RevealItem: o framer
                  // escreve `transform` inline pra animar o y, e isso apagaria
                  // o `rotate` que vem da classe do Tailwind.
                  <RevealItem key={chip} y={8}>
                    <span
                      className={`inline-block rounded-md border border-white/10 bg-leilo-panel px-3 py-2 font-mono text-xs text-white/60 ${CHIP_TILT[i % CHIP_TILT.length]}`}
                    >
                      {chip}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
              <p className="mt-6 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-leilo-stop/80">
                ── sua memória, três dias depois ──
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
