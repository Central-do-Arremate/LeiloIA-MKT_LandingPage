import { lazy, Suspense, useEffect, type ComponentType } from 'react'
import Hero from './components/sections/Hero'
import Footer from './components/Footer'
import CampaignWall from './components/CampaignWall'
import MobileCtaBar from './components/MobileCtaBar'
import PhotoBand from './components/PhotoBand'
import ScrollBackdrop from './components/ScrollBackdrop'
import SiteHeader from './components/chrome/SiteHeader'
import ActOpener from './components/chrome/ActOpener'
import ActTicker from './components/chrome/ActTicker'
import { CAMPAIGN_DISABLED } from './config/campaign'
import { TONE } from './config/tones'
import { ACTS } from './config/acts'
import { enrichSignupLinks } from './lib/tracking'

const ContaDoLote = lazy(() => import('./components/sections/ContaDoLote'))
const Metodo = lazy(() => import('./components/sections/Metodo'))
const Passos = lazy(() => import('./components/sections/Passos'))
const Perfis = lazy(() => import('./components/sections/Perfis'))
const Memoria = lazy(() => import('./components/sections/Memoria'))
const Sniper = lazy(() => import('./components/sections/Sniper'))
const Inventario = lazy(() => import('./components/sections/Inventario'))
const Planos = lazy(() => import('./components/sections/Planos'))
const Confianca = lazy(() => import('./components/sections/Confianca'))
const Resultados = lazy(() => import('./components/sections/Resultados'))
const Leo = lazy(() => import('./components/sections/Leo'))
const Filosofia = lazy(() => import('./components/sections/Filosofia'))
const Comparacao = lazy(() => import('./components/sections/Comparacao'))
const DoisLados = lazy(() => import('./components/sections/DoisLados'))
const Faq = lazy(() => import('./components/sections/Faq'))
const Aviso = lazy(() => import('./components/sections/Aviso'))
const Manifesto = lazy(() => import('./components/sections/Manifesto'))
const Fechamento = lazy(() => import('./components/sections/Fechamento'))
const CtaFinal = lazy(() => import('./components/sections/CtaFinal'))

function SectionFallback() {
  // Só reserva altura: a cor de fundo é do <ScrollBackdrop>, então o
  // placeholder não precisa (e não deve) espelhar cor nenhuma.
  return <div className="h-[60vh] w-full" aria-hidden="true" />
}

interface Section {
  Component: ComponentType
  tone: string
  band?: ComponentType
}

/**
 * A página em cinco atos.
 *
 * Cada seção continua carregando o próprio `data-tone` — o <ScrollBackdrop>
 * segue interpolando o fundo seção a seção, que é o mecanismo mais autoral da
 * identidade. O que os atos acrescentam é a leitura: as mesmas 19 seções agora
 * têm começo, meio e fim visíveis, com abertura e ticker marcando a fronteira.
 *
 * Ordem: os planos saíram do meio da leitura para o ato da oferta, depois da
 * prova (Confiança, Léo, Comparação). Preço antes de autoridade é preço sem
 * contexto. Quem já decidiu tem o CTA fixo no cabeçalho.
 */
const ACT_SECTIONS: Section[][] = [
  // 01 · A conta — o custo que o lance não mostra.
  [
    { Component: ContaDoLote, tone: TONE.custo },
    { Component: Memoria, tone: TONE.ruido },
    { Component: DoisLados, tone: TONE.lados },
  ],
  // 02 · O método — como a LeiloIA chega no número.
  [
    { Component: Metodo, tone: TONE.metodo },
    { Component: Passos, tone: TONE.processo },
    { Component: Sniper, tone: TONE.agente },
    { Component: Filosofia, tone: TONE.limite },
  ],
  // 03 · A prova — de onde vem a autoridade.
  [
    { Component: Confianca, tone: TONE.prova },
    { Component: Leo, tone: TONE.autor, band: LeoBand },
    { Component: Comparacao, tone: TONE.contraste },
    { Component: Resultados, tone: TONE.resultado },
  ],
  // 04 · A oferta — o que você recebe e quanto custa.
  [
    { Component: Perfis, tone: TONE.publico },
    { Component: Inventario, tone: TONE.entrega },
    { Component: Planos, tone: TONE.oferta },
    { Component: Fechamento, tone: TONE.fechamento },
  ],
  // 05 · A decisão — o que ainda pesa antes de assinar.
  [
    { Component: Faq, tone: TONE.duvida },
    { Component: Aviso, tone: TONE.alerta },
    { Component: Manifesto, tone: TONE.virada },
    { Component: CtaFinal, tone: TONE.climax },
  ],
]

/** Respiro fotográfico que abre o capítulo do Léo. */
function LeoBand() {
  return (
    <PhotoBand
      src="/assets/photos/leo-carro-1920.avif"
      srcSmall="/assets/photos/leo-carro-960.avif"
      alt="Leonardo Ribeiro ao lado de um veículo, na rua"
      // A faixa é larga e baixa: sem subir o recorte, o corte come a cabeça dele.
      objectPosition="50% 22%"
      tag="Quem está por trás"
      caption="Sete anos comprando, recuperando e vendendo veículo de leilão — antes de virar plataforma, isso era rotina."
    />
  )
}

export default function App() {
  useEffect(() => {
    // Depois da hidratação, para o href estático do HTML e o do cliente
    // baterem. Ver lib/tracking.
    enrichSignupLinks()
  }, [])

  if (CAMPAIGN_DISABLED) {
    return <CampaignWall />
  }

  return (
    <>
      <ScrollBackdrop />
      <SiteHeader />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-leilo-base"
      >
        Pular para o conteúdo principal
      </a>

      <div data-tone={TONE.abertura}>
        <Hero />
      </div>

      <main id="main-content">
        {ACTS.map((act, actIndex) => (
          <section key={act.n} aria-label={`Ato ${act.n} — ${act.name}`}>
            <ActOpener act={act} />

            {ACT_SECTIONS[actIndex].map(({ Component, tone, band: Band }, i) => (
              <div key={i} data-tone={tone}>
                {Band && <Band />}
                <Suspense fallback={<SectionFallback />}>
                  <Component />
                </Suspense>
              </div>
            ))}

            {/* O ticker fecha o ato. Verde cheio nos atos que afirmam; hairline
                nos que falam de custo e de risco, onde gritar seria errado. */}
            <ActTicker
              items={act.ticker}
              label={`Destaques do ato ${act.n}`}
              variant={act.n === '01' || act.n === '05' ? 'line' : 'go'}
            />
          </section>
        ))}
      </main>

      <div data-tone={TONE.rodape}>
        <Footer />
      </div>

      <MobileCtaBar />
    </>
  )
}
