import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const hasPrerenderedHtml = rootElement.innerHTML.trim() !== '' && !rootElement.innerHTML.includes('app-html')

if (hasPrerenderedHtml) {
  hydrateRoot(rootElement, app)
} else {
  rootElement.innerHTML = ''
  createRoot(rootElement).render(app)
}
