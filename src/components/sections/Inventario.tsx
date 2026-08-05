import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { brand } from '../brand'
import { BODY, H3, TAG } from '../type'
import { INVENTARIO } from '../../data/landing'

export default function Inventario() {
  return (
    <section aria-labelledby="inventario-heading" className="py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={INVENTARIO.eyebrow} title={INVENTARIO.title} headingId="inventario-heading" />

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {INVENTARIO.items.map((item, i) => (
            <AnimatedSection key={item.ref} delay={0.05 * (i % 3)}>
              <li className="h-full rounded-2xl border border-white/[0.08] bg-leilo-panel/40 p-6">
                <p className={`${TAG} text-leilo-go`}>{item.ref}</p>
                <h3 className={`mt-3 ${H3}`}>{brand(item.name)}</h3>
                <p className={`mt-2 ${BODY}`}>{brand(item.desc)}</p>
              </li>
            </AnimatedSection>
          ))}
        </ul>
      </Container>
    </section>
  )
}
