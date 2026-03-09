import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find root element.')
}

const app = (
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
