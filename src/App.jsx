import Particles from './components/bits/Particles'
import Greeting from './components/screens/Greeting'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <div className={styles.particlesWrapper}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={30}
          speed={0.1}
          particleBaseSize={140}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>
      <div className={styles.contentWrapper}>
        {/* тут идут компоненты с контентом */}
        <Greeting />
      </div>
    </>
  )
}
