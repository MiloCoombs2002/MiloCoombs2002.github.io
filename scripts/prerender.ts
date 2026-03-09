import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { renderToString } from 'react-dom/server'
import type { ReactElement } from 'react'

type RouteMetadata = {
  description: string
  title: string
}

const routes = ['/', '/me', '/projects', '/notes'] as const
type RoutePath = (typeof routes)[number]

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')

const routeMetadata: Record<RoutePath, RouteMetadata> = {
  '/': {
    title: 'Milo Coombs | Machine Learning Engineer',
    description:
      'Milo Coombs is a London-based machine learning engineer building production AI systems and exploring physics-inspired ML research.',
  },
  '/me': {
    title: 'About | Milo Coombs',
    description:
      'Learn more about Milo Coombs, his background in physics, machine learning engineering work, and current research interests.',
  },
  '/projects': {
    title: 'Projects | Milo Coombs',
    description:
      'Explore selected machine learning and physics-inspired projects by Milo Coombs, including technical notes and experiments.',
  },
  '/notes': {
    title: 'Notes | Milo Coombs',
    description:
      'Read short notes from Milo Coombs on machine learning, geometry, physics, and engineering ideas under active exploration.',
  },
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function injectRenderedHtml(template: string, renderedHtml: string): string {
  return template.replace('<div id="root"></div>', `<div id="root">${renderedHtml}</div>`)
}

function injectMetadata(html: string, metadata: RouteMetadata): string {
  const titleTag = `<title>${escapeHtml(metadata.title)}</title>`
  const descriptionTag = `<meta name="description" content="${escapeHtml(metadata.description)}" />`

  const withTitle = html.replace(/<title>[\s\S]*?<\/title>/i, titleTag)

  if (/<meta\s+name=["']description["']/i.test(withTitle)) {
    return withTitle.replace(/<meta\s+name=["']description["'][^>]*>/i, descriptionTag)
  }

  return withTitle.replace('</head>', `  ${descriptionTag}\n  </head>`)
}

function outputPathForRoute(route: string): string {
  if (route === '/') {
    return path.join(distDir, 'index.html')
  }

  return path.join(distDir, route.slice(1), 'index.html')
}

function detectBasePathFromTemplate(template: string): string {
  const assetUrlMatch =
    template.match(/<script[^>]+src="([^"]+)"/i) ?? template.match(/<link[^>]+href="([^"]+)"/i)
  const assetUrl = assetUrlMatch?.[1]

  if (!assetUrl) {
    return '/'
  }

  const assetsMarker = '/assets/'
  const markerIndex = assetUrl.indexOf(assetsMarker)

  if (markerIndex === -1) {
    return '/'
  }

  const basePath = assetUrl.slice(0, markerIndex + 1)
  return basePath === '' ? '/' : basePath
}

function buildGithubPages404Html(basePath: string): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Redirecting...</title>
    <script>
      (function () {
        var basePath = '${basePath}';
        var pathname = window.location.pathname;
        var relativePath = pathname.startsWith(basePath)
          ? pathname.slice(basePath.length - 1)
          : pathname;
        var target = basePath + '?p=' + encodeURIComponent(relativePath + window.location.search + window.location.hash);
        window.location.replace(target);
      })();
    </script>
  </head>
  <body></body>
</html>
`
}

async function main() {
  const template = await readFile(path.join(distDir, 'index.html'), 'utf-8')
  const basePath = detectBasePathFromTemplate(template)
  const serverEntryPath = path.join(distDir, 'server', 'entry-server.js')
  const { createServerApp } = (await import(pathToFileURL(serverEntryPath).href)) as {
    createServerApp: (url: string) => ReactElement
  }

  for (const route of routes) {
    const renderedHtml = renderToString(createServerApp(route))
    const htmlWithApp = injectRenderedHtml(template, renderedHtml)
    const pageHtml = injectMetadata(htmlWithApp, routeMetadata[route])
    const outputPath = outputPathForRoute(route)

    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(outputPath, pageHtml, 'utf-8')
  }

  const fallbackHtml = buildGithubPages404Html(basePath)
  await writeFile(path.join(distDir, '404.html'), fallbackHtml, 'utf-8')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
