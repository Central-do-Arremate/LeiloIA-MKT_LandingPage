import ChapterHead from '../ChapterHead'
import Reveal from '../motion/Reveal'
import RevealGroup, { RevealItem } from '../motion/RevealGroup'
import Container from '../Container'
import { brand } from '../brand'
import { LEAD, TAG } from '../type'
import { METODO } from '../../data/landing'

export default function Metodo() {
  return (
    <section aria-labelledby="metodo-heading" className="py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={METODO.eyebrow} title={METODO.title} headingId="metodo-heading" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Os parágrafos entram em cascata, um por vez: são três blocos de
              argumento, e vê-los chegar em ordem é ler no ritmo em que foram
              escritos. */}
          <RevealGroup stagger={0.1} className="flex flex-col gap-6">
            {METODO.paragraphs.map((p) => (
              <RevealItem key={p.slice(0, 24)} className={LEAD}>
                {brand(p)}
              </RevealItem>
            ))}
            <RevealItem className="border-l-2 border-leilo-go/60 pl-4 text-sm leading-relaxed text-leilo-muted">
              {brand(METODO.honesty)}
            </RevealItem>
          </RevealGroup>

          <Reveal delay={0.15} className="flex flex-col gap-6">
            {/* Ficha de treinamento — plaqueta de números. Os quatro números
                entram juntos de propósito: é uma plaqueta, uma peça só. */}
            <div className="rounded-2xl border border-white/[0.08] bg-leilo-panel/40">
              <p className={`border-b border-white/[0.08] px-5 py-3.5 ${TAG} text-leilo-go`}>{METODO.fichaTitle}</p>
              <dl className="grid grid-cols-2 divide-x divide-y divide-white/[0.06]">
                {METODO.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`px-5 py-4 ${i < 2 ? '!border-t-0' : ''} ${i % 2 === 0 ? '!border-l-0' : ''}`}
                  >
                    <dt className={`${TAG} text-leilo-muted`}>{s.label}</dt>
                    <dd className="num mt-1.5 text-xl font-bold text-white">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <RevealGroup stagger={0.05} className="rounded-2xl border border-white/[0.08] bg-leilo-panel/40 p-5 sm:p-6">
              <p className={`${TAG} text-leilo-muted`}>{METODO.fontesTitle}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {METODO.fontes.map((f) => (
                  <RevealItem key={f} as="li" y={8} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span aria-hidden="true" className="mt-[0.4rem] h-1 w-3 flex-shrink-0 bg-leilo-go/70" />
                    {f}
                  </RevealItem>
                ))}
              </ul>
            </RevealGroup>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
