import { Link } from 'react-router-dom'
import CategoriaBadge from '../ui/CategoriaBadge'
import AutorAvatar from '../ui/AutorAvatar'
import { formatarData } from '../../utils/helpers'

export default function NewsCardPequeno({ noticia, onDelete }) {
  const handleDelete = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onDelete(noticia)
  }

  return (
    <Link to={`/noticias/${noticia.id}`} className="news-card-pequeno">
      <div className="card-pequeno-top">
        <CategoriaBadge categoria={noticia.categoria} />
        <button
          className="btn-delete"
          onClick={handleDelete}
          title="Excluir notícia"
          aria-label="Excluir notícia"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4h6v2" />
          </svg>
        </button>
      </div>
      <h3 className="card-pequeno-titulo">{noticia.titulo}</h3>
      <div className="card-meta" style={{ marginTop: 'auto' }}>
        <AutorAvatar nome={noticia.autor} foto={noticia.foto_autor} size={28} />
        <span className="card-autor">{noticia.autor || 'Autor'}</span>
        <span className="card-data">{formatarData(noticia.data_publicacao)}</span>
      </div>
    </Link>
  )
}
