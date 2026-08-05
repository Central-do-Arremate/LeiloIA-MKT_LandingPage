import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { BODY, TAG } from '../type'
import { SNIPER } from '../../data/landing'

export default function Sniper() {
  return (
    <section aria-labelledby="sniper-heading" className="bg-leilo-base py-16 sm:py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <ChapterHead eyebrow={SNIPER.eyebrow} title={SNIPER.title} lead={SNIPER.lead} headingId="sniper-heading" />
            <AnimatedSection delay={0.15} className="mt-6">
              <p className={BODY}>{SNIPER.body}</p>
              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {SNIPER.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span aria-hidden="true" className="mt-[0.4rem] h-1 w-3 flex-shrink-0 bg-leilo-go/70" />
                    {t}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Mock de conversa — a promessa demonstrada, não descrita. */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl border border-white/[0.08] bg-leilo-panel/40">
              <div className="flex items-center gap-2.5 border-b border-white/[0.08] px-5 py-3.5">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-leilo-go animate-pulse-green" />
                <p className={`${TAG} text-white/70`}>Agente SNIPER — online</p>
              </div>
              <div className="flex flex-col gap-4 p-5 sm:p-6">
                <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-white/10 px-4 py-3 text-sm leading-relaxed text-white">
                  {SNIPER.chatQuestion}
                </p>
                <p className="max-w-[90%] rounded-2xl rounded-bl-md border border-leilo-go/25 bg-leilo-go/[0.07] px-4 py-3 text-sm leading-relaxed text-white/90">
                  {SNIPER.chatAnswer}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
