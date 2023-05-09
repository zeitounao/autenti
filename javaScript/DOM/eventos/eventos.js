
/* quando clicar dua vezes com o mouse, o html chama essa função
function print() {
    console.log('print')
}

*/

const input = document.querySelector('input');
input.onkeydown = function() {
    console.log('apertou o botao:')
}
input.onkeyup = function() {
    console.log('soltou o botao:')
}

/*quando tirar o mouse de cima da palavra chama a função print */
/*const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', print);
*/

