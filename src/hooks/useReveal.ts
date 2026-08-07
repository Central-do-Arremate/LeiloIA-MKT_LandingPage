import { useEffect, useRef, useState } from 'react'

/**
 * "Este elemento já apareceu?" — o gatilho de todas as revelações da página.
 *
 * Por que não o `whileInView` do Framer: as 19 seções são `lazy`, então elas
 * montam DEPOIS do scroll ter chegado no lugar. Num salto de âncora (clicar
 * em "Planos" no menu) ou quando o navegador restaura a posição ao recarregar,
 * a seção montava já dentro da viewport e o observer do Framer não reportava
 * entrada — não há entrada, o elemento já estava lá. Resultado: a seção
 * inteira ficava em `opacity: 0`. Tela preta com o menu por cima.
 *
 * Numa página de vendas isso não é um defeito de acabamento: é a seção de
 * planos sumindo justamente para quem clicou em "Planos".
 *
 * A correção é não depender de um único sinal. Três caminhos, e basta um:
 *
 *  1. Na montagem, mede o retângulo NA HORA. Já visível, revela — e nem chega
 *     a observar. Cobre o salto de âncora e a restauração de scroll.
 *  2. Observa e revela quando entrar. O caminho normal, de quem rola a página.
 *  3. Reconfere a cada scroll, até revelar. Rede de segurança para o caso em
 *     que o salto do hash acontece DEPOIS da hidratação: aí o passo 1 já mediu
 *     (longe da tela) e o observer é a única esperança. Se ele falhar ou
 *     demorar, o primeiro movimento do leitor resolve.
 *
 * Sem IntersectionObserver (navegador antigo, ambiente estranho), revela na
 * hora. O default de qualquer falha aqui é conteúdo VISÍVEL — nunca o
 * contrário.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(amount = 0.15) {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }

    /** Está visível o bastante neste exato momento? */
    const isVisible = () => {
      const rect = el.getBoundingClientRect()
      if (rect.height <= 0) return false
      const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
      return visible > 0 && visible >= Math.min(rect.height, window.innerHeight) * amount
    }

    // (1) Já está na tela agora.
    if (isVisible()) {
      setShown(true)
      return
    }

    // (2) Espera entrar.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)

    // (3) Rede de segurança. Uma medição por frame de scroll, no máximo, e o
    // listener morre junto com a primeira revelação.
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (isVisible()) setShown(true)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [amount, shown])

  return { ref, shown }
}
