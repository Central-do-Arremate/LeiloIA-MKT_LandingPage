import { useEffect, useState } from 'react'
import { AppraisalReadout, AppraisalProgress } from './AppraisalRail'
import CouponBar from './CouponBar'
import { SIGNUP_URL } from '../../config/links'
import { LEILOIA_URL } from '../../config/campaign'
import { pushEvent } from '../../lib/tracking'

const NAV = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#planos', label: 'Planos' },
  { href: '#duvidas', label: 'Dúvidas' },
]

/**
 * Cabeçalho fixo.
 *
 * A página não tinha nenhum no desktop: quem passasse do hero ficava sem marca
 * e sem CTA até a próxima seção que tivesse um. No mobile a <MobileCtaBar> já
 * resolve isso pelo rodapé — por isso aqui o botão é `hidden md:inline-flex`.
 * Dois CTAs fixos na mesma tela pequena competiriam entre si e comeriam a
 * dobra.
 *
 * Uma linha só, com a leitura da avaliação no meio e o fio de progresso na
 * borda de baixo. O fundo ganha corpo depois que a página sai do topo: sobre o
 * hero, uma barra sólida cortaria a abertura ao meio.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-leilo-base/90 backdrop-blur-md' : 'bg-leilo-base/30 backdrop-blur-sm'
      }`}
    >
      <CouponBar />

      <div className="relative mx-auto flex max-w-content items-center gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href={LEILOIA_URL}
          aria-label="Ir para a plataforma LeiloIA"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <img src="/assets/LOGO-GREENWHITE-tosize.avif" alt="" width={112} height={24} className="h-5 w-auto sm:h-6" />
        </a>

        <AppraisalReadout />

        <nav aria-label="Seções da página" className="ml-auto hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-leilo-muted transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={SIGNUP_URL}
          data-cta="header"
          data-signup=""
          onClick={() => pushEvent('cta_click', { cta: 'header' })}
          className="ml-auto hidden shrink-0 rounded-xl bg-leilo-go px-5 py-2.5 font-euro text-sm font-bold uppercase tracking-wide text-leilo-base shadow-go-glow transition-[filter] hover:brightness-110 md:inline-flex lg:ml-6"
        >
          Avaliar meu carro
        </a>

        <AppraisalProgress />
      </div>
    </header>
  )
}
