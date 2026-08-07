import SplitLines from '../motion/SplitLines'
import Reveal from '../motion/Reveal'
import Container from '../Container'
import { TAG } from '../type'
import type { Act } from '../../config/acts'

/**
 * Abertura de ato.
 *
 * Três camadas, nesta ordem de leitura: o marcador mono (onde estou), a
 * palavra gigante ao fundo (o assunto, sentido antes de lido) e o nome do ato
 * entrando linha a linha.
 *
 * O watermark é `aria-hidden` e fica em `-z-10`: é textura, não conteúdo — o
 * mesmo nome já está no marcador, e um leitor de tela ouvindo "MÉTODO" duas
 * vezes seguidas só perde tempo.
 */
export default function ActOpener({ act }: { act: Act }) {
  return (
    <section aria-labelledby={`ato-${act.n}`} className="relative overflow-hidden pb-4 pt-20 sm:pt-24 md:pt-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[0.12em] left-1/2 -z-10 -translate-x-1/2 select-none font-euro text-[18vw] font-black uppercase leading-none tracking-tighter text-white opacity-[0.035]"
      >
        {act.watermark}
      </span>

      <Container>
        <Reveal y={0}>
          <p className={`flex items-center gap-3 ${TAG} text-leilo-go`}>
            <span aria-hidden="true" className="h-px w-8 bg-leilo-go" />
            <span className="num">Ato {act.n}</span>
            <span aria-hidden="true" className="text-leilo-go/30">
              /
            </span>
            <span className="text-leilo-muted">{act.claim}</span>
          </p>
        </Reveal>

        <SplitLines
          id={`ato-${act.n}`}
          as="h2"
          lines={[act.name]}
          className="mt-5"
          lineClassName="font-euro text-act font-black uppercase text-white"
        />
      </Container>
    </section>
  )
}
