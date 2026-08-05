import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { brand } from '../brand'
import { LEAD, TAG } from '../type'
import { DOIS_LADOS } from '../../data/landing'

export default function DoisLados() {
  return (
    <section aria-labelledby="dois-lados-heading" className="bg-leilo-base py-16 sm:py-20 md:py-24">
      <Container>
        <ChapterHead eyebrow={DOIS_LADOS.eyebrow} title={DOIS_LADOS.title} headingId="dois-lados-heading" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection delay={0.1}>
            <p className={`${TAG} text-leilo-muted`}>O iniciante</p>
            <p className={`mt-4 ${LEAD}`}>{brand(DOIS_LADOS.iniciante)}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className={`${TAG} text-leilo-muted`}>O profissional</p>
            <p className={`mt-4 ${LEAD}`}>{brand(DOIS_LADOS.profissional)}</p>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
