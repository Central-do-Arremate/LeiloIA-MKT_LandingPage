import { motion } from 'framer-motion'
import Container from '../Container'
import CtaButton from '../CtaButton'
import Ticker from '../Ticker'
import { TAG } from '../type'
import { brand } from '../brand'
import { HERO, TICKER_ITEMS } from '../../data/landing'
import { LEILOIA_URL } from '../../config/campaign'
import { SIGNUP_URL } from '../../config/links'

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-leilo-base pt-12 sm:pt-16 md:pt-20">
      {/* Glow de assinatura — sem imagem de fundo: a identidade aqui é luz + tipografia. */}
      <div className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-leilo-go/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-leilo-go/10 to-transparent" />

      <Container className="relative flex flex-col items-center pb-12 sm:pb-16">
        {/* Wordmark oficial (LOGOS-AVIF). Fundo é sempre escuro aqui, então a
            versão branca é a única que precisa existir na LP. Clicável: leva
            pra plataforma, igual ao logo do footer. */}
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          href={LEILOIA_URL}
          aria-label="Ir para a plataforma LeiloIA"
          className="mb-8 inline-block"
        >
          <img
            src="/assets/LOGO-GREENWHITE-tosize.avif"
            alt="LeiloIA"
            width={640}
            height={160}
            className="h-10 w-auto transition-opacity hover:opacity-80 sm:h-12"
          />
        </motion.a>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 rounded-full border border-leilo-go/40 bg-leilo-go/10 px-4 py-2 ${TAG} text-leilo-go`}
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-leilo-go animate-pulse-green" />
          {brand(HERO.eyebrow)}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-center font-euro text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          {HERO.h1Lines.map((line, i) => (
            <span key={line} className={`block text-balance ${i === HERO.greenLine ? 'text-leilo-go' : ''}`}>
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-3xl text-center text-base leading-relaxed text-white/85 sm:text-lg md:text-xl"
        >
          {brand(HERO.lead)}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 max-w-2xl text-center text-sm font-medium text-leilo-muted sm:text-base"
        >
          {brand(HERO.sub)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex w-full max-w-2xl flex-col gap-3 md:mt-10"
        >
          <CtaButton href={SIGNUP_URL}>{HERO.ctaPrimary}</CtaButton>
          <a
            href="#como-funciona"
            className="py-2 text-center text-sm font-semibold uppercase tracking-wider text-white/60 transition-colors hover:text-leilo-go"
          >
            {HERO.ctaSecondary} ↓
          </a>
        </motion.div>

      </Container>

      <Ticker items={TICKER_ITEMS} label="Destaques da LeiloIA" />
    </header>
  )
}
