import CdaCredit from './CdaCredit'
import Container from './Container'
import { brand } from './brand'
import { LEILOIA_URL } from '../config/campaign'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        {/* Wordmark é porta de entrada da plataforma, não enfeite. */}
        <a href={LEILOIA_URL} aria-label="Ir para a plataforma LeiloIA" className="inline-block">
          <img
            src="/assets/LOGO-WHITE-tosize.avif"
            alt="LeiloIA"
            width={640}
            height={160}
            loading="lazy"
            className="h-8 w-auto transition-opacity hover:opacity-80 sm:h-9"
          />
        </a>
        {/* Selo de origem — mesmo componente do app, no lugar da frase solta. */}
        <CdaCredit />

        <p className="max-w-3xl text-sm text-white/80">
          LR Digital e Educação Ltda. — CNPJ: 52.235.980/0001-05
          <br />
          Plataforma:{' '}
          <a href={LEILOIA_URL} className="underline hover:text-leilo-go">
            ia.centraldoarremate.com.br
          </a>
        </p>
        <p className="max-w-4xl text-xs leading-relaxed text-white/50">
          A {brand('LeiloIA')} é uma ferramenta de apoio à decisão. As avaliações são estimativas e não constituem garantia de
          lucro nem ausência de risco: as condições reais de um veículo podem variar e alguns problemas podem não
          estar visíveis em fotos, descrições ou documentos. Leia sempre o edital, verifique as regras do leilão e
          considere taxas e despesas adicionais antes de qualquer arremate.
        </p>
        {/* Mesmo crédito do app (ia.centraldoarremate.com.br): wordmark da AVLI,
            não texto — assinatura visual idêntica nos dois produtos. */}
        <a
          href="https://www.avlisolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Desenvolvido por AVLI Solutions"
          className="group inline-flex items-center gap-2 text-xs text-white/40 transition-colors hover:text-white"
        >
          <span>Desenvolvido por</span>
          <img
            src="/assets/avli-horizontal.png"
            alt="AVLI Solutions"
            width={918}
            height={142}
            loading="lazy"
            className="h-4 w-auto opacity-70 transition-opacity group-hover:opacity-100"
          />
        </a>
      </Container>
    </footer>
  )
}
