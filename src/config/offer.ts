/**
 * A oferta vigente — cupom, prazo e como o desconto é dito.
 *
 * Fonte da verdade do que a PÁGINA promete. A fonte da verdade do que o
 * cliente é COBRADO é a linha do cupom em `leiloai.coupons` e, depois dela, o
 * Stripe. Os dois têm que dizer a mesma coisa: se a linha estiver com
 * `duration = 'forever'` e aqui estiver `primeiro mês`, a página mente — e
 * mente contra nós, prometendo menos do que entrega. Se for o contrário, é
 * cobrança surpresa no mês 2, que volta como chargeback.
 *
 * Confira antes de publicar:
 *   SELECT code, kind, discount_pct, duration, duration_in_months,
 *          applies_to_plan_ids, expires_at, active
 *     FROM leiloai.coupons WHERE code = 'INAUGURA70';
 */

export const OFFER = {
  code: 'INAUGURA70',
  percentOff: 70,

  /**
   * Fim da oferta. Constante EXPLÍCITA, escrita à mão, nunca derivada de
   * "último dia do mês atual".
   *
   * Um prazo que se renova sozinho é contador eterno: no dia 1º ele volta a
   * marcar 30 dias e a urgência passa a ser encenação. Esta página inteira é
   * construída sobre não prometer o que não entrega — o Aviso, a Filosofia e o
   * FAQ existem pra isso —, e credibilidade é o ativo caro aqui. Prorrogar é
   * editar esta linha e subir de novo: decisão humana, consciente, registrada
   * no git.
   *
   * 31/08/2026, 23:59 em Brasília (UTC-3).
   */
  endsAt: '2026-08-31T23:59:59-03:00',

  /**
   * Escopo do desconto, espelhando a coluna `duration` do cupom.
   * 'once' → primeiro mês · 'forever' → todas as mensalidades.
   */
  duration: 'once' as 'once' | 'forever',

  /** Como o escopo é dito em texto corrido. Anda SEMPRE junto do número. */
  durationLabel: 'no primeiro mês',
} as const

/** A oferta ainda vale? Só chamar no cliente — ver o comentário do useCountdown. */
export function isOfferLive(now: number): boolean {
  return now < new Date(OFFER.endsAt).getTime()
}

/**
 * Aplica o percentual a um preço em centavos.
 *
 * ⚠️ Não somos a única implementação disso: quem calcula a fatura de verdade é
 * o Stripe, a partir do `percent_off` do Coupon. Aqui é só a vitrine. Se os
 * dois divergirem, o certo é o Stripe — e a página está errada.
 */
export function discountedCents(priceCents: number, percentOff: number): number {
  return Math.round((priceCents * (100 - percentOff)) / 100)
}

/** Centavos → "R$ 5,97". */
export function brl(cents: number): string {
  return `R$ ${(cents / 100).toFixed(2).replace('.', ',')}`
}
