

let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let input_senha = document.querySelector('#senha')

    if (input_senha.getAttribute('type') == 'password') {
        input_senha.setAttribute('type', 'text');
    } else {
        input_senha.setAttribute('type', 'password');
    }
})

function entrar() {
    let usuario = document.querySelector('#usuario');
    let labelUsuario = document.querySelector('#labelUsuario');
    
    let senha = document.querySelector('#senha');
    let labelSenha = document.querySelector('#labelSenha'); 

    let msgErro = document.querySelector('#msgErro');
    let listaUser = []

    let userValid = {
        nome: '',
        usuario: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    listaUser.forEach((item) => {
        if(usuario.value == item.usuarioCard && senha.value == item.senhaCard) {
            userValid = {
                nome: item.nomeCard,
                user: item.usuarioCard,
                senha: item.senhaCard
            }
        }
    });
    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = ('C:/Users/eliezerzeitoune/Desktop/programação/HTML/autenticacao_de_dados/inicio/inicio.html')

        let token = Math.random().toString(16).substring(2);
        localStorage.setItem('token' , token);

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        labelUsuario.setAttribute('style', 'color: red');
        usuario.setAttribute('style', 'border-color: red');
        labelSenha.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');
    
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = 'usuario ou senha incorretos'
        usuario.focus();
    }
}