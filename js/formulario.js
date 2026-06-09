const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const assunto = document.querySelector('#assunto')
const mensagem = document.querySelector('#mensagem')

// regex pra checar se o e-mail tem pelo menos um @ e um ponto
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// valida o nome quando o usuário sai do campo
nome.addEventListener('blur', () => {
    if (nome.value.trim() == '') {
        document.querySelector('#erroNome').innerHTML = 'Campo obrigatório!'
    } else {
        document.querySelector('#erroNome').innerHTML = ''
    }
})

// valida o e-mail quando o usuário sai do campo
email.addEventListener('blur', () => {
    if (!regexEmail.test(email.value)) {
        document.querySelector('#erroEmail').innerHTML = 'E-mail inválido.'
    } else {
        document.querySelector('#erroEmail').innerHTML = ''
    }
})

// valida o tamanho da mensagem quando o usuário sai do campo
mensagem.addEventListener('blur', () => {
    if (mensagem.value.trim().length < 10) {
        document.querySelector('#erroMensagem').innerHTML = 'Mensagem muito curta.'
    } else {
        document.querySelector('#erroMensagem').innerHTML = ''
    }
})

// valida tudo de novo quando tenta enviar
document.querySelector('#formContato').addEventListener('submit', (e) => {
    e.preventDefault()

    let ok = true

    if (nome.value.trim() == '') {
        document.querySelector('#erroNome').innerHTML = 'Campo obrigatório!'
        ok = false
    }
    if (!regexEmail.test(email.value)) {
        document.querySelector('#erroEmail').innerHTML = 'E-mail inválido.'
        ok = false
    }
    if (assunto.value == '') {
        document.querySelector('#erroAssunto').innerHTML = 'Selecione um assunto.'
        ok = false
    }
    if (mensagem.value.trim().length < 10) {
        document.querySelector('#erroMensagem').innerHTML = 'Mensagem muito curta.'
        ok = false
    }

    if (!ok) return

    // tudo certo, esconde o formulário e mostra a confirmação
    document.querySelector('#confirmado').style.display = 'block'
    document.querySelector('#formContato').style.display = 'none'
})
