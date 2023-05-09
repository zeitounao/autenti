

const div = document.createElement('div'); //alocamos na memoria uma div mesmo que nao apareca na tela
div.innerText = 'boa noite brasil' ; //salvamos um texto na div

const body = document.querySelector('body'); //pegamos o body do html 
//body.append(div); // adicionamos a div no final do body
//body.prepend(div); // adicionamos a div no comeco do body

const script = body.querySelector('script'); // pega o script
//body.insertBefore(div,script); //coloca a div antes do script

const header = body.querySelector('header')
body.insertBefore(div,header.nextElementSibling)

