import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { createNoticia } from '../services/noticiaService'
import './RegisterNewsPage.css'

const CATEGORIAS = ['AVISO', 'TI', 'EVENTOS', 'RH', 'COMUNICADO', 'GERAL']

const schema = z.object({
  titulo: z.string().min(3, 'Título é obrigatório (mínimo 3 caracteres)'),
  resumo: z.string().min(10, 'Resumo é obrigatório (mínimo 10 caracteres)'),
  conteudo: z.string().min(20, 'Conteúdo é obrigatório (mínimo 20 caracteres)'),
  categoria: z.string().min(1, 'Selecione uma categoria'),
  autor: z.string().min(2, 'Nome do autor é obrigatório'),
  foto_autor: z.any().optional(),
  imagem_capa: z
    .any()
    .refine((f) => f && f.length > 0, 'Imagem de capa é obrigatória'),
})

export default function RegisterNewsPage() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const capaWatch = watch('imagem_capa')
  const fotoWatch = watch('foto_autor')

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append('titulo', data.titulo)
    formData.append('resumo', data.resumo)
    formData.append('conteudo', data.conteudo)
    formData.append('categoria', data.categoria)
    formData.append('autor', data.autor)
    if (data.foto_autor?.[0]) formData.append('foto_autor', data.foto_autor[0])
    if (data.imagem_capa?.[0]) formData.append('imagem_capa', data.imagem_capa[0])

    try {
      await createNoticia(formData)
      navigate('/')
    } catch (err) {
      console.error(err)
      alert('Erro ao cadastrar notícia. Verifique se a API está rodando em http://127.0.0.1:8000')
    }
  }

  return (
    <div className="register-page">
      <div className="register-inner">
        <Link to="/" className="btn-voltar">
          ← Voltar ao feed
        </Link>

        <h1 className="register-titulo">Cadastrar uma nova Notícia</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="register-form" noValidate>
          <div className="field-group">
            <label htmlFor="titulo">Título da Notícia *</label>
            <input
              id="titulo"
              {...register('titulo')}
              placeholder="Escreva o título da sua notícia"
              className={errors.titulo ? 'input-error' : ''}
            />
            {errors.titulo && (
              <span className="field-error">{errors.titulo.message}</span>
            )}
          </div>

          <div className="field-group">
            <label htmlFor="resumo">Resumo do Conteúdo *</label>
            <input
              id="resumo"
              {...register('resumo')}
              placeholder="Escreva o resumo da sua notícia"
              className={errors.resumo ? 'input-error' : ''}
            />
            {errors.resumo && (
              <span className="field-error">{errors.resumo.message}</span>
            )}
          </div>

          <div className="field-group">
            <label htmlFor="conteudo">Conteúdo *</label>
            <textarea
              id="conteudo"
              {...register('conteudo')}
              rows={8}
              placeholder="Escreva o conteúdo da sua notícia"
              className={errors.conteudo ? 'input-error' : ''}
            />
            {errors.conteudo && (
              <span className="field-error">{errors.conteudo.message}</span>
            )}
          </div>

          <div className="field-row">
            <div className="field-group">
              <label htmlFor="categoria">Categoria *</label>
              <select
                id="categoria"
                {...register('categoria')}
                className={errors.categoria ? 'input-error' : ''}
              >
                <option value="">Selecione a Categoria</option>
                {CATEGORIAS.map((c) => (
                  <option key={c} value={c}>{c.charAt(0) + c.slice(1).toLowerCase()}</option>
                ))}
              </select>
              {errors.categoria && (
                <span className="field-error">{errors.categoria.message}</span>
              )}
            </div>

            <div className="field-group">
              <label htmlFor="autor">Autor da Notícia *</label>
              <input
                id="autor"
                {...register('autor')}
                placeholder="Nome do Autor"
                className={errors.autor ? 'input-error' : ''}
              />
              {errors.autor && (
                <span className="field-error">{errors.autor.message}</span>
              )}
            </div>

            <div className="field-group">
              <label>Foto do Autor</label>
              <label className="file-btn" htmlFor="foto_autor">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                </svg>
                {fotoWatch?.[0] ? fotoWatch[0].name.slice(0, 16) + '...' : 'Procurar Arquivo'}
                <input
                  id="foto_autor"
                  type="file"
                  accept="image/*"
                  {...register('foto_autor')}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          </div>

          <div className="field-group">
            <label>Imagem de Capa *</label>
            <label
              className={`upload-area ${errors.imagem_capa ? 'upload-error' : ''}`}
              htmlFor="imagem_capa"
            >
              <input
                id="imagem_capa"
                type="file"
                accept="image/*"
                {...register('imagem_capa')}
                style={{ display: 'none' }}
              />
              {capaWatch?.[0] ? (
                <div className="upload-success">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p>{capaWatch[0].name}</p>
                </div>
              ) : (
                <>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <p>
                    <span className="upload-link">Clique para fazer o upload</span> da capa da sua notícia
                  </p>
                </>
              )}
            </label>
            {errors.imagem_capa && (
              <span className="field-error">{errors.imagem_capa.message}</span>
            )}
          </div>

          <div className="register-actions">
            <Link to="/" className="btn-cancel">Cancelar</Link>
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="btn-spinner" /> Cadastrando...
                </>
              ) : (
                'Cadastrar notícia'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
