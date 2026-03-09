import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

function getRouterBasename(): string | undefined {
  const baseUrl = import.meta.env.BASE_URL
  if (baseUrl === '/') {
    return undefined
  }

  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
}

function applyGithubPagesRedirectParam(): void {
  const url = new URL(window.location.href)
  const redirectedPath = url.searchParams.get('p')

  if (!redirectedPath) {
    return
  }

  const basename = getRouterBasename() ?? ''
  const normalizedPath = redirectedPath.startsWith('/') ? redirectedPath : `/${redirectedPath}`
  const targetUrl = `${basename}${normalizedPath}`

  url.searchParams.delete('p')
  window.history.replaceState(null, '', targetUrl)
}

applyGithubPagesRedirectParam()

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find root element.')
}

const app = (
  <StrictMode>
    <BrowserRouter basename={getRouterBasename()}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
