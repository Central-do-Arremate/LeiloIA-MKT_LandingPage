import ChapterHead from '../ChapterHead'
import Container from '../Container'
import Reveal from '../motion/Reveal'
import RevealGroup, { RevealItem } from '../motion/RevealGroup'
import CtaButton from '../CtaButton'
import TetoLine from '../chrome/TetoLine'
import { brand } from '../brand'
import { TAG } from '../type'
import { PLANOS, PLANOS_META } from '../../data/landing'
import { SIGNUP_URL } from '../../config/links'
import { OFFER, brl, discountedCents } from '../../config/offer'

export default function Planos() {
  return (
    <section id="planos" aria-labelledby="planos-heading" className="py-16 sm:py-20 md:py-24">
      {/* A Linha do Teto com as zonas — é aqui que a página está falando de
          dinheiro de verdade, então é aqui que prejuízo e lucro ganham nome. */}
      <TetoLine
        tag="Abaixo do teto, o negócio fecha"
        tagSide="left"
        zones={{ above: 'Acima do teto — prejuízo', below: 'Abaixo do teto — lucro' }}
        className="mb-16 sm:mb-20"
      />

      <Container>
        <ChapterHead
          eyebrow={PLANOS_META.eyebrow}
          title={PLANOS_META.title}
          lead={PLANOS_META.note}
          headingId="planos-heading"
        />

        <RevealGroup className="mt-10 grid grid-cols-1 items-stretch gap-6 md:mt-14 lg:grid-cols-3">
          {PLANOS.map((plan) => {
            const first = discountedCents(plan.priceCents, OFFER.percentOff)

            return (
              <RevealItem key={plan.id} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
                    plan.highlight
                      ? 'border-leilo-go/50 bg-leilo-go/[0.05] shadow-go-glow'
                      : 'border-white/[0.08] bg-leilo-panel/40'
                  }`}
                >
                  {plan.badge && <p className={`${TAG} text-leilo-go`}>{plan.badge}</p>}
                  <h3
                    className={`font-euro text-2xl font-bold uppercase tracking-tight text-white ${
                      plan.badge ? 'mt-3' : ''
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* O preço com cupom é o número grande, o cheio fica riscado
                      ao lado — e logo abaixo o escopo, porque desconto de
                      primeiro mês sem dizer "primeiro mês" é preço que sobe
                      sozinho no mês 2. */}
                  <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
                    <span className="num text-3xl font-bold text-white sm:text-4xl">{brl(first)}</span>
                    <span className="text-sm text-leilo-muted">/mês</span>
                    <s className="num text-sm text-white/35 decoration-leilo-stop/60">{plan.price}</s>
                  </p>
                  <p className={`mt-1.5 ${TAG} text-leilo-go`}>
                    {OFFER.percentOff}% off {OFFER.durationLabel}
                  </p>

                  <p className="mt-3 text-sm font-medium text-white/85">{plan.quota}</p>
                  <p className="num mt-1 text-xs text-leilo-muted">{plan.perAnalysis}</p>
                  <p className="mt-3 text-sm leading-relaxed text-leilo-muted">{brand(plan.desc)}</p>

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

                  <CtaButton
                    href={SIGNUP_URL}
                    variant={plan.highlight ? 'solid' : 'ghost'}
                    dataCta="plano"
                    plan={plan.id}
                    className="mt-8 !rounded-xl !px-5 !py-4 !text-base"
                  >
                    {plan.cta}
                  </CtaButton>

                  {/* A disclosure anda junto do botão, no mesmo tamanho do
                      resto da letra miúda do card — não menor. É a mesma frase
                      que o app mostra no checkout. */}
                  <p className="mt-3 text-center text-xs leading-relaxed text-leilo-muted">
                    Depois {plan.price} por mês, cobrado automaticamente. Sem fidelidade.
                  </p>
                </div>
              </RevealItem>
            )
          })}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-leilo-go/30 bg-leilo-go/[0.05] p-6 text-center">
            <p className={`${TAG} text-leilo-go`}>{PLANOS_META.bonusTag}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/85">{brand(PLANOS_META.bonusNote)}</p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-leilo-muted">
            {brand(PLANOS_META.creditsNote)}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
