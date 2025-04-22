import { useContext, useEffect, useRef } from 'react'
import { NavigationContext } from '../../contexts/NavigationContext'
import { GlobalLoadingContext } from '../../contexts/GlobalLoadingContext'
import DecryptedText from '../bits/DecryptedText'
import GlobalLoader from '../UI/GlobalLoader'
import styles from './HowTo.module.css'

export default function HowTo() {
  const mainWrapperRef = useRef(null)
  const infoWrapperRef = useRef(null)
  const buttonRef = useRef(null)
  const { goToNext } = useContext(NavigationContext)
  const { isGloballyLoading, setIsGloballyLoading } =
    useContext(GlobalLoadingContext)

  useEffect(() => {
    if (mainWrapperRef.current) {
      mainWrapperRef.current.classList.add(styles.wrapperVisible)
    }

    const infoTimer = setTimeout(() => {
      if (infoWrapperRef.current) {
        infoWrapperRef.current.classList.add(styles.infoWrapperVisible)
      }
    }, 2700)

    return () => clearTimeout(infoTimer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.style.opacity = 1
        buttonRef.current.classList.add(styles.roundBtnPositioned)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleButtonClick = () => {
    if (mainWrapperRef.current) {
      mainWrapperRef.current.classList.add(styles.wrapperHidden)
    }

    setIsGloballyLoading(true)

    setTimeout(() => {
      goToNext()
      setIsGloballyLoading(false)
    }, 3000)
  }

  return (
    <>
      <div ref={mainWrapperRef} className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <DecryptedText
            text="how does this app actually work?"
            speed={70}
            maxIterations={40}
            sequential={true}
            revealDirection="start"
            useOriginalCharsOnly={false}
            animateOn="view"
            className={styles.title}
            encryptedClassName={styles.titleEncrypted}
          />
          <button
            ref={buttonRef}
            className={styles.roundBtn}
            onClick={handleButtonClick}>
            →
          </button>
        </div>
        <div ref={infoWrapperRef} className={styles.infoWrapper}>
          <p>
            This application serves as your personal gateway to the cosmos. It
            connects directly to NASA’s Astronomy Picture of the Day archive —
            delivering stunning, real-time space imagery and insights from
            official NASA data streams.
          </p>
          <p>Each visit brings you a new glimpse into the universe:</p>
          <ul>
            <li>
              Spectacular photos from satellites, space telescopes, and rovers.
            </li>
            <li>
              Scientific context to help you understand what you’re seeing.
            </li>
            <li>
              A moment to disconnect from the noise — and reconnect with the
              stars.
            </li>
          </ul>
          <p>
            No distractions. No barriers. Just space — carefully curated,
            thoughtfully explained, and seamlessly delivered to ignite your
            curiosity, expand your perspective, and bring the wonders of the
            universe a little closer each day.
          </p>
        </div>
      </div>
      {isGloballyLoading && (
        <GlobalLoader
          className={styles.loader}
          text="Retrieving Unique Celestial Artifacts — Digitizing Cosmic Catalogue…"
        />
      )}
    </>
  )
}
