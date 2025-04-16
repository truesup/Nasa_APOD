import { useEffect, useState } from 'react'
import { NasaContext } from './NasaContext'
import { fetchNasaData } from '../api/nasa'

export default function NasaProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(null)
  const [nasaData, setNasaData] = useState(null)

  useEffect(() => {
    if (!selectedDate) return

    const getData = async () => {
      try {
        const response = await fetchNasaData(selectedDate)
        setNasaData(response)
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  }, [selectedDate])

  // useEffect(() => {
  //   console.log('me nasa data: ', nasaData)
  // }, [nasaData])

  return (
    <NasaContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        nasaData,
        setNasaData,
      }}>
      {children}
    </NasaContext.Provider>
  )
}
