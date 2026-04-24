export function getSaudacao() {
  const hora = new Date().getHours()
  if (hora >= 5 && hora < 12) return { texto: 'Bom dia', icone: '☀️' }
  if (hora >= 12 && hora < 18) return { texto: 'Boa tarde', icone: '🌤️' }
  return { texto: 'Boa noite', icone: '🌙' }
}

/**
 @param {string} dataISO
 */
export function formatarData(dataISO) {
  if (!dataISO) return ''
  const [ano, mes, dia] = dataISO.split('-')
  return `${dia}/${mes}/${ano}`
}

export const CATEGORIA_CORES = {
  AVISO: { bg: '#dcfce7', text: '#15803d', label: 'Aviso' },
  TI: { bg: '#dbeafe', text: '#1d4ed8', label: 'TI' },
  EVENTOS: { bg: '#fef9c3', text: '#a16207', label: 'Eventos' },
  RH: { bg: '#fce7f3', text: '#be185d', label: 'RH' },
  COMUNICADO: { bg: '#f3e8ff', text: '#7e22ce', label: 'Comunicado' },
  GERAL: { bg: '#f1f5f9', text: '#475569', label: 'Geral' },
}

export function getCategoriaEstilo(categoria) {
  return CATEGORIA_CORES[categoria?.toUpperCase()] || CATEGORIA_CORES.GERAL
}
