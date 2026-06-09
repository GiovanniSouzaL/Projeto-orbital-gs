// elementos da navbar e do menu mobile
const navbar = document.getElementById('navbar')
const hamburguer = document.getElementById('hamburguer')
const menu = document.getElementById('menu')

// cria o fundo escuro que aparece por trás do menu no celular
const overlay = document.createElement('div')
overlay.id = 'overlay'
document.body.appendChild(overlay)

// quando rola a página, a navbar ganha um fundo pra ficar legível
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('rolada')
    } else {
        navbar.classList.remove('rolada')
    }
})

// clicou no hamburguer - abre ou fecha o menu
hamburguer.addEventListener('click', () => {
    menu.classList.toggle('aberto')
    hamburguer.classList.toggle('aberto')
    overlay.classList.toggle('visivel')
})

// clicou fora do menu (no overlay) - fecha tudo
overlay.addEventListener('click', () => {
    menu.classList.remove('aberto')
    hamburguer.classList.remove('aberto')
    overlay.classList.remove('visivel')
})
