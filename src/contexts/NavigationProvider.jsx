import { useState } from 'react'
import { NavigationContext } from './NavigationContext'

const navigationScreens = ['greeting', 'howto', 'pickDate', 'final']

export default function NavigationProvider({ children }) {
  const [selectedScreen, setSelectedScreen] = useState(navigationScreens[0])

  const goToNext = () => {
    const currentIndex = navigationScreens.indexOf(selectedScreen)
    if (currentIndex < navigationScreens.length - 1) {
      setSelectedScreen(navigationScreens[currentIndex + 1])
    }
  }

  const goToPrev = () => {
    const currentIndex = navigationScreens.indexOf(selectedScreen)
    if (currentIndex > 0) {
      setSelectedScreen(navigationScreens[currentIndex - 1])
    }
  }

  return (
    <NavigationContext.Provider
      value={{ selectedScreen, setSelectedScreen, goToNext, goToPrev }}>
      {children}
    </NavigationContext.Provider>
  )
}
