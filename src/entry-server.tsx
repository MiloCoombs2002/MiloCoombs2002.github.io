import { StrictMode } from 'react'
import { StaticRouter } from 'react-router-dom'
import App from './App'

export function createServerApp(url: string) {
  return (
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
}
