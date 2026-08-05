import { TAG } from './type'

/** Faixa de readouts mono com divisórias fininhas — o motivo "plaqueta de chassi". */
export default function PlateStrip({
  items,
  className = '',
}: {
  items: { label: string; value: string }[]
  className?: string
}) {
  return (
    <div
      className={`grid grid-cols-2 divide-white/[0.08] rounded-xl border border-white/[0.08] bg-leilo-panel/40 sm:grid-cols-4 sm:divide-x ${className}`}
    >
      {items.map((it) => (
        <div key={it.label} className="px-4 py-3.5 sm:px-5">
          <p className={`${TAG} text-leilo-muted`}>{it.label}</p>
          <p className="mt-1 font-mono text-sm font-bold text-white sm:text-base">{it.value}</p>
        </div>
      ))}
    </div>
  )
}
