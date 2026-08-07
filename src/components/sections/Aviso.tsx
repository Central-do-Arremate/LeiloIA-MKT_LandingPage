import Reveal from '../motion/Reveal'
import RevealGroup, { RevealItem } from '../motion/RevealGroup'
import Container from '../Container'
import { brand } from '../brand'
import { H2, TAG } from '../type'
import { AVISO } from '../../data/landing'

export default function Aviso() {
  return (
    <section aria-labelledby="aviso-heading" className="py-16 sm:py-20 md:py-24">
      <Container className="max-w-4xl">
        <Reveal>
          <div className="rounded-2xl border border-white/15 p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className={`${TAG} text-leilo-stop`}>{AVISO.header}</p>
              {/* Carimbo — o compromisso da página inteira num selo. */}
              <p className={`rounded border border-leilo-go/50 px-3 py-1.5 ${TAG} -rotate-2 text-leilo-go`}>
                {AVISO.stamp}
              </p>
            </div>

            <h2 id="aviso-heading" className={`mt-6 ${H2}`}>
              {brand(AVISO.title)}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85">{AVISO.intro}</p>

            {/* Cascata curta e rápida aqui. É uma lista de cuidados, não uma
                vitrine: o ritmo serve pra dar peso a cada item, e um stagger
                lento faria a seção do risco parecer publicidade. */}
            <RevealGroup stagger={0.04} className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {AVISO.items.map((item) => (
                <RevealItem key={item} y={8} className="flex items-start gap-2.5 text-sm text-white/80">
                  <span aria-hidden="true" className="mt-[0.4rem] h-1 w-3 flex-shrink-0 bg-leilo-go/70" />
                  {brand(item)}
                </RevealItem>
              ))}
            </RevealGroup>

            <p className="mt-8 border-t border-white/[0.08] pt-6 text-sm leading-relaxed text-leilo-muted">
              {AVISO.footer}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
