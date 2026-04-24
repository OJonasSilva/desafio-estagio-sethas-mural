import api from './api'

export const fetchNoticias = async () => {
  const response = await api.get('/noticias/')
  return response.data
}

/**
  @param {string|number} id
 */
export const fetchNoticiaById = async (id) => {
  const response = await api.get(`/noticias/${id}/`)
  return response.data
}

/**
 @param {FormData} formData
 */
export const createNoticia = async (formData) => {
  const response = await api.post('/noticias/', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return response.data
}

/**
 @param {string|number} id
 */
export const deleteNoticia = async (id) => {
  const response = await api.delete(`/noticias/${id}/`)
  return response.data
}

export const MOCK_NOTICIAS = [
  {
    id: 1,
    titulo: 'Atualização no Sistema de Ponto Eletrônico',
    resumo: 'Com novos recursos injetados na Secretaria de Estado do Trabalho, da Habitação e da Assistência Social – SETHAS, novo prédio é inaugurado',
    conteudo: 'Informamos todos os colaboradores que a partir do dia 1 do próximo mês, o antigo sistema web de relógio de ponto será desativado. O registo de entradas e saídas passará a ser realizado exclusivamente através da nova aplicação móvel CORP HR, já disponível para download nas lojas de aplicações. Em caso de dúvidas, contacte o suporte do RH.\n\nA partir dessa data, todos os registros de entrada, saída e demais marcações de ponto deverão ser realizados exclusivamente por meio da nova aplicação móvel CORP HR, que já se encontra disponível para download nas principais lojas de aplicativos (Android e iOS).\n\nReforçamos a importância de que todos os colaboradores realizem a instalação do aplicativo com antecedência e se familiarizem com seu funcionamento, a fim de evitar inconsistências no registro de ponto após a desativação do sistema antigo.',
    categoria: 'AVISO',
    autor: 'Jonas Nascimento',
    foto_autor: null,
    imagem_capa: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    data_publicacao: '2026-04-09',
  },
  {
    id: 2,
    titulo: 'Manutenção Programada dos Servidores Principais',
    resumo: 'Os servidores passarão por manutenção preventiva no próximo final de semana.',
    conteudo: 'Informamos que haverá manutenção programada nos servidores principais no próximo sábado, das 22h às 06h de domingo. Durante este período, alguns serviços poderão ficar indisponíveis.',
    categoria: 'TI',
    autor: 'Jonas Nascimento',
    foto_autor: null,
    imagem_capa: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    data_publicacao: '2026-04-04',
  },
  {
    id: 3,
    titulo: 'Arraial da SETHAS 2026: Garanta a sua participação!',
    resumo: 'O tradicional arraial da secretaria está chegando com muitas novidades e atrações especiais.',
    conteudo: 'É com grande prazer que anunciamos o Arraial da SETHAS 2026. O evento acontecerá no dia 01 de julho, no pátio central da secretaria, com início às 18h. Haverá quadrilha, comidas típicas, brincadeiras e muita diversão para toda a família.',
    categoria: 'EVENTOS',
    autor: 'Jonas Nascimento',
    foto_autor: null,
    imagem_capa: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    data_publicacao: '2026-01-07',
  },
  {
    id: 4,
    titulo: 'Boas-vindas aos Novos Estagiários de Tecnologia',
    resumo: 'A equipe de TI dá as boas-vindas aos novos talentos que iniciam sua jornada conosco.',
    conteudo: 'Nesta semana recebemos 8 novos estagiários na área de tecnologia. Eles passarão por uma semana de integração antes de se juntarem aos seus respectivos times.',
    categoria: 'AVISO',
    autor: 'Jonas Nascimento',
    foto_autor: null,
    imagem_capa: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    data_publicacao: '2026-04-10',
  },
  {
    id: 5,
    titulo: 'Novo Curso de Cibersegurança Disponível',
    resumo: 'A plataforma de capacitação disponibilizou um novo módulo sobre segurança digital.',
    conteudo: 'Está disponível na plataforma de EAD o novo curso "Segurança Digital no Trabalho". O curso tem carga horária de 8 horas e é recomendado para todos os colaboradores com acesso a sistemas internos.',
    categoria: 'AVISO',
    autor: 'Jonas Nascimento',
    foto_autor: null,
    imagem_capa: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    data_publicacao: '2026-04-11',
  },
  {
    id: 6,
    titulo: 'Campanha Anual de Vacinação contra a Gripe',
    resumo: 'A campanha de vacinação contra influenza chegou. Confira os locais e horários.',
    conteudo: 'A Campanha Anual de Vacinação contra a Gripe está disponível para todos os colaboradores. As doses serão aplicadas na recepção do bloco A, de segunda a sexta, das 09h às 16h, até o dia 30 deste mês.',
    categoria: 'AVISO',
    autor: 'Jonas Nascimento',
    foto_autor: null,
    imagem_capa: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
    data_publicacao: '2026-04-09',
  },
]
