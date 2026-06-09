// abas da página de plataforma
const botoesAba = document.querySelectorAll('.btn-aba')
const paineis = document.querySelectorAll('.painel-aba')

botoesAba.forEach(botao => {
    botao.addEventListener('click', () => {
        const aba = botao.getAttribute('data-aba')

        // tira o ativo de todos e coloca só no que foi clicado
        botoesAba.forEach(b => b.classList.remove('ativo'))
        botao.classList.add('ativo')

        paineis.forEach(painel => {
            if (painel.id === 'painel-' + aba) {
                painel.classList.add('ativo')
            } else {
                painel.classList.remove('ativo')
            }
        })
    })
})

// acordeão do FAQ
const perguntas = document.querySelectorAll('.btn-faq')

perguntas.forEach(btn => {
    btn.addEventListener('click', () => {
        const resposta = btn.nextElementSibling
        const estaAberto = btn.classList.contains('aberto')

        // fecha todas as perguntas antes de abrir a nova
        perguntas.forEach(b => {
            b.classList.remove('aberto')
            if (b.nextElementSibling) b.nextElementSibling.style.maxHeight = null
        })

        // se estava fechado, abre; se já estava aberto, fica fechado
        if (!estaAberto) {
            btn.classList.add('aberto')
            resposta.style.maxHeight = resposta.scrollHeight + 'px'
        }
    })
})
