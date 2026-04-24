import './ModalConfirmar.css'

export default function ModalConfirmar({ titulo, mensagem, onConfirmar, onCancelar, loading }) {
  return (
    <div className="modal-overlay" onClick={onCancelar}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-titulo">{titulo}</h3>
        <p className="modal-mensagem">{mensagem}</p>
        <div className="modal-acoes">
          <button className="btn-cancelar" onClick={onCancelar} disabled={loading}>
            Cancelar
          </button>
          <button className="btn-confirmar" onClick={onConfirmar} disabled={loading}>
            {loading ? 'Excluindo...' : 'Sim, excluir'}
          </button>
        </div>
      </div>
    </div>
  )
}
