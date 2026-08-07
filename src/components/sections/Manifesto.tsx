import Reveal from '../motion/Reveal'
import RevealGroup, { RevealItem } from '../motion/RevealGroup'
import Container from '../Container'
import Eyebrow from '../Eyebrow'
import { LEAD } from '../type'
import { MANIFESTO } from '../../data/landing'

export default function Manifesto() {
  return (
    <section aria-label="Manifesto" className="py-16 sm:py-20 md:py-24">
      <Container className="max-w-4xl">
        <Reveal>
          <Eyebrow>{MANIFESTO.eyebrow}</Eyebrow>
          <p className={`mt-6 ${LEAD}`}>{MANIFESTO.intro}</p>
        </Reveal>

        {/* Stagger o mais lento da página (140ms). Antes cada linha era um
            reveal solto com delay por índice, o que fazia as quatro dispararem
            quase juntas quando entravam na tela — o escalonamento existia no
            código e não na leitura. Orquestradas, as quatro declarações chegam
            uma por vez, que é como um manifesto se lê. */}
        <RevealGroup stagger={0.14} className="mt-10 flex flex-col gap-3 md:mt-12">
          {MANIFESTO.lines.map((line) => (
            <RevealItem
              key={line}
              y={20}
              className="font-euro text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              {/* Primeira palavra em verde: o substantivo é a promessa. */}
              <span className="text-leilo-go">{line.split(' ')[0]}</span> {line.split(' ').slice(1).join(' ')}
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
