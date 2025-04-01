import { useEffect, useRef } from 'react'
import DecryptedText from '../bits/DecryptedText'
import styles from './Greeting.module.css'

export default function Greeting() {
  const buttonRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.style.opacity = 1
        buttonRef.current.classList.add(styles.roundBtnPositioned)
      }
    }, 1600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.wrapper}>
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
      <button ref={buttonRef} className={styles.roundBtn}>
        →
      </button>
    </div>
  )
}
