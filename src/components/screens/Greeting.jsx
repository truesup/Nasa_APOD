import { useContext, useEffect, useRef } from 'react'
import { NavigationContext } from '../../contexts/NavigationContext'
import { GlobalLoadingContext } from '../../contexts/GlobalLoadingContext'
import DecryptedText from '../bits/DecryptedText'
import GlobalLoader from '../UI/GlobalLoader'
import styles from './Greeting.module.css'

export default function Greeting() {
  const wrapperRef = useRef(null)
  const buttonRef = useRef(null)
  const { goToNext } = useContext(NavigationContext)
  const { isGloballyLoading, setIsGloballyLoading } =
    useContext(GlobalLoadingContext)

  useEffect(() => {
    console.log('Navigation note: Greeting component rendered!')
  }, [])

  useEffect(() => {
    console.log(`loading state: ${isGloballyLoading}`)
  }, [isGloballyLoading])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.style.opacity = 1
        buttonRef.current.classList.add(styles.roundBtnPositioned)
      }
    }, 1700)

    return () => clearTimeout(timer)
  }, [])

  const handleButtonClick = () => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.add(styles.wrapperHidden)
    }

    setIsGloballyLoading(true)

    setTimeout(() => {
      goToNext()
      setIsGloballyLoading(false)
    }, 3000)
  }

  return (
    <>
      <div ref={wrapperRef} className={styles.wrapper}>
        <DecryptedText
          text="explore the universe"
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
      {isGloballyLoading && <GlobalLoader className={styles.loader} />}
    </>
  )
}
