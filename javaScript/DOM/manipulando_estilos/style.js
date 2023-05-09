

const element = document.querySelector('body');

/*
element.style.backgroundColor = "#faceb0";
console.log(element.style.backgroundColor);
*/

element.classList.add('active', 'green');
console.log(element.classList);
//element.classList.remove('active');
element.classList.toggle('active') //deleta o active pois ja existe
console.log(element.classList);
element.classList.toggle('active') //cria um active novo pois o que tinha foi deletado e ja aplica css



