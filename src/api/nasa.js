import axios from 'axios'
import { API_KEY } from '../utils/api_key'

export const fetchNasaData = async date => {
  try {
    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
    )
    return data
  } catch (err) {
    console.log(err)
  }
}
