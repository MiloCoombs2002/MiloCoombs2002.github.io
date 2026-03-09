import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { renderToString } from 'react-dom/server'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')

const routes = ['/', '/me', '/projects', '/notes']

function injectRenderedHtml(template: string, renderedHtml: string): string {
  return template.replace('<div id="root"></div>', `<div id="root">${renderedHtml}</div>`)
}

function injectHashBootstrapScript(html: string, route: string): string {
  if (route === '/') {
    return html
  }

  const hashPath = `#${route}`
  const bootstrapScript = `<script>if(!window.location.hash){window.location.hash='${hashPath}';}</script>`
  return html.replace('<script type="module"', `${bootstrapScript}\n    <script type="module"`)
}

function outputPathForRoute(route: string): string {
  if (route === '/') {
    return path.join(distDir, 'index.html')
  }

  return path.join(distDir, route.slice(1), 'index.html')
}

async function main() {
  const template = await readFile(path.join(distDir, 'index.html'), 'utf-8')
  const serverEntryPath = path.join(distDir, 'server', 'entry-server.js')
  const { createServerApp } = (await import(pathToFileURL(serverEntryPath).href)) as {
    createServerApp: (url: string) => import('react').ReactElement
  }

  for (const route of routes) {
    const renderedHtml = renderToString(createServerApp(route))
    const htmlWithApp = injectRenderedHtml(template, renderedHtml)
    const routeHtml = injectHashBootstrapScript(htmlWithApp, route)
    const outputPath = outputPathForRoute(route)

    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(outputPath, routeHtml, 'utf-8')
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
