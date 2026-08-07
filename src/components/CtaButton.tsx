import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { pushEvent } from '../lib/tracking'

interface CtaButtonProps {
  href: string
  children: ReactNode
  className?: string
  /**
   * `solid` — o veredito verde, a ação principal.
   * `ghost` — ação secundária, sempre ao lado de uma solid.
   *
   * A variante `orange` foi removida: era a única cor fora da paleta na página
   * inteira, aparecia uma vez só, e quebrava a semântica de duas cores que o
   * resto do sistema sustenta — verde responde, vermelho custa. Um terceiro
   * acento só diluía o verde.
   */
  variant?: 'solid' | 'ghost'
  /**
   * Nome ESTÁVEL deste CTA para a medição. Não muda quando a copy do botão
   * muda — é esse o ponto: o gatilho do GTM passa a depender de um contrato
   * nosso, e não do texto que o time de copy reescreve toda semana.
   */
  dataCta: string
  /** Qual plano este botão vende, quando vende um. */
  plan?: string
  /** Marca o link como conversão, para receber a atribuição depois do mount. */
  signup?: boolean
}

export default function CtaButton({
  href,
  children,
  className = '',
  variant = 'solid',
  dataCta,
  plan,
  signup = true,
}: CtaButtonProps) {
  const styles =
    variant === 'solid'
      ? 'bg-leilo-go text-leilo-base shadow-go-glow hover:brightness-110'
      : 'border border-white/20 bg-white/[0.04] text-white hover:border-leilo-go/60'

  return (
    <motion.a
      href={href}
      data-cta={dataCta}
      {...(plan ? { 'data-plan': plan } : {})}
      {...(signup ? { 'data-signup': '' } : {})}
      onClick={() => pushEvent('cta_click', { cta: dataCta, ...(plan ? { plan } : {}) })}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={`block w-full rounded-2xl px-6 py-5 text-center font-euro text-lg font-bold uppercase tracking-wide transition-[filter,border-color] sm:text-xl md:text-2xl ${styles} ${className}`}
    >
      {children}
    </motion.a>
  )
}
