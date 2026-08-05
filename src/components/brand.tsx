import { Fragment, type ReactNode } from 'react'

/**
 * "LeiloIA" é marca: o "IA" sai sempre em verde-assinatura.
 *
 * A copy mora em data/landing.ts como string pura — de propósito, pra continuar
 * legível e copiável. Quebrar a marca em nós React acontece aqui, no render, em
 * vez de espalhar JSX pelo arquivo de conteúdo. Em atributo (alt, aria-label,
 * title) continua a string crua: atributo não tem cor.
 */
export function brand(text: string): ReactNode {
  const parts = text.split('LeiloIA')
  if (parts.length === 1) return text

  return parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && (
        <>
          Leilo<span className="text-leilo-go">IA</span>
        </>
      )}
      {part}
    </Fragment>
  ))
}
