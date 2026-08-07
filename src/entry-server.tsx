import { StrictMode } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'node:stream'
import App from './App'
import { CAMPAIGN_DISABLED } from './config/campaign'
import { CAMPAIGN_WALL_TITLE } from './components/CampaignWall'

interface RenderResult {
  html: string
  title: string | null
  noindex: boolean
}

/**
 * Roda em Node (via vite.ssrLoadModule, chamado por scripts/prerender.mjs).
 * Usa renderToPipeableStream + onAllReady (não onShellReady) de propósito:
 * as seções abaixo do Hero são `lazy()` em App.tsx para code-splitting no
 * cliente, e só onAllReady espera esses chunks resolverem antes de fechar o
 * stream — onShellReady devolveria só os fallbacks vazios do Suspense.
 */
export function render(): Promise<RenderResult> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    const passthrough = new PassThrough()
    passthrough.on('data', (chunk) => chunks.push(chunk))
    passthrough.on('end', () => {
      resolve({
        html: Buffer.concat(chunks).toString('utf-8'),
        title: CAMPAIGN_DISABLED ? CAMPAIGN_WALL_TITLE : null,
        noindex: CAMPAIGN_DISABLED,
      })
    })
    passthrough.on('error', reject)

    const { pipe } = renderToPipeableStream(
      <StrictMode>
        <App />
      </StrictMode>,
      {
        onAllReady() {
          pipe(passthrough)
        },
        onError: reject,
      },
    )
  })
}
