import type { ReactNode } from 'react'
import { TAG } from './type'

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className={`flex items-center gap-2.5 ${TAG} text-leilo-go`}>
      <span aria-hidden="true" className="h-px w-6 bg-leilo-go" />
      {children}
    </p>
  )
}
