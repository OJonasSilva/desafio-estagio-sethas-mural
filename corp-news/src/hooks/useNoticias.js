import { useState, useEffect, useCallback } from 'react'
import { fetchNoticias, MOCK_NOTICIAS } from '../services/noticiaService'

export function useNoticias() {
  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const carregar = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const dados = await fetchNoticias()
      setNoticias(dados)
    } catch (err) {
      console.warn('API indisponível, usando dados mock:', err.message)
      setNoticias(MOCK_NOTICIAS)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    carregar()
  }, [carregar])

  return { noticias, loading, error, recarregar: carregar }
}
