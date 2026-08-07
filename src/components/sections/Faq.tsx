import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'
import ChapterHead from '../ChapterHead'
import Container from '../Container'
import { brand } from '../brand'
import { FAQ } from '../../data/landing'
import { WHATSAPP_URL } from '../../config/links'

const FAQ_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}).replace(/</g, '\\u003c')

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section aria-labelledby="faq-heading" className="py-16 sm:py-20 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <ChapterHead eyebrow={FAQ.eyebrow} title={FAQ.title} headingId="faq-heading" titleMax="max-w-md" />

          <AnimatedSection delay={0.15} className="mt-8">
            <div className="max-w-md rounded-2xl border border-white/[0.08] bg-leilo-panel/40 p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-white/80">
                Ficou alguma dúvida que não está aqui? Fale com a nossa equipe pelo WhatsApp:
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-xl border border-leilo-go/40 bg-leilo-go/10 py-3.5 text-center font-euro text-base font-bold uppercase tracking-wide text-leilo-go transition-colors hover:bg-leilo-go hover:text-leilo-base"
              >
                Falar com a equipe
              </a>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-col gap-3">
            {FAQ.items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.q} className="rounded-2xl border border-white/[0.08] bg-leilo-panel/40">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-[0.9375rem] font-semibold text-white sm:text-base">{brand(item.q)}</span>
                    <span aria-hidden="true" className="font-mono text-xl font-bold text-leilo-go">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-leilo-muted sm:px-6 sm:text-[0.9375rem]">
                          {brand(item.a)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
