/**
 * Crédito "Um produto ▣ Central do Arremate" — porte do componente de mesmo
 * nome do app (LeiloAI-Website/src/components/ui/CdaCredit.tsx). A marca fica
 * entre as palavras, no tamanho do texto; o nome linka pro site da CDA e, no
 * hover, vira branco com sublinhado vermelho da marca.
 */
export default function CdaCredit({ className = '' }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-1.5 font-euro text-[0.7rem] uppercase tracking-[0.2em] text-leilo-muted ${className}`}
    >
      Um produto
      <img
        src="/assets/cda-red.png"
        alt=""
        aria-hidden="true"
        width={1000}
        height={1000}
        loading="lazy"
        className="mb-0.5 h-[1.2em] w-[1.2em] shrink-0 object-contain"
      />
      <a
        href="https://centraldoarremate.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-2 transition-colors hover:text-white hover:underline hover:decoration-leilo-stop hover:decoration-2"
      >
        Central do Arremate
      </a>
    </p>
  )
}
