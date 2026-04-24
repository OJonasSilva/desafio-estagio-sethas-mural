import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNoticias } from '../hooks/useNoticias'
import { deleteNoticia } from '../services/noticiaService'
import { getSaudacao } from '../utils/helpers'
import NewsCardGrande from '../components/ui/NewsCardGrande'
import NewsCardPequeno from '../components/ui/NewsCardPequeno'
import ModalConfirmar from '../components/ui/ModalConfirmar'
import './FeedPage.css'

export default function FeedPage() {
  const { noticias, loading, error, recarregar } = useNoticias()
  const [noticiaParaDeletar, setNoticiaParaDeletar] = useState(null)
  const [deletando, setDeletando] = useState(false)
  const saudacao = getSaudacao()

  const destaque = noticias[0] || null
  const demais = noticias.slice(1)

  const confirmarDelete = async () => {
    if (!noticiaParaDeletar) return
    setDeletando(true)
    try {
      await deleteNoticia(noticiaParaDeletar.id)
      await recarregar()
    } catch (err) {
      alert('Erro ao excluir notícia. Tente novamente.')
    } finally {
      setDeletando(false)
      setNoticiaParaDeletar(null)
    }
  }

  return (
    <div className="feed-page">
      <div className="feed-inner">
        {/* Saudação */}
        <div className="feed-saudacao">
          <span className="saudacao-icone">{saudacao.icone}</span>
          <span className="saudacao-texto">{saudacao.texto}</span>
        </div>

        <div className="feed-header">
          <h1 className="feed-titulo">Mural de Notícias</h1>
          <Link to="/cadastrar" className="btn-cadastrar">
            + Cadastrar notícia
          </Link>
        </div>

        {loading && (
          <div className="feed-estado">
            <div className="loading-spinner" />
            <p>Carregando notícias...</p>
          </div>
        )}

        {error && !loading && (
          <div className="feed-estado feed-erro">
            <p>⚠️ {error}</p>
            <button onClick={recarregar} className="btn-recarregar">
              Tentar novamente
            </button>
          </div>
        )}

        {/* Feed */}
        {!loading && !error && (
          <>
            {destaque && (
              <div className="feed-destaque">
                <NewsCardGrande noticia={destaque} />
              </div>
            )}

            {demais.length > 0 && (
              <div className="feed-grid">
                {demais.map((noticia) => (
                  <NewsCardPequeno
                    key={noticia.id}
                    noticia={noticia}
                    onDelete={setNoticiaParaDeletar}
                  />
                ))}
              </div>
            )}

            {noticias.length === 0 && (
              <div className="feed-estado">
                <p>Nenhuma notícia publicada ainda.</p>
                <Link to="/cadastrar" className="btn-cadastrar" style={{ marginTop: '1rem' }}>
                  Publicar a primeira notícia
                </Link>
              </div>
            )}
          </>
        )}
      </div>

      {noticiaParaDeletar && (
        <ModalConfirmar
          titulo="Excluir notícia"
          mensagem={`Deseja excluir a notícia "${noticiaParaDeletar.titulo}"? Esta ação não pode ser desfeita.`}
          onConfirmar={confirmarDelete}
          onCancelar={() => setNoticiaParaDeletar(null)}
          loading={deletando}
        />
      )}
    </div>
  )
}
