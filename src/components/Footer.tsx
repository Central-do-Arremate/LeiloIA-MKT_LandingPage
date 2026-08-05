import Container from './Container'
import { LEILOIA_URL } from '../config/campaign'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-leilo-section py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="font-euro text-2xl font-bold uppercase tracking-tight text-white">
          Leilo<span className="text-leilo-go">IA</span>
        </p>
        <p className="max-w-3xl text-sm text-white/80">
          LR Digital e Educação Ltda. — CNPJ: 52.235.980/0001-05
          <br />
          LeiloIA é um produto da Central do Arremate. Plataforma:{' '}
          <a href={LEILOIA_URL} className="underline hover:text-leilo-go">
            ia.centraldoarremate.com.br
          </a>
        </p>
        <p className="max-w-4xl text-xs leading-relaxed text-white/50">
          A LeiloIA é uma ferramenta de apoio à decisão. As avaliações são estimativas e não constituem garantia de
          lucro nem ausência de risco: as condições reais de um veículo podem variar e alguns problemas podem não
          estar visíveis em fotos, descrições ou documentos. Leia sempre o edital, verifique as regras do leilão e
          considere taxas e despesas adicionais antes de qualquer arremate.
        </p>
        <p className="text-xs text-white/40">
          Desenvolvido por{' '}
          <a
            href="https://www.avlisolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-leilo-go"
          >
            AVLI Solutions
          </a>
        </p>
      </Container>
    </footer>
  )
}
