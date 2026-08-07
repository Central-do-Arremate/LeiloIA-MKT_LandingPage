import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ACTS } from '../../config/acts'

/** Duração de uma avaliação, em segundos — o número que a própria página cita. */
const LAUDO_SECONDS = 52

function clock(seconds: number) {
  const s = Math.min(LAUDO_SECONDS, Math.max(0, Math.round(seconds)))
  return `00:${String(s).padStart(2, '0')}`
}

function useAppraisalProgress() {
  const { scrollYProgress } = useScroll()

  // Servidor e primeiro paint mostram o estado inicial; o scroll real só chega
  // no efeito. Sem isso o HTML estático sairia com um valor e a hidratação com
  // outro.
  const [elapsed, setElapsed] = useState(0)
  const [actIndex, setActIndex] = useState(0)

  useEffect(() => {
    return scrollYProgress.on('change', (p) => {
      setElapsed(p * LAUDO_SECONDS)
      setActIndex(Math.min(ACTS.length - 1, Math.floor(p * ACTS.length)))
    })
  }, [scrollYProgress])

  return { scrollYProgress, elapsed, act: ACTS[actIndex] }
}

/**
 * Leitura da avaliação — o relógio e o ato, em mono, dentro da linha do
 * cabeçalho.
 *
 * Uma barra de progresso comum diz "quanto falta da página". Esta diz a mesma
 * coisa no formato de saída do produto: o relógio corre de 00:00 a 00:52, que
 * é a duração de um laudo e a promessa da página. A régua deixa de ser cromo
 * genérico e passa a ser o produto se apresentando enquanto a pessoa lê.
 *
 * Mora dentro da linha do logo em vez de numa faixa própria: três barras fixas
 * empilhadas (cupom + cabeçalho + trilho) comiam mais de 110px antes de
 * qualquer conteúdo, e no mobile isso é um terço da dobra.
 *
 * `aria-hidden` porque é redundante com o cabeçalho de cada ato, que é um
 * heading de verdade — um leitor de tela não deve ouvir o relógio mudando.
 */
export function AppraisalReadout() {
  const { elapsed, act } = useAppraisalProgress()

  return (
    <span aria-hidden="true" className="hidden items-center gap-2.5 sm:flex">
      <span className="num text-[0.62rem] font-semibold tracking-[0.12em] text-leilo-go">▸ {clock(elapsed)}</span>
      <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-leilo-muted">
        Ato {act.n} — {act.name}
      </span>
    </span>
  )
}

/**
 * O fio de progresso. Vive na borda de baixo do cabeçalho: o percorrido em
 * verde cheio sobre o verde apagado do que falta.
 */
export function AppraisalProgress() {
  const { scrollYProgress } = useAppraisalProgress()
  // Mola para o preenchimento não tremer a cada frame de scroll.
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-leilo-go-dim/20">
      <motion.div className="h-full origin-left bg-leilo-go" style={{ scaleX }} />
    </div>
  )
}
