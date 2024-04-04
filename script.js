const btnLogin = document.querySelector('#btnLogin')
const fieldUser = document.querySelector('#user')
const fieldPassword = document.querySelector('#senha')
const formLogin = document.querySelector("#form-login")

const user = {
    'login': 'admin',
    'senha': '123'
}

function userIsAuthenticated() {
    return user.login === fieldUser.value && user.senha === fieldPassword.value
}

function resetFormLogin() {
    formLogin.reset()
}

function login() {

    if (userIsAuthenticated()) {
        localStorage.setItem('user', user.login)
        resetFormLogin()
        window.location.href = "pages/contatos.html"
    } else {
        localStorage.removeItem('user')
        resetFormLogin()
        alert('Usuário/Senha inválidos.')
    }
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    login()
})
