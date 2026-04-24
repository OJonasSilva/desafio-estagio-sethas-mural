import { Link } from 'react-router-dom'
import CategoriaBadge from '../ui/CategoriaBadge'
import AutorAvatar from '../ui/AutorAvatar'
import { formatarData } from '../../utils/helpers'
import './NewsCard.css'

export default function NewsCardGrande({ noticia }) {
  return (
    <Link to={`/noticias/${noticia.id}`} className="news-card-grande">
      <div className="card-grande-img">
        {noticia.imagem_capa ? (
          <img src={noticia.imagem_capa} alt={noticia.titulo} />
        ) : (
          <div className="card-img-placeholder" />
        )}
      </div>
      <div className="card-grande-body">
        <h2 className="card-grande-titulo">{noticia.titulo}</h2>
        {noticia.resumo && (
          <p className="card-grande-resumo">{noticia.resumo}</p>
        )}
        <div className="card-meta">
          <AutorAvatar nome={noticia.autor} foto={noticia.foto_autor} size={32} />
          <span className="card-autor">{noticia.autor || 'Autor'}</span>
          <span className="card-data">{formatarData(noticia.data_publicacao)}</span>
        </div>
      </div>
    </Link>
  )
}
