import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SIGNUP_URL } from '../config/links'
import { pushEvent } from '../lib/tracking'

/**
 * CTA fixo no rodapé, só em telas pequenas e só depois que o hero (com o CTA
 * primário) saiu de vista — antes disso seria dois botões idênticos na mesma
 * dobra.
 */
export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-leilo-base/95 p-3 backdrop-blur-md md:hidden"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          <a
            href={SIGNUP_URL}
            data-cta="mobile-bar"
            data-signup=""
            onClick={() => pushEvent('cta_click', { cta: 'mobile-bar' })}
            className="block rounded-xl bg-leilo-go py-3.5 text-center font-euro text-base font-bold uppercase tracking-wide text-leilo-base shadow-go-glow"
          >
            Avaliar meu próximo carro
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
