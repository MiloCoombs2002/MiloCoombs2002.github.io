import { StrictMode } from 'react'
import { StaticRouter } from 'react-router-dom'
import App from './App'

function getRouterBasename(): string | undefined {
  const baseUrl = import.meta.env.BASE_URL
  if (baseUrl === '/') {
    return undefined
  }

  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
}

export function createServerApp(url: string) {
  const basename = getRouterBasename()
  const location = basename ? `${basename}${url}` : url

  return (
    <StrictMode>
      <StaticRouter basename={basename} location={location}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
}
