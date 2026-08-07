import { useEffect, useState } from 'react'
import { OFFER, isOfferLive } from '../../config/offer'
import { useCountdown } from '../../hooks/useCountdown'
import { SIGNUP_URL } from '../../config/links'
import { pushEvent } from '../../lib/tracking'

/** "31/08" — a data por extenso, que é o que sustenta o prazo quando o relógio não está de pé. */
const endLabel = new Date(OFFER.endsAt).toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  timeZone: 'America/Sao_Paulo',
})

/**
 * Faixa da oferta vigente.
 *
 * O desconto e o prazo são reais, então podem ser ditos sem rodeio. O que a
 * faixa NÃO faz é fingir: o escopo ("no primeiro mês") anda colado no
 * percentual, e quando a data passa a faixa some sozinha em vez de reiniciar
 * o contador.
 *
 * A data por extenso é o conteúdo estável — sai no HTML do prerender e nunca
 * mente. O relógio é enfeite que só entra depois que o cliente assume, porque
 * um contador renderizado no build congelaria no tempo do build.
 */
export default function CouponBar() {
  const { days, hours, live } = useCountdown(OFFER.endsAt)
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    setExpired(!isOfferLive(Date.now()))
  }, [])

  if (expired) return null

  return (
    <div className="border-b border-leilo-go/25 bg-leilo-go/[0.07]">
      <a
        href={SIGNUP_URL}
        data-cta="coupon-bar"
        data-signup=""
        onClick={() => pushEvent('cta_click', { cta: 'coupon-bar', coupon: OFFER.code })}
        className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center transition-colors hover:bg-leilo-go/[0.05] sm:px-6 lg:px-8"
      >
        <span className="font-euro text-xs font-bold uppercase tracking-wide text-leilo-go sm:text-sm">
          {OFFER.percentOff}% off {OFFER.durationLabel}
        </span>

        <span aria-hidden="true" className="hidden text-leilo-go/30 sm:inline">
          /
        </span>

        <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/80">
          cupom <span className="text-leilo-go">{OFFER.code}</span>
        </span>

        <span aria-hidden="true" className="hidden text-leilo-go/30 sm:inline">
          /
        </span>

        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-leilo-muted">
          {live ? (
            <>
              termina em{' '}
              <span className="num font-semibold text-white/80">
                {days}d {hours}h
              </span>
            </>
          ) : (
            <>
              até <span className="num font-semibold text-white/80">{endLabel}</span>
            </>
          )}
        </span>
      </a>
    </div>
  )
}
