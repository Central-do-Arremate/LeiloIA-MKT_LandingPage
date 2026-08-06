import { lazy, Suspense, type ComponentType } from 'react'
import Hero from './components/sections/Hero'
import Footer from './components/Footer'
import CampaignWall from './components/CampaignWall'
import MobileCtaBar from './components/MobileCtaBar'
import PhotoBand from './components/PhotoBand'
import ScrollBackdrop from './components/ScrollBackdrop'
import { CAMPAIGN_DISABLED } from './config/campaign'
import { TONE } from './config/tones'

const ContaDoLote = lazy(() => import('./components/sections/ContaDoLote'))
const Metodo = lazy(() => import('./components/sections/Metodo'))
const Passos = lazy(() => import('./components/sections/Passos'))
const Perfis = lazy(() => import('./components/sections/Perfis'))
const Memoria = lazy(() => import('./components/sections/Memoria'))
const Sniper = lazy(() => import('./components/sections/Sniper'))
// const Inventario = lazy(() => import('./components/sections/Inventario'))
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

/**
 * A ordem da página, com o tom que cada capítulo empresta ao fundo. O tom vale
 * cheio no centro da seção; a virada entre dois tons cai no meio do caminho —
 * é isso que faz a troca ler como escala e não como emenda. Ver config/tones.
 */
const SECTIONS: { Component: ComponentType; tone: string; band?: ComponentType }[] = [
  { Component: ContaDoLote, tone: TONE.custo },
  { Component: Metodo, tone: TONE.metodo },
  { Component: Passos, tone: TONE.processo },
  { Component: Perfis, tone: TONE.publico },
  { Component: Memoria, tone: TONE.ruido },
  { Component: Sniper, tone: TONE.agente },
  // { Component: Inventario, tone: TONE.entrega },
  { Component: Planos, tone: TONE.oferta },
  { Component: Confianca, tone: TONE.prova },
  { Component: Resultados, tone: TONE.resultado },
  { Component: Leo, tone: TONE.autor, band: LeoBand },
  { Component: Filosofia, tone: TONE.limite },
  { Component: Comparacao, tone: TONE.contraste },
  { Component: DoisLados, tone: TONE.lados },
  { Component: Faq, tone: TONE.duvida },
  { Component: Aviso, tone: TONE.alerta },
  { Component: Manifesto, tone: TONE.virada },
  { Component: Fechamento, tone: TONE.fechamento },
  { Component: CtaFinal, tone: TONE.climax },
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
  if (CAMPAIGN_DISABLED) {
    return <CampaignWall />
  }

  return (
    <>
      <ScrollBackdrop />

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
        {SECTIONS.map(({ Component, tone, band: Band }, i) => (
          <div key={i} data-tone={tone}>
            {Band && <Band />}
            <Suspense fallback={<SectionFallback />}>
              <Component />
            </Suspense>
          </div>
        ))}
      </main>

      <div data-tone={TONE.rodape}>
        <Footer />
      </div>

      <MobileCtaBar />
    </>
  )
}
