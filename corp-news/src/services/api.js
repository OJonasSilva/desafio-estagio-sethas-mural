import axios from 'axios'
const BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/corpnews_api'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
  
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Erro na API:', error.response.status, error.response.data)
    } else if (error.request) {
      console.error('Sem resposta da API:', error.request)
    } else {
      console.error('Erro ao configurar requisição:', error.message)
    }
    return Promise.reject(error)
  }
)

export default api
