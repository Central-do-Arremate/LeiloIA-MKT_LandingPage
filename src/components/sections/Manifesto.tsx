import AnimatedSection from '../AnimatedSection'
import Container from '../Container'
import Eyebrow from '../Eyebrow'
import { LEAD } from '../type'
import { MANIFESTO } from '../../data/landing'

export default function Manifesto() {
  return (
    <section aria-label="Manifesto" className="bg-leilo-section py-16 sm:py-20 md:py-24">
      <Container className="max-w-4xl">
        <AnimatedSection>
          <Eyebrow>{MANIFESTO.eyebrow}</Eyebrow>
          <p className={`mt-6 ${LEAD}`}>{MANIFESTO.intro}</p>
        </AnimatedSection>

        <div className="mt-10 flex flex-col gap-3 md:mt-12">
          {MANIFESTO.lines.map((line, i) => (
            <AnimatedSection key={line} delay={0.08 * i}>
              <p className="font-euro text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                {/* Primeira palavra em verde: o substantivo é a promessa. */}
                <span className="text-leilo-go">{line.split(' ')[0]}</span> {line.split(' ').slice(1).join(' ')}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
