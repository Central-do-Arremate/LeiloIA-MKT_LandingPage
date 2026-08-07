interface ActTickerProps {
  items: string[]
  label: string
  /**
   * `go` — barra verde cheia, a voz da marca afirmando.
   * `line` — hairline sobre o fundo, para atos onde gritar seria errado
   *   (o ato do custo e o da decisão falam de risco, não de vitória).
   */
  variant?: 'go' | 'line'
}

/**
 * Marquee que fecha cada ato.
 *
 * Era um componente exclusivo do Hero; virou o divisor estrutural da página,
 * que é o papel que ele já cumpria bem. Cada ato fecha com os fatos daquele
 * ato — não com uma lista genérica repetida cinco vezes.
 *
 * `aria-hidden` porque tudo que passa aqui já foi dito por extenso na seção
 * logo acima. Um leitor de tela atravessando quatro cópias do mesmo texto
 * (o loop precisa duplicar para não ter emenda) é só ruído.
 */
export default function ActTicker({ items, label, variant = 'go' }: ActTickerProps) {
  const isGo = variant === 'go'

  return (
    <div
      role="marquee"
      aria-label={label}
      className={`relative flex w-full overflow-hidden ${
        isGo ? 'border-y border-leilo-go/50 bg-leilo-go py-3.5 sm:py-4' : 'border-y border-white/[0.08] py-3 sm:py-3.5'
      }`}
    >
      <div aria-hidden="true" className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className={
              isGo
                ? 'flex items-center gap-8 font-euro text-base font-bold uppercase tracking-wide text-leilo-base sm:text-xl'
                : 'flex items-center gap-8 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-leilo-muted sm:text-xs'
            }
          >
            {item}
            <span className={isGo ? '' : 'text-leilo-go/50'}>{isGo ? '•' : '✦'}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
