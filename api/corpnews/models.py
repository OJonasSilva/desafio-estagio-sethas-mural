from django.db import models

class Noticia(models.Model):
    CATEGORIA_CHOICES = [
      ("RH", "RH"),
      ("TI", "TI"),
      ("Evento", "Evento"),
      ("Aviso", "Aviso"),
    ]

    titulo = models.CharField(max_length=150)
    resumo = models.CharField(max_length=250)
    conteudo = models.TextField()
    imagem_capa = models.ImageField(upload_to='noticias/capas/')
    autor = models.CharField(max_length=30)
    foto_autor = models.ImageField(upload_to='autores/fotos/', null=True, blank=True)
    data_publicacao = models.DateField(auto_now_add=True, auto_created=True)
    categoria = models.CharField(max_length=6, choices=CATEGORIA_CHOICES)
    
    def __str__(self):
      return f'{self.titulo} - {self.autor}'
