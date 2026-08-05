import { motion } from 'framer-motion'
import { READOUT, TAG } from './type'

/** Linhas com barra: proporção entre si, sem valor. */
const BARS = [
  { label: 'Peças estimadas', fill: 68 },
  { label: 'Custos de reparo', fill: 44 },
] as const

/** Linhas de contagem: o que a análise levantou. */
const COUNTS = [
  { label: 'Danos identificados', value: '4 pontos' },
  { label: 'Pontos críticos do modelo', value: '2 itens' },
  { label: 'Links de peças', value: '9 refs' },
] as const

/**
 * Mock da saída da avaliação — a promessa da seção desenhada em vez de descrita.
 *
 * De propósito não traz valor em reais: preço de peça varia por região,
 * fornecedor e estado do veículo, então um número aqui viraria promessa. As
 * barras mostram a ESTRUTURA do laudo (o que entra na conta e em que peso);
 * o valor sai na plataforma, com os dados do lote real.
 */
export default function LaudoMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-leilo-panel/40">
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-5 py-3.5">
        <p className={`${TAG} text-leilo-muted`}>Avaliação · LT-2291</p>
        <p className="font-mono text-xs font-bold text-leilo-go">00:52</p>
      </div>

      <div className="px-5 py-4">
        <p className={`${READOUT} text-leilo-muted`}>Veículo</p>
        <p className="mt-1 font-euro text-lg font-semibold uppercase tracking-tight text-white">
          SUV compacto 2019 · sinistro dianteiro
        </p>
      </div>

      <div className="flex flex-col gap-4 border-t border-white/[0.06] px-5 py-5">
        {BARS.map((bar, i) => (
          <div key={bar.label}>
            <p className="text-sm text-white/75">{bar.label}</p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
              <motion.div
                className="h-full rounded-full bg-leilo-go/70"
                initial={{ width: 0 }}
                whileInView={{ width: `${bar.fill}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}

        <dl className="mt-1 flex flex-col gap-2.5">
          {COUNTS.map((row) => (
            <div key={row.label} className="flex items-center justify-between gap-4">
              <dt className="text-sm text-white/75">{row.label}</dt>
              <dd className="font-mono text-xs font-bold text-white">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-leilo-go/25 bg-leilo-go/[0.06] px-5 py-4">
        <div>
          <p className={`${TAG} text-leilo-muted`}>Lance máximo</p>
          {/* Mascarado a bolinha: o número é da sua análise, não da vitrine. */}
          <p className="mt-1 font-mono text-lg font-bold tracking-wider text-white">R$ ••.•••</p>
        </div>
        <span className="rounded-full border border-leilo-go/60 bg-leilo-go/15 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-leilo-go">
          Vale
        </span>
      </div>
    </div>
  )
}
