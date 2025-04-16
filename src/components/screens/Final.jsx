import { useContext } from 'react'
import { NasaContext } from '../../contexts/NasaContext'

export default function Final() {
  const { selectedDate, setSelectedDate, nasaData, setNasaData } =
    useContext(NasaContext)

  return (
    <div>
      <p style={{ color: 'white' }}>{nasaData.explanation}</p>
    </div>
  )
}
