import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CtaButtonProps {
  href: string
  children: ReactNode
  className?: string
  variant?: 'solid' | 'ghost' | 'orange'
}

export default function CtaButton({ href, children, className = '', variant = 'solid' }: CtaButtonProps) {
  const styles =
    variant === 'solid'
      ? 'bg-leilo-go text-leilo-base shadow-go-glow'
      : variant === 'orange'
        ? 'bg-orange-500 text-leilo-base shadow-[0_0_0_1px_rgba(249,115,22,0.35),0_0_24px_-4px_rgba(249,115,22,0.55)]'
        : 'border border-white/20 bg-white/[0.04] text-white hover:border-leilo-go/60'

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`block w-full rounded-2xl px-6 py-5 text-center font-euro text-lg font-bold uppercase tracking-wide sm:text-xl md:text-2xl ${styles} ${className}`}
    >
      {children}
    </motion.a>
  )
}
