// Prerender de build: gera o HTML já renderizado dentro de dist/index.html
// pra bots/crawlers que não executam JS (redes sociais, alguns rich-result
// crawlers). O bundle de hidratação continua sendo servido normal — ver
// src/main.tsx (hydrateRoot) e src/entry-server.tsx.
//
// Netlify free só serve estático, então isso roda no build (`pnpm build`),
// não em request-time: sem SSR ao vivo, é SSG de rota única.
import { createServer } from 'vite'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const distIndexPath = path.resolve(root, 'dist/index.html')

async function main() {
  const template = await readFile(distIndexPath, 'utf-8')

  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
  })

  let html
  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
    const result = await render()

    html = template.replace('<div id="root"></div>', `<div id="root">${result.html}</div>`)

    if (result.noindex) {
      html = html
        .replace(/<meta name="robots" content="[^"]*"\s*\/?>/, '<meta name="robots" content="noindex, nofollow" />')
        .replace(/<title>.*?<\/title>/s, `<title>${result.title}</title>`)
    }
  } finally {
    await vite.close()
  }

  await writeFile(distIndexPath, html)
  console.log('[prerender] dist/index.html atualizado com HTML renderizado.')
}

main().catch((err) => {
  console.error('[prerender] falhou:', err)
  process.exit(1)
})
