import { Link } from 'react-router-dom'
import './Header.css'

const USUARIO = { nome: 'Jonas Nascimento', avatar: null }

function Iniciais(nome) {
  return nome
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <span className="logo-corp">CORP</span>
          <span className="logo-news">NEWS</span>
        </Link>

        <div className="header-user">
          <div className="user-avatar">
            {USUARIO.avatar ? (
              <img src={USUARIO.avatar} alt={USUARIO.nome} />
            ) : (
              <span>{Iniciais(USUARIO.nome)}</span>
            )}
          </div>
          <span className="user-name">{USUARIO.nome}</span>
        </div>
      </div>
    </header>
  )
}
