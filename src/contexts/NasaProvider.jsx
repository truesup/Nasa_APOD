import { useEffect, useState } from 'react'
import { NasaContext } from './NasaContext'
import { API_KEY } from '../utils/api_key'

export default function NasaProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(null)
  const [nasaData, setNasaData] = useState(null)
  const [error, setError] = useState(null)

  return (
    <NasaContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        nasaData,
        setNasaData,
        error,
        setError,
      }}>
      {children}
    </NasaContext.Provider>
  )
}
