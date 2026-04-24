import './Footer.css'

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    if (email) alert(`Inscrição realizada para: ${email}`)
  }

  return (
    <footer>
      <div className="footer-newsletter">
        <div className="newsletter-overlay">
          <p className="newsletter-title">Se inscreva para receber as atualizações</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Insira seu e-mail"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">
              Enviar →
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="logo-corp">CORP</span>
            <span className="logo-news">NEWS</span>
          </div>
          <p className="footer-copy">
            Copyright © 2026 CORP Inc.<br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
