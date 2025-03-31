import { useState } from 'react'
import { GlobalLoadingContext } from './GlobalLoadingContext'

export default function GlobalLoadingProvider({ children }) {
  const [isGloballyLoading, setIsGloballyLoading] = useState(false)

  return (
    <GlobalLoadingContext.Provider
      value={(isGloballyLoading, setIsGloballyLoading)}>
      {children}
    </GlobalLoadingContext.Provider>
  )
}
