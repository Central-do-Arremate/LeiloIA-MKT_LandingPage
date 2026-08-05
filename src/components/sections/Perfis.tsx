import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { TAG } from '../type'
import { PERFIS } from '../../data/landing'

function PerfilCard({ tag, items, delay }: { tag: string; items: string[]; delay: number }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="h-full rounded-2xl border border-white/[0.08] bg-leilo-panel/40 p-6 sm:p-8">
        <p className={`inline-block rounded-full border border-leilo-go/40 bg-leilo-go/10 px-3.5 py-1.5 ${TAG} text-leilo-go`}>
          {tag}
        </p>
        <ul className="mt-6 flex flex-col gap-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-white/85 sm:text-base">
              <span aria-hidden="true" className="mt-1 font-mono text-xs font-bold text-leilo-go">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  )
}

export default function Perfis() {
  return (
    <section aria-labelledby="perfis-heading" className="bg-leilo-base py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={PERFIS.eyebrow} title={PERFIS.title} headingId="perfis-heading" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-2 lg:gap-8">
          <PerfilCard tag={PERFIS.iniciante.tag} items={PERFIS.iniciante.items} delay={0.1} />
          <PerfilCard tag={PERFIS.profissional.tag} items={PERFIS.profissional.items} delay={0.2} />
        </div>
      </Container>
    </section>
  )
}
