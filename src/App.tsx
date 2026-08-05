import { lazy, Suspense, type ComponentType } from 'react'
import Hero from './components/sections/Hero'
import Footer from './components/Footer'
import CampaignWall from './components/CampaignWall'
import MobileCtaBar from './components/MobileCtaBar'
import { CAMPAIGN_DISABLED } from './config/campaign'

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

function SectionFallback({ bg }: { bg: string }) {
  return <div className={`h-[60vh] w-full ${bg}`} aria-hidden="true" />
}

// A página alterna leilo-section / leilo-base; cada fallback espelha o fundo
// da própria seção pra não piscar na troca.
const SECTIONS: { Component: ComponentType; bg: string }[] = [
  { Component: ContaDoLote, bg: 'bg-leilo-section' },
  { Component: Metodo, bg: 'bg-leilo-base' },
  { Component: Passos, bg: 'bg-leilo-section' },
  { Component: Perfis, bg: 'bg-leilo-base' },
  { Component: Memoria, bg: 'bg-leilo-section' },
  { Component: Sniper, bg: 'bg-leilo-base' },
  { Component: Inventario, bg: 'bg-leilo-section' },
  { Component: Planos, bg: 'bg-leilo-base' },
  { Component: Confianca, bg: 'bg-leilo-section' },
  { Component: Resultados, bg: 'bg-leilo-base' },
  { Component: Leo, bg: 'bg-leilo-section' },
  { Component: Filosofia, bg: 'bg-leilo-base' },
  { Component: Comparacao, bg: 'bg-leilo-section' },
  { Component: DoisLados, bg: 'bg-leilo-base' },
  { Component: Faq, bg: 'bg-leilo-section' },
  { Component: Aviso, bg: 'bg-leilo-base' },
  { Component: Manifesto, bg: 'bg-leilo-section' },
  { Component: Fechamento, bg: 'bg-leilo-base' },
  { Component: CtaFinal, bg: 'bg-leilo-section' },
]

export default function App() {
  if (CAMPAIGN_DISABLED) {
    return <CampaignWall />
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-leilo-base"
      >
        Pular para o conteúdo principal
      </a>

      <Hero />

      <main id="main-content">
        {SECTIONS.map(({ Component, bg }, i) => (
          <Suspense key={i} fallback={<SectionFallback bg={bg} />}>
            <Component />
          </Suspense>
        ))}
      </main>

      <Footer />
      <MobileCtaBar />
    </>
  )
}
