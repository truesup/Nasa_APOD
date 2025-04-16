import { useState, useRef, useEffect, useContext } from 'react'
import { NavigationContext } from '../../contexts/NavigationContext'
import { GlobalLoadingContext } from '../../contexts/GlobalLoadingContext'
import { NasaContext } from '../../contexts/NasaContext'
import DecryptedText from '../bits/DecryptedText'
import GlobalLoader from '../UI/GlobalLoader'
import styles from './PickDate.module.css'

export default function PickDate() {
  const mainWrapperRef = useRef(null)
  const infoWrapperRef = useRef(null)
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const { goToNext } = useContext(NavigationContext)
  const { isGloballyLoading, setIsGloballyLoading } =
    useContext(GlobalLoadingContext)
  const { selectedDate, setSelectedDate } = useContext(NasaContext)

  useEffect(() => {
    if (mainWrapperRef.current) {
      mainWrapperRef.current.classList.add(styles.mainWrapperVisible)
    }

    const infoTimer = setTimeout(() => {
      if (infoWrapperRef.current) {
        infoWrapperRef.current.classList.add(styles.infoWrapperVisible)
      }
    }, 3800)

    return () => clearTimeout(infoTimer)
  }, [])

  const today = new Date().toLocaleDateString('en-GB')

  const handleDayInputChange = e => {
    const value = e.target.value
    if (/^\d*$/.test(value)) {
      if (+value > 31) return
      setDay(value)
    }
  }

  const handleMonthInputChange = e => {
    const value = e.target.value
    if (/^\d*$/.test(value)) {
      if (+value > 12) return
      setMonth(value)
    }
  }

  const handleYearInputChange = e => {
    const value = e.target.value
    const currentYear = new Date().getFullYear()

    if (!/^\d*$/.test(value)) return

    if (value.length === 1 && value !== '1' && value !== '2') return
    if (value.length === 2 && value !== '19' && value !== '20') return
    if (value.length === 3 && !/^19\d|20\d$/.test(value)) return
    if (value.length === 4 && (+value < 1995 || +value > currentYear)) return

    setYear(value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    const dd = day.padStart(2, '0')
    const mm = month.padStart(2, '0')
    const yyyy = year
    setSelectedDate(`${yyyy}-${mm}-${dd}`)

    if (mainWrapperRef.current) {
      mainWrapperRef.current.classList.add(styles.mainWrapperHidden)
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
        <DecryptedText
          text="enter a date and access the cosmic snapshot nasa archived on that day."
          speed={50}
          maxIterations={40}
          sequential={true}
          revealDirection="start"
          useOriginalCharsOnly={false}
          animateOn="view"
          className={styles.title}
          encryptedClassName={styles.titleEncrypted}
        />
        <div ref={infoWrapperRef} className={styles.inputsWrapper}>
          <p className={styles.timeRange}>
            Available range: from 16/06/1995 to {today}
          </p>
          <p className={styles.inputsTitle}>
            Enter your date here (DD/MM/YYYY):
          </p>
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <div className={styles.onlyInputsWrapper}>
              <div className={styles.oneInputWrapper}>
                <label htmlFor="day" className={styles.label}>
                  Day -
                </label>
                <input
                  id="day"
                  type="text"
                  value={day}
                  onChange={handleDayInputChange}
                  maxLength={2}
                  pattern="\d{1,2}"
                  title="Enter 1 or 2 digits"
                  className={styles.input}
                  autoComplete="off"
                  required
                />
              </div>
              <div className={styles.oneInputWrapper}>
                <label htmlFor="month" className={styles.label}>
                  Month -
                </label>
                <input
                  id="month"
                  type="text"
                  value={month}
                  onChange={handleMonthInputChange}
                  maxLength={2}
                  pattern="\d{1,2}"
                  title="Enter 1 or 2 digits"
                  className={styles.input}
                  autoComplete="off"
                  required
                />
              </div>
              <div className={styles.oneInputWrapper}>
                <label htmlFor="year" className={styles.label}>
                  Year -
                </label>
                <input
                  id="year"
                  type="text"
                  value={year}
                  onChange={handleYearInputChange}
                  maxLength={4}
                  title="Enter 4 digits"
                  pattern="\d{4}"
                  className={styles.input}
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <button
              className={styles.submitBtn}
              disabled={
                !(
                  /^\d{1,2}$/.test(day) &&
                  /^\d{1,2}$/.test(month) &&
                  /^\d{4}$/.test(year)
                )
              }>
              Submit the date
            </button>
          </form>
        </div>
      </div>
      {isGloballyLoading && <GlobalLoader className={styles.loader} />}
    </>
  )
}
