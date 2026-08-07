import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// O build de produção passa por scripts/prerender.mjs, que já deixa o HTML
// de #root preenchido — nesse caso hidrata em vez de recriar do zero.
// Em dev (`vite`), #root chega vazio e cai no createRoot normal.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
