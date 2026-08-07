import { OFFER } from './offer'

// Destinos de conversão. A assinatura acontece DENTRO do app (Stripe via
// backend) — a LP não fala com checkout nenhum, só encaminha.
export const APP_URL = 'https://ia.centraldoarremate.com.br'
export const PLANS_URL = `${APP_URL}/precos`
export const WHATSAPP_URL = 'https://wa.me/5521997512293'

/**
 * Destino de conversão, JÁ COM O CUPOM.
 *
 * O cupom vai na URL e não numa instrução de "digite INAUGURA70 no checkout":
 * todo passo que depende do cliente lembrar de fazer alguma coisa é um passo
 * onde parte deles chega sem desconto — e aí a página prometeu 70% e a tela de
 * cadastro cobra cheio. O `/cadastro` do app lê `?cupom=` (aceita `?coupon=`
 * também), guarda em sessionStorage e limpa a URL, então o código sobrevive ao
 * ida-e-volta do OTP e do OAuth.
 *
 * Fica no HTML estático porque é constante. A atribuição da visita (UTMs,
 * click IDs) é que entra depois da hidratação — ver lib/tracking.
 */
export const SIGNUP_URL = `${APP_URL}/cadastro?cupom=${OFFER.code}`
