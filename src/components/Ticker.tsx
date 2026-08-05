interface TickerProps {
  items: string[]
  label: string
}

export default function Ticker({ items, label }: TickerProps) {
  return (
    <div
      role="marquee"
      aria-label={label}
      className="relative flex w-full overflow-hidden border-y border-leilo-go/50 bg-leilo-go py-3.5 sm:py-4"
    >
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-euro text-base font-semibold uppercase tracking-wide text-leilo-base sm:text-xl"
          >
            {item}
            <span aria-hidden="true">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
