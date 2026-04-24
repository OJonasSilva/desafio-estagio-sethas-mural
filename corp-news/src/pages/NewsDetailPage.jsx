import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { fetchNoticiaById, deleteNoticia, MOCK_NOTICIAS } from '../services/noticiaService'
import { formatarData } from '../utils/helpers'
import CategoriaBadge from '../components/ui/CategoriaBadge'
import AutorAvatar from '../components/ui/AutorAvatar'
import ModalConfirmar from '../components/ui/ModalConfirmar'
import './NewsDetailPage.css'

export default function NewsDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [noticia, setNoticia] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [confirmandoDelete, setConfirmandoDelete] = useState(false)
  const [deletando, setDeletando] = useState(false)

  useEffect(() => {
    const carregar = async () => {
      setLoading(true)
      setError(null)
      try {
        const dados = await fetchNoticiaById(id)
        setNoticia(dados)
      } catch (err) {
        const mock = MOCK_NOTICIAS.find((n) => String(n.id) === String(id))
        if (mock) {
          setNoticia(mock)
        } else {
          setError('Notícia não encontrada.')
        }
      } finally {
        setLoading(false)
      }
    }
    carregar()
  }, [id])

  const handleDelete = async () => {
    setDeletando(true)
    try {
      await deleteNoticia(id)
      navigate('/')
    } catch (err) {
      alert('Erro ao excluir notícia.')
      setDeletando(false)
      setConfirmandoDelete(false)
    }
  }

  if (loading) {
    return (
      <div className="detail-estado">
        <div className="loading-spinner" />
        <p>Carregando notícia...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="detail-estado detail-erro">
        <p>⚠️ {error}</p>
        <Link to="/" className="btn-voltar">← Voltar ao feed</Link>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <div className="detail-inner">
        <Link to="/" className="btn-voltar">
          ← Voltar ao feed
        </Link>

        <div className="detail-meta-topo">
          <CategoriaBadge categoria={noticia.categoria} />
          <span className="detail-data">{formatarData(noticia.data_publicacao)}</span>
        </div>

        <h1 className="detail-titulo">{noticia.titulo}</h1>

        {noticia.resumo && (
          <p className="detail-resumo">{noticia.resumo}</p>
        )}

        {noticia.imagem_capa && (
          <div className="detail-capa">
            <img src={noticia.imagem_capa} alt={noticia.titulo} />
          </div>
        )}

        <div className="detail-autor-row">
          <div className="detail-autor">
            <AutorAvatar nome={noticia.autor} foto={noticia.foto_autor} size={44} />
            <span className="detail-autor-nome">{noticia.autor}</span>
          </div>
          <button
            className="btn-delete-detalhe"
            onClick={() => setConfirmandoDelete(true)}
            title="Excluir notícia"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14H6L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4h6v2" />
            </svg>
          </button>
        </div>

        <div className="detail-conteudo">
          {noticia.conteudo?.split('\n\n').map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}
        </div>
      </div>

      {confirmandoDelete && (
        <ModalConfirmar
          titulo="Excluir notícia"
          mensagem={`Deseja excluir "${noticia.titulo}"? Esta ação não pode ser desfeita.`}
          onConfirmar={handleDelete}
          onCancelar={() => setConfirmandoDelete(false)}
          loading={deletando}
        />
      )}
    </div>
  )
}
