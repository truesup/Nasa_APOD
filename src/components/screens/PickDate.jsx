import { useState } from 'react'
import DecryptedText from '../bits/DecryptedText'
import styles from './PickDate.module.css'

export default function PickDate() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const handleDayInputChange = e => {
    setDay(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log('form submitted manually')
  }

  return (
    <div className={styles.wrapper}>
      <DecryptedText
        text="enter a date and access the cosmic snapshot nasa archived on that day."
        speed={70}
        maxIterations={40}
        sequential={true}
        revealDirection="start"
        useOriginalCharsOnly={false}
        animateOn="view"
        className={styles.title}
        encryptedClassName={styles.titleEncrypted}
      />
      <div className={styles.inputsWrapper}>
        <p className={styles.inputsTitle}>The date goes here (DD.MM.YYYY):</p>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="day">Day -</label>
          <input
            id="day"
            type="number"
            onChange={handleDayInputChange}
            required
          />
        </form>
      </div>
    </div>
  )
}
