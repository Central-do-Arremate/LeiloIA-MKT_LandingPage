import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { brand } from '../brand'
import { LEAD, TAG } from '../type'
import { LEO } from '../../data/landing'

export default function Leo() {
  return (
    <section aria-labelledby="leo-heading" className="py-16 sm:py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <AnimatedSection className="flex flex-col gap-6">
            {LEO.portrait ? (
              /* PNG/AVIF recortado: sem fundo próprio, então o painel escuro
                 atrás é que dá o enquadramento. */
              <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] bg-leilo-panel/40">
                <img
                  draggable={false}
                  src={LEO.portrait}
                  alt="Leonardo Ribeiro, especialista em leilão automotivo"
                  loading="lazy"
                  width={555}
                  height={795}
                  className="w-full"
                />
              </div>
            ) : (
              /* Slot do retrato — deliberadamente vazio até termos a foto real. */
              <div className="grid aspect-[4/5] w-full max-w-sm place-items-center rounded-2xl border border-white/[0.08] bg-leilo-panel/40">
                <div className="text-center">
                  <p className="font-euro text-6xl font-bold text-leilo-go">LR</p>
                  <p className={`mt-3 ${TAG} text-leilo-muted`}>Leonardo Ribeiro</p>
                </div>
              </div>
            )}

            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] max-w-sm">
              {LEO.milestones.map((m) => (
                <div key={m.label} className="bg-leilo-panel/70 px-4 py-3.5">
                  <dt className={`${TAG} text-leilo-muted`}>{m.label}</dt>
                  <dd className="mt-1 font-mono text-base font-bold text-white">{m.value}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>

          <div>
            <ChapterHead eyebrow={LEO.eyebrow} title={LEO.title} headingId="leo-heading" titleMax="max-w-2xl" />
            <AnimatedSection delay={0.15} className="mt-8 flex flex-col gap-5">
              {LEO.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className={LEAD}>
                  {brand(p)}
                </p>
              ))}
              <p className={`mt-2 ${TAG} text-leilo-go`}>{LEO.signoff}</p>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  )
}
