

function sair() {

    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = ('../login/login.html')

}

let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let logado = document.querySelector('#logado');
logado.innerHTML = `ola ${userLogado.nome}`

if (localStorage.getItem('token') == null) {
    alert('vc precisa estar logado');
    window.location.href = ('../login/login.html')
}