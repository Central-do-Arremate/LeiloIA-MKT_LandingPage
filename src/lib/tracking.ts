/**
 * Camada de medição da LP.
 *
 * A página inteira mede por UM container do GTM (GTM-K2JBB4VR, carregado no
 * index.html). Nenhum pixel é chamado daqui — quem dispara GA4, Meta e Ads é o
 * container, e este arquivo só entrega os eventos e o contexto pra ele.
 *
 * Por que isso existe: antes, nenhum CTA tinha `id`, `data-*` ou push nenhum.
 * Os dez links pra /cadastro eram indistinguíveis no DOM e os três botões de
 * plano eram idênticos entre si — ou seja, qualquer gatilho configurado no
 * container só podia estar preso a href, a classe do Tailwind ou ao TEXTO do
 * botão. Isso quebra em silêncio no primeiro redesign, que é exatamente o que
 * está acontecendo agora.
 *
 * ⚠️ Depois do deploy é preciso reapontar os gatilhos do container para os
 * `data-cta` / o evento `cta_click` daqui. O repositório não é a fonte da
 * verdade do que dispara: o container é.
 */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
/** Click IDs das plataformas de anúncio — mesma vida útil das UTMs. */
const CLICK_ID_KEYS = ['fbclid', 'gclid', 'ttclid'] as const

const STORAGE_KEY = 'leiloia:attribution'

type Attribution = Partial<Record<(typeof UTM_KEYS)[number] | (typeof CLICK_ID_KEYS)[number], string>>

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Push no dataLayer. Silencioso e defensivo de propósito: medição nunca pode
 * derrubar a interação que ela mede. Se o GTM não carregou (bloqueador,
 * offline), o array simplesmente não existe e o clique segue normalmente.
 */
export function pushEvent(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...payload })
}

/**
 * Lê a atribuição da URL de chegada e guarda na sessão.
 *
 * A LP é uma página só, mas o visitante volta pra ela (aba, histórico, âncora
 * compartilhada) e nessas voltas a query já não vem. Guardar na sessão faz a
 * origem sobreviver até o clique de conversão, que pode acontecer bem depois
 * da chegada.
 *
 * `sessionStorage`, não `localStorage`: atribuição de uma visita não deve
 * contaminar uma visita de outro dia, vinda de outro canal.
 */
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return {}

  const stored = readStored()
  const params = new URLSearchParams(window.location.search)
  const fresh: Attribution = {}

  for (const key of [...UTM_KEYS, ...CLICK_ID_KEYS]) {
    const value = params.get(key)
    if (value) fresh[key] = value
  }

  // A chegada nova ganha da guardada: se a pessoa voltou por outro anúncio,
  // é o anúncio novo que trouxe a conversão.
  const merged = Object.keys(fresh).length > 0 ? fresh : stored

  if (Object.keys(fresh).length > 0) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fresh))
    } catch {
      // Modo privado / storage cheio. A atribuição vale só pra esta página.
    }
  }

  return merged
}

function readStored(): Attribution {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Attribution) : {}
  } catch {
    return {}
  }
}

/**
 * Marca os links de conversão para o enriquecimento pós-mount.
 * Usado como atributo no `<a>`: `{...SIGNUP_LINK_ATTR}`.
 */
export const SIGNUP_LINK_ATTR = { 'data-signup': '' } as const

/**
 * Anexa a atribuição da visita a todos os links de conversão, DEPOIS da
 * hidratação.
 *
 * Por que não montar a URL no render: o prerender roda em Node, onde não
 * existe query de chegada. O servidor escreveria `?cupom=X` e o cliente
 * `?cupom=X&utm_source=FB` — mesmo componente, href diferente, mismatch de
 * hidratação. Escrevendo o href estático no HTML e reescrevendo no efeito, os
 * dois lados batem e o atributo continua sendo um href de verdade: clique do
 * meio, "abrir em nova aba" e o preview do link seguem funcionando.
 *
 * O cupom entra no HTML estático (é constante); aqui entram só as UTMs e os
 * click IDs, que dependem de como a pessoa chegou.
 */
export function enrichSignupLinks() {
  if (typeof window === 'undefined') return

  const attribution = captureAttribution()
  if (Object.keys(attribution).length === 0) return

  for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[data-signup]')) {
    try {
      const url = new URL(anchor.href)
      for (const [key, value] of Object.entries(attribution)) {
        if (value) url.searchParams.set(key, value)
      }
      anchor.href = url.toString()
    } catch {
      // href relativo ou malformado: deixa como está, o link continua válido.
    }
  }
}
