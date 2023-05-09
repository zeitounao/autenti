
//a unidade aqui é tratada em milisegundos, 3000 milisegundos é igual 3 segundos 
const timeout = 3018
const finished = () => console.log('done')

/*
let timer = setTimeout(finished, timeout);
console.log('mostrar');
clearTimeout(timer);
*/

const timeout2 = 1000;
const checking = () => console.log('checking');
let interval = setInterval(checking, timeout2);
//clearInterval(interval);

setTimeout(() => clearInterval(interval) ,timeout);