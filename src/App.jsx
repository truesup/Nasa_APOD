import { useContext } from 'react'
import { NavigationContext } from './contexts/NavigationContext'
import Particles from './components/bits/Particles'
import Greeting from './components/screens/Greeting'
import HowTo from './components/screens/HowTo'
import PickDate from './components/screens/PickDate'
import Final from './components/screens/Final'
import styles from './App.module.css'

export default function App() {
  const { selectedScreen } = useContext(NavigationContext)

  const renderScreen = () => {
    switch (selectedScreen) {
      case 'greeting':
        return <Greeting />
      case 'howto':
        return <HowTo />
      case 'pickDate':
        return <PickDate />
      case 'final':
        return <Final />
      default:
        return null
    }
  }

  return (
    <>
      <div className={styles.particlesWrapper}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={30}
          speed={0.04}
          particleBaseSize={140}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className={styles.contentWrapper}>{renderScreen()}</div>
    </>
  )
}
