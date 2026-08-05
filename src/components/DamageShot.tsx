import { motion } from 'framer-motion'
import { TAG } from './type'

/**
 * Pontos marcados sobre a foto do lote. As coordenadas são percentuais da
 * própria imagem, então acompanham qualquer largura de render.
 */
const POINTS = [
  { n: '01', x: 33, y: 30, label: 'Capô deformado' },
  { n: '02', x: 47, y: 45, label: 'Farol e suporte' },
  { n: '03', x: 28, y: 74, label: 'Para-choque dianteiro' },
  { n: '04', x: 63, y: 62, label: 'Para-lama e roda' },
] as const

/**
 * A foto do lote com os danos numerados.
 *
 * Existe pra fazer o argumento da seção acontecer na imagem em vez de só no
 * texto: cada ponto marcado é uma linha da conta que alguém precisa levantar
 * antes do lance. Sem valores — preço de peça varia por região e fornecedor,
 * e a página não inventa número.
 */
export default function DamageShot() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/[0.08] bg-leilo-panel/40">
      <figcaption className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3 sm:px-5">
        <p className={`${TAG} text-leilo-muted`}>Lote — registro fotográfico</p>
        <p className={`${TAG} text-leilo-stop`}>4 pontos visíveis</p>
      </figcaption>

      <div className="relative">
        <img
          src="/assets/photos/lote-batido-650.avif"
          alt="Veículo de leilão com danos na dianteira: capô, farol, para-choque e para-lama comprometidos"
          width={650}
          height={487}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="w-full"
        />

        {POINTS.map((point, i) => (
          <motion.span
            key={point.n}
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.15 + i * 0.12, ease: 'easeOut' }}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            className="absolute grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-leilo-stop bg-leilo-base/85 font-mono text-[0.6rem] font-bold text-leilo-stop shadow-[0_0_0_6px_rgba(251,69,39,0.12)] sm:h-8 sm:w-8 sm:text-[0.65rem]"
          >
            {point.n}
          </motion.span>
        ))}
      </div>

      {/* A legenda mora fora da foto: rótulo flutuando sobre a imagem some em
          tela estreita e brigaria com o próprio dano que quer apontar. */}
      <ul className="grid grid-cols-1 divide-y divide-white/[0.06] border-t border-white/[0.08] xs:grid-cols-2 xs:divide-y-0">
        {POINTS.map((point, i) => (
          <li
            key={point.n}
            className={`flex items-center gap-2.5 px-4 py-3 sm:px-5 ${i % 2 === 0 ? 'xs:border-r xs:border-white/[0.06]' : ''} ${i > 1 ? 'xs:border-t xs:border-white/[0.06]' : ''}`}
          >
            <span className="font-mono text-[0.65rem] font-bold text-leilo-stop">{point.n}</span>
            <span className="text-sm text-white/80">{point.label}</span>
          </li>
        ))}
      </ul>
    </figure>
  )
}
