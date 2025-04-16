import axios from 'axios'
import { API_KEY } from '../utils/api_key'

export const fetchNasaData = async date => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
    )
    console.log(response.data)
  } catch (err) {
    console.error('Error fetching NASA data: ', err)
    throw err
  }
}
