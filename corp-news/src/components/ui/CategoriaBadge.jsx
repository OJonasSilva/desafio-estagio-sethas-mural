import { getCategoriaEstilo } from '../../utils/helpers'

export default function CategoriaBadge({ categoria }) {
  const estilo = getCategoriaEstilo(categoria)
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        backgroundColor: estilo.bg,
        color: estilo.text,
      }}
    >
      {estilo.label}
    </span>
  )
}
