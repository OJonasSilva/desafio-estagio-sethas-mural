export default function AutorAvatar({ nome, foto, size = 32 }) {
  const iniciais = nome
    ? nome.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase()
    : '?'

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#22c55e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {foto ? (
        <img
          src={foto}
          alt={nome}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span style={{ fontSize: size * 0.38, fontWeight: 600, color: '#fff' }}>
          {iniciais}
        </span>
      )}
    </div>
  )
}
