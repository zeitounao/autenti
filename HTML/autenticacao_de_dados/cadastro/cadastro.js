
let btn = document.querySelector('#verSenha');
let btnConfirma = document.querySelector('#verConfirmaSenha');

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validaNome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validaUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validaSenha = false;

let confirmaSenha = document.querySelector('#confirmaSenha');
let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha');
let validaConfirmaSenha = false;

let msgErro = document.querySelector("#msgErro");
let msgSuceso = document.querySelector("#msgSucesso")


nome.addEventListener ('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = '<strong> Nome invalido, insira no minimo 3 letras </strong>'
        validaNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome valido'
        validaNome = true;
    }
})

usuario.addEventListener ('keyup', () => {
    if (usuario.value.length <= 6) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = '<strong> usuario invalido, insira no minimo 7 letras </strong>'
        validaUsuario = false;
    } else {
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'usuario valido'
        validaUsuario = true;
    }
})

senha.addEventListener ('keyup', () => {
    if (senha.value.length <= 7) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = '<strong> senha invalido, insira no minimo 8 letras </strong>'
        validaSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'senha valida'
        validaSenha = true;
    }
})

confirmaSenha.addEventListener ('keyup', () => {
    if (senha.value != confirmaSenha.value) {
        labelConfirmaSenha.setAttribute('style', 'color: red');
        labelConfirmaSenha.innerHTML = '<strong> senhas nao conferem </strong>'
        validaConfirmaSenha = false;
    } else {
        labelConfirmaSenha.setAttribute('style', 'color: green');
        labelConfirmaSenha.innerHTML = 'senha valida'
        validaConfirmaSenha = true;
    }
})


function cadastrar () {

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push ( {
        nomeCard : nome.value,
        usuarioCard : usuario.value,
        senhaCard : senha.value,
    } )

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    if (validaNome && validaUsuario && validaSenha && validaConfirmaSenha){
        msgSuceso.setAttribute('style' , 'display:block')
        msgSuceso.innerHTML = 'Cadastrando usuario... '
        msgErro.setAttribute('style' , 'display:none')
        msgErro.innerHTML = ''

        setTimeout (() => {
            window.location.href = "../login/login.html"
        } , 3000)
    } else {
        msgErro.setAttribute('style' , 'display:block')
        msgErro.innerHTML = 'preencha os campos corretamente'
        msgSuceso.setAttribute('style' , 'display:none')
        msgSuceso.innerHTML = ''
    }
}  


btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
})

btnConfirma.addEventListener('click', ()=>{
    let inputConfirmaSenha = document.querySelector('#confirmaSenha')

    if (inputConfirmaSenha.getAttribute('type') == 'password') {
        inputConfirmaSenha.setAttribute('type', 'text');
    } else {
        inputConfirmaSenha.setAttribute('type', 'password');
    }
})

