/* ANIMAÇÂO DE ESCRITA NA PÁGINA */
var typed = new Typed('.titulo-principal', {
  strings: ['Mais Saúde'],
  typeSpeed: 100,
  loop: false
})

/* SCOLL REVEAL */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: false
})

scrollReveal.reveal(
  `.navegacao, .titulo-secao, .container-sobre-nos div, 
  .container-servicos .card-servico, .container-blog .card-blog, 
  .container-contatos div, .rodape p, .container-quem-somos 
  .card-profissionais`,
  {
    interval: 100
  }
)
