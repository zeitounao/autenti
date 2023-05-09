

/*
const caixa_texto = document.querySelector("input");
//caixa_texto.value = "valor que eu quiser" 
//podemos aplicar direto na tag do input ou aqui puxando o input de lá
console.log(caixa_texto.value);
*/
const header = document.querySelector('header'); //procuramos a tad header e salvamos na variavel
header.setAttribute('id', "header"); //pegamos a header encontrada e colocamos um id

const headerID = document.querySelector('#header'); //procuramos a header que salvamos o id 
console.log(headerID); //na hora de mostrar o codigo vai aparecer o ID="header"

console.log(headerID.getAttribute('id')); 
//pegamos o headerID e escolhemos um atributo especifico que queremos se possui ou nao, no caso: id 
header.removeAttribute('class');