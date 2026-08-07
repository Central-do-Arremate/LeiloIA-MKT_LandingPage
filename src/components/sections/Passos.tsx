import ChapterHead from '../ChapterHead'
import Reveal from '../motion/Reveal'
import RevealGroup, { RevealItem } from '../motion/RevealGroup'
import Container from '../Container'
import LaudoMock from '../LaudoMock'
import { brand } from '../brand'
import { BODY, H3, TAG } from '../type'
import { PASSOS } from '../../data/landing'

export default function Passos() {
  return (
    <section id="como-funciona" aria-labelledby="passos-heading" className="py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={PASSOS.eyebrow} title={PASSOS.title} headingId="passos-heading" />

        {/* Trilho cronometrado à esquerda, o que sai dele à direita — assim os
            três passos e o laudo ficam na mesma leitura, não em dois blocos. */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <div>
            {/* Stagger mais lento aqui (120ms) que no resto da página. Estes
                três passos são uma sequência cronometrada de verdade — 00:00,
                00:08, 00:52 —, então a cascata está encenando a ordem em que
                as coisas acontecem, não decorando uma lista. */}
            <RevealGroup stagger={0.12}>
              <ol className="relative flex flex-col gap-7">
                {/* Trilho vertical ligando os carimbos de tempo. */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-8 left-[0.4375rem] top-4 w-px bg-gradient-to-b from-leilo-go/50 to-leilo-go/10"
                />
                {PASSOS.timed.map((step) => (
                  <RevealItem key={step.stamp} as="li" y={14} className="relative pl-7">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-2.5 h-[0.875rem] w-[0.875rem] rounded-full border-2 border-leilo-go bg-leilo-panel"
                    />
                    <p className="font-mono text-xl font-bold text-leilo-go sm:text-2xl">{step.stamp}</p>
                    <h3 className={`mt-2 ${H3}`}>{brand(step.title)}</h3>
                    <p className={`mt-2 max-w-md ${BODY}`}>{brand(step.body)}</p>
                  </RevealItem>
                ))}
              </ol>
            </RevealGroup>

            <Reveal delay={0.3} className="mt-8 flex items-center gap-4">
              <span aria-hidden="true" className="h-px flex-1 bg-leilo-go/40" />
              <p className="rounded-full border border-leilo-go/50 bg-leilo-go/10 px-4 py-1.5 font-mono text-sm font-bold text-leilo-go">
                {PASSOS.checkpoint}
              </p>
              <span aria-hidden="true" className="h-px flex-1 bg-leilo-go/40" />
            </Reveal>
          </div>

          {/* top-24 = 6rem, a altura do cabeçalho fixo: sem isso o laudo gruda
              embaixo dele em vez de ao lado do trilho. */}
          <Reveal delay={0.2} className="lg:sticky lg:top-24 lg:self-start">
            <LaudoMock />
            <p className="mt-3 text-xs leading-relaxed text-leilo-muted">
              Representação da estrutura de uma avaliação. Os valores aparecem na plataforma, com os dados do lote real.
            </p>
          </Reveal>
        </div>

        {/* Depois do cronômetro — sem pressa, quando precisar. */}
        <div className="mt-12 md:mt-16">
          <Reveal>
            <p className={`${TAG} text-leilo-muted`}>{PASSOS.untimedTag}</p>
          </Reveal>
          <RevealGroup delay={0.1} className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PASSOS.untimed.map((step) => (
              <RevealItem key={step.title} className="rounded-2xl border border-white/[0.06] p-6">
                <h3 className={H3}>{step.title}</h3>
                <p className={`mt-2.5 ${BODY}`}>{step.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  )
}
