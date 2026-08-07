import ChapterHead from '../ChapterHead'
import Reveal from '../motion/Reveal'
import RevealGroup, { RevealItem } from '../motion/RevealGroup'
import Container from '../Container'
import CtaButton from '../CtaButton'
import { TAG } from '../type'
import { PERFIS } from '../../data/landing'
import { SIGNUP_URL } from '../../config/links'

/**
 * Cada perfil tem oito linhas de reconhecimento ("ainda não se sente seguro",
 * "perde horas pesquisando peças"). A cascata dá ao leitor o tempo de se
 * reconhecer numa antes da próxima chegar — despejar as oito de uma vez
 * transforma o espelho numa parede de texto.
 */
function PerfilCard({ tag, items, delay }: { tag: string; items: string[]; delay: number }) {
  return (
    <RevealGroup delay={delay}>
      <div className="h-full rounded-2xl border border-white/[0.08] bg-leilo-panel/40 p-6 sm:p-8">
        <p
          className={`inline-block rounded-full border border-leilo-go/40 bg-leilo-go/10 px-3.5 py-1.5 ${TAG} text-leilo-go`}
        >
          {tag}
        </p>
        <ul className="mt-6 flex flex-col gap-3">
          {items.map((item) => (
            <RevealItem
              key={item}
              as="li"
              y={10}
              className="flex items-start gap-3 text-[0.9375rem] text-white/85 sm:text-base"
            >
              <span aria-hidden="true" className="mt-1 font-mono text-xs font-bold text-leilo-go">
                ✓
              </span>
              {item}
            </RevealItem>
          ))}
        </ul>
      </div>
    </RevealGroup>
  )
}

export default function Perfis() {
  return (
    <section aria-labelledby="perfis-heading" className="py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={PERFIS.eyebrow} title={PERFIS.title} headingId="perfis-heading" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-2 lg:gap-8">
          <PerfilCard tag={PERFIS.iniciante.tag} items={PERFIS.iniciante.items} delay={0} />
          <PerfilCard tag={PERFIS.profissional.tag} items={PERFIS.profissional.items} delay={0.2} />
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center md:mt-14">
          <CtaButton href={SIGNUP_URL} className="max-w-md" dataCta="perfis">
            {PERFIS.cta}
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  )
}
