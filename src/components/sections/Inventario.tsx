import ChapterHead from '../ChapterHead'
import Container from '../Container'
import RevealGroup, { RevealItem } from '../motion/RevealGroup'
import { brand } from '../brand'
import { BODY, H3, TAG } from '../type'
import { INVENTARIO } from '../../data/landing'

/**
 * O que entra na assinatura — a lista de carga.
 *
 * Estava comentado no App.tsx. Numa página de vendas, a lista do que se
 * recebe é peça central e vem logo antes do preço: o leitor precisa saber o
 * que está comprando antes de ver quanto custa.
 *
 * Desenhado como manifesto, não como grade de nove cartões. As nove
 * referências REF.01–REF.09 já existiam na copy e são um motivo de catálogo de
 * peças — uma lista com filete entre as linhas lê como romaneio conferido,
 * que é o registro de máquina do resto da página. Nove cartões arredondados
 * leriam como qualquer grade de features de qualquer SaaS.
 */
export default function Inventario() {
  return (
    <section aria-labelledby="inventario-heading" className="py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={INVENTARIO.eyebrow} title={INVENTARIO.title} headingId="inventario-heading" />

        <RevealGroup className="mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-leilo-panel/30 md:mt-14">
          <ul className="divide-y divide-white/[0.06]">
            {INVENTARIO.items.map((item) => (
              <RevealItem key={item.ref} as="li" y={10}>
                <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6 sm:px-7 sm:py-5">
                  <p className={`${TAG} shrink-0 text-leilo-go sm:w-20`}>{item.ref}</p>
                  <h3 className={`${H3} shrink-0 sm:w-64`}>{brand(item.name)}</h3>
                  <p className={`${BODY} sm:flex-1`}>{brand(item.desc)}</p>
                </div>
              </RevealItem>
            ))}
          </ul>
        </RevealGroup>
      </Container>
    </section>
  )
}
