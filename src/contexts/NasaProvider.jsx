import { useEffect, useState } from 'react'
import { NasaContext } from './NasaContext'
import { API_KEY } from '../utils/api_key'

export default function NasaProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(null)
  const [nasaData, setNasaData] = useState(null)
  const [error, setError] = useState(null)

  // useEffect(() => {
  //   const fetchNasaData = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate}`
  //       )
  //       setNasaData(data)
  //       console.log(nasaData)
  //     } catch (err) {
  //       setError(err.response?.data?.msg || 'Failed to fetch, sorry :(')
  //     }
  //   }
  // }, [selectedDate])

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
