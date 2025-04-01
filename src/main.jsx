import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavigationProvider from './contexts/NavigationProvider.jsx'
import GlobalLoadingProvider from './contexts/GlobalLoadingProvider'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigationProvider>
      <GlobalLoadingProvider>
        <App />
      </GlobalLoadingProvider>
    </NavigationProvider>
  </StrictMode>
)
