import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalLoadingProvider from './contexts/GlobalLoadingProvider'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalLoadingProvider>
      <App />
    </GlobalLoadingProvider>
  </StrictMode>
)
