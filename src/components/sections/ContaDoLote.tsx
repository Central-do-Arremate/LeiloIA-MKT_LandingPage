import ChapterHead from '../ChapterHead'
import Reveal from '../motion/Reveal'
import RevealGroup, { RevealItem } from '../motion/RevealGroup'
import Container from '../Container'
import CtaButton from '../CtaButton'
import DamageShot from '../DamageShot'
import { brand } from '../brand'
import { H3, TAG } from '../type'
import { CONTA } from '../../data/landing'
import { SIGNUP_URL } from '../../config/links'

export default function ContaDoLote() {
  return (
    <section aria-labelledby="conta-heading" className="py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={CONTA.eyebrow} title={CONTA.title} lead={CONTA.lead} headingId="conta-heading" />

        {/* Foto do lote ao lado da conta: o argumento fica lado a lado com a
            evidência dele — cada ponto marcado na lataria vira linha da lista. */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-2 lg:gap-8">
          <Reveal delay={0.05}>
            <DamageShot />
          </Reveal>

          {/* A conta que ninguém faz inteira — lado do problema, sem verde.
              A cascata é o custo se acumulando linha a linha: é o argumento da
              seção acontecendo, não uma lista aparecendo. */}
          <RevealGroup delay={0.05}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-leilo-panel/40 p-6 sm:p-8">
              <p className={`${TAG} text-leilo-stop`}>{CONTA.ledgerTitle}</p>
              <ul className="mt-6 flex flex-col gap-4">
                {CONTA.ledger.map((item) => (
                  <RevealItem
                    key={item}
                    as="li"
                    y={10}
                    className="flex items-start gap-3 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0"
                  >
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-leilo-stop/80" />
                    <span className="text-base font-medium text-white/85 sm:text-lg">{item}</span>
                  </RevealItem>
                ))}
              </ul>
              <p className="mt-6 text-sm italic leading-relaxed text-leilo-muted">{CONTA.ledgerNote}</p>
            </div>
          </RevealGroup>
        </div>

        {/* A resposta — lado verde, agora em largura cheia: é a virada da seção. */}
        <RevealGroup delay={0.1} className="mt-6 lg:mt-8">
          <div className="rounded-2xl border border-leilo-go/30 bg-leilo-go/[0.04] p-6 shadow-go-glow sm:p-8">
            <h3 className={H3}>{brand(CONTA.answerTitle)}</h3>
            <ul className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-x-8">
              {CONTA.answers.map((item) => (
                <RevealItem key={item} as="li" y={10} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 font-mono text-sm font-bold text-leilo-go">
                    ✓
                  </span>
                  <span className="text-base font-medium text-white sm:text-lg">{item}</span>
                </RevealItem>
              ))}
            </ul>
          </div>
        </RevealGroup>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl md:mt-14">
          <CtaButton href={SIGNUP_URL} dataCta="conta-do-lote">
            {CONTA.cta}
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  )
}
