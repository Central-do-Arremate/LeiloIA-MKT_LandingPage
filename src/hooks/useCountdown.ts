import { useEffect, useState } from 'react'

export interface Countdown {
  days: number
  hours: number
  minutes: number
  /** false enquanto o relógio do cliente ainda não assumiu, ou depois do prazo. */
  live: boolean
}

/**
 * Contagem até uma data.
 *
 * Devolve `live: false` no servidor e no primeiro paint — de propósito. O
 * prerender roda em Node no build: se o relógio fosse lido durante o render, o
 * HTML estático sairia congelado com o tempo do build ("faltam 24 dias" numa
 * página servida três semanas depois) e a hidratação ainda acusaria mismatch.
 * Quem chama renderiza um estado neutro até `live` virar true.
 *
 * Atualiza por minuto, não por segundo: a oferta acaba num dia, não numa
 * hora. Segundos correndo aqui seriam teatro de urgência — e um timer por
 * segundo repinta a barra fixa 60× mais que o necessário.
 */
export function useCountdown(endsAt: string): Countdown {
  const [state, setState] = useState<Countdown>({ days: 0, hours: 0, minutes: 0, live: false })

  useEffect(() => {
    const end = new Date(endsAt).getTime()

    const tick = () => {
      const left = end - Date.now()
      if (left <= 0) {
        setState({ days: 0, hours: 0, minutes: 0, live: false })
        return
      }
      const minutes = Math.floor(left / 60000)
      setState({
        days: Math.floor(minutes / 1440),
        hours: Math.floor((minutes % 1440) / 60),
        minutes: minutes % 60,
        live: true,
      })
    }

    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [endsAt])

  return state
}
