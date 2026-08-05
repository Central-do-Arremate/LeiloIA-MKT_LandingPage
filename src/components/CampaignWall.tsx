import { ArrowUpRight, SearchX } from 'lucide-react'
import { brand } from './brand'
import { CENTRAL_DO_ARREMATE_URL, LEILOIA_URL } from '../config/campaign'

const LINKS = [
  {
    href: LEILOIA_URL,
    label: 'LeiloIA',
    description: 'Avalie carros de leilão em menos de 1 minuto.',
  },
  {
    href: CENTRAL_DO_ARREMATE_URL,
    label: 'Central do Arremate',
    description: 'Conheça nossos cursos e conteúdos sobre leilões.',
  },
]

export default function CampaignWall() {
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-leilo-base px-6 py-12">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-leilo-go/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-leilo-go/5 blur-[120px]" />

      <div className="relative z-[1] flex w-full max-w-lg flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-leilo-go/50 bg-leilo-go/10">
          <SearchX className="h-8 w-8 text-leilo-go" aria-hidden="true" />
        </span>

        <h1 className="mt-6 font-euro text-3xl font-bold uppercase text-white sm:text-4xl">
          Campanha <span className="text-leilo-go">não encontrada</span>
        </h1>

        <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
          Essa página não está mais disponível. Mas você pode continuar avaliando com a gente por aqui:
        </p>

        <div className="mt-8 flex w-full flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition-colors hover:border-leilo-go/60 hover:bg-white/10"
            >
              <span>
                <span className="block text-lg font-bold text-white">{brand(link.label)}</span>
                <span className="mt-1 block text-sm text-white/60">{link.description}</span>
              </span>
              <ArrowUpRight
                className="h-6 w-6 flex-shrink-0 text-leilo-go transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
