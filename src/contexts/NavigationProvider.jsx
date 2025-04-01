import { useState } from 'react'
import { NavigationContext } from './NavigationContext'

const navigationScreens = ['greeting', 'howto', 'pickDate', 'final']

export default function NavigationProvider({ children }) {
  const [selectedScreen, setSelectedScreen] = useState(navigationScreens[0])

  return (
    <NavigationContext.Provider value={{ selectedScreen, setSelectedScreen }}>
      {children}
    </NavigationContext.Provider>
  )
}
