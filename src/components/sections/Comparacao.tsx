import ChapterHead from '../ChapterHead'
import RevealGroup, { RevealItem } from '../motion/RevealGroup'
import Container from '../Container'
import { brand } from '../brand'
import { TAG } from '../type'
import { COMPARACAO } from '../../data/landing'

export default function Comparacao() {
  return (
    <section aria-labelledby="comparacao-heading" className="py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={COMPARACAO.eyebrow} title={COMPARACAO.title} headingId="comparacao-heading" />

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-2 lg:gap-8">
          {/* As duas colunas descem em cascata, item a item. Aqui a cascata
              não é enfeite: os dois lados têm oito linhas cada, e ver a lista
              vermelha se empilhando é o argumento da seção acontecendo em
              tempo real. O lado verde entra depois (delay), na ordem em que a
              página quer que se leia. */}
          <RevealGroup>
            <div className="h-full rounded-2xl border border-leilo-stop/25 bg-leilo-stop/[0.04] p-6 sm:p-8">
              <p className={`${TAG} text-leilo-stop`}>{COMPARACAO.sem.tag}</p>
              <ul className="mt-6 flex flex-col gap-3.5">
                {COMPARACAO.sem.items.map((item) => (
                  <RevealItem
                    key={item}
                    as="li"
                    y={10}
                    className="flex items-start gap-3 text-[0.9375rem] text-white/75 sm:text-base"
                  >
                    <span aria-hidden="true" className="mt-0.5 font-mono text-xs font-bold text-leilo-stop">
                      ✕
                    </span>
                    {item}
                  </RevealItem>
                ))}
              </ul>
            </div>
          </RevealGroup>

          <RevealGroup delay={0.25}>
            <div className="h-full rounded-2xl border border-leilo-go/30 bg-leilo-go/[0.04] p-6 shadow-go-glow sm:p-8">
              <p className={`${TAG} text-leilo-go`}>{brand(COMPARACAO.com.tag)}</p>
              <ul className="mt-6 flex flex-col gap-3.5">
                {COMPARACAO.com.items.map((item) => (
                  <RevealItem
                    key={item}
                    as="li"
                    y={10}
                    className="flex items-start gap-3 text-[0.9375rem] font-medium text-white sm:text-base"
                  >
                    <span aria-hidden="true" className="mt-0.5 font-mono text-xs font-bold text-leilo-go">
                      ✓
                    </span>
                    {item}
                  </RevealItem>
                ))}
              </ul>
            </div>
          </RevealGroup>
        </div>
      </Container>
    </section>
  )
}
