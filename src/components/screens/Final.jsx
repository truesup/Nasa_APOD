import { useContext, useMemo, useState } from 'react'
import { NasaContext } from '../../contexts/NasaContext'
import styles from './Final.module.css'

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default function Final() {
  const { selectedDate, setSelectedDate, nasaData, setNasaData } =
    useContext(NasaContext)
  const [modalOpen, setModalOpen] = useState(false)

  const { day, monthName, year } = useMemo(() => {
    if (!selectedDate) return { day: '', monthName: '', year: '' }
    const [yyyy, mm, dd] = selectedDate.split('-')
    const monthIndex = Number(mm) - 1
    return {
      day: dd,
      monthName: MONTH_NAMES[monthIndex],
      year: yyyy,
    }
  }, [selectedDate])

  const imgSrc = nasaData.hdurl || nasaData.url

  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.textWrapper}>
          <p className={styles.title}>{nasaData.title}</p>
          <div className={styles.dateWrapper}>
            <p className={styles.dateType}>
              Day - <span className={styles.dateSpan}>{day}</span>
            </p>
            |
            <p className={styles.dateType}>
              Month - <span className={styles.dateSpan}>{monthName}</span>
            </p>
            |
            <p className={styles.dateType}>
              Year - <span className={styles.dateSpan}>{year}</span>
            </p>
          </div>
          <p className={styles.explanation}>{nasaData.explanation}</p>
          <div className={styles.btnWrapper}>
            <button className={styles.newDateBtn}>Try another date</button>
          </div>
        </div>
        <div className={styles.photoWrapper}>
          {nasaData.media_type === 'video' ? (
            <iframe
              title={nasaData.title}
              src={nasaData.url}
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
              className={styles.media}
            />
          ) : (
            <img
              src={imgSrc}
              alt={nasaData.title}
              className={styles.media}
              onClick={() => setModalOpen(true)}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
      </div>

      {modalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalOpen(false)}>
          <button
            className={styles.modalClose}
            onClick={() => setModalOpen(false)}>
            ×
          </button>
          <img
            src={imgSrc}
            alt={nasaData.title}
            className={styles.modalImage}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
