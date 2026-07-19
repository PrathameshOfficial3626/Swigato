import axios from 'axios'

const api = axios.create({
  baseURL: '/mockFoodData.json',
  timeout: 5000,
})

export const fetchFoodData = async () => {
  const response = await api.get()
  return response.data
}
