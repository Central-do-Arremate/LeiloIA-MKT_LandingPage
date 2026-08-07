import Container from '../Container'
import CtaButton from '../CtaButton'
import ActTicker from '../chrome/ActTicker'
import TetoLine from '../chrome/TetoLine'
import { TAG } from '../type'
import { brand } from '../brand'
import { HERO, TICKER_ITEMS } from '../../data/landing'
import { SIGNUP_URL } from '../../config/links'

export default function Hero() {
  return (
    // pt reservado para o cabeçalho fixo (faixa do cupom + linha do logo).
    <header className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32">
      {/* Glow de assinatura — sem imagem de fundo: a identidade aqui é luz + tipografia. */}
      <div className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-leilo-go/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-leilo-go/10 to-transparent" />

      {/* O wordmark saiu daqui: o <SiteHeader> agora carrega a marca de forma
          persistente, e dois logos na mesma dobra era repetição. Sem ele o H1
          sobe, que é bom pro impacto e pro LCP. */}
      {/* NADA de animação de entrada nesta dobra.

          O hero abria com uma cascata de fade-in em cima do eyebrow, do lead,
          do sub e do CTA. Além de ser o candidato a LCP (o comentário do H1
          abaixo já dizia isso), essas animações ficavam presas em opacity: 0
          quando a página carregava já rolada — o navegador restaura a posição
          de scroll ao recarregar, e a proposta de valor e o botão principal
          simplesmente não apareciam. Um acabamento que às vezes apaga o CTA
          não é acabamento, é defeito. A abertura ganha movimento pela Linha do
          Teto que desenha e pelo ticker que corre; os dois são decorativos e
          podem falhar sem levar a venda junto. */}
      <Container className="relative flex flex-col items-center pb-8 sm:pb-10">
        <p
          className={`inline-flex items-center gap-2 rounded-full border border-leilo-go/40 bg-leilo-go/10 px-4 py-2 ${TAG} text-leilo-go`}
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-leilo-go animate-pulse-green" />
          {brand(HERO.eyebrow)}
        </p>

        <h1 className="mt-6 text-center font-euro text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          {HERO.h1Lines.map((line, i) => (
            <span key={line} className={`block text-balance ${i === HERO.greenLine ? 'text-leilo-go' : ''}`}>
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-3xl text-center text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
          {brand(HERO.lead)}
        </p>

        <p className="mt-4 max-w-2xl text-center text-sm font-medium text-leilo-muted sm:text-base">
          {brand(HERO.sub)}
        </p>

        <div className="mt-8 flex w-full max-w-2xl flex-col gap-3 md:mt-10">
          <CtaButton href={SIGNUP_URL} dataCta="hero">
            {HERO.ctaPrimary}
          </CtaButton>
          <a
            href="#como-funciona"
            className="py-2 text-center text-sm font-semibold uppercase tracking-wider text-white/60 transition-colors hover:text-leilo-go"
          >
            {HERO.ctaSecondary} ↓
          </a>
        </div>
      </Container>

      {/* A Linha do Teto abre a página nomeando o conceito que o produto
          entrega. Aqui sem as zonas de prejuízo/lucro — elas ficam para a
          seção da oferta, onde a página está de fato falando de dinheiro. */}
      <TetoLine tag={HERO.tetoTag} className="mb-10 mt-4 sm:mb-12" />

      <ActTicker items={TICKER_ITEMS} label="Destaques da LeiloIA" />
    </header>
  )
}
