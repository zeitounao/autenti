

//vamos criar e entender como criar funções
//no caso da função vai servir para economizar escrever console.log

/*
function criar_funcao(){
    console.log("paciencia e persistencia")
    console.log("voce é incrivel")
}

criar_funcao();
criar_funcao();
criar_funcao();
*/

/*
const sum=function(number1, number2){
    console.log(number1+number2);
    console.log(-number1+number2);
    console.log(number1*number2);
    console.log(number1/number2);
}

//sum(2,3);*/
/*
let number1=34, number2=25;
console.log("o numero um é: " + number1, "o numero 2 é: " + number2);
//console.log("a soma é: "+ sum(number1, number2));



const sum2 = function(number1, number2){ //nao sofre elevação/hoisting
    total = number1 + number2;
    return total;
}

console.log("a soma é: "+ sum2(number1, number2));
*/
/*
function fazerSuco(fruta1 , fruta2){    //sofre elevação /hoisting
    return 'suco de: ' + fruta1 + fruta2;
     
}

const copo = fazerSuco('banana', 'maça');
console.log(copo);

function Person (name) {
    this.name= name;
    this.walk = function() {
        return "andando"
    }

}

const myke = new Person("myke");
const joão = new Person("joão");

console.log(myke);
console.log(joão);
*/
let string = "9", numero = 5;
console.log(string + numero); //type coersion, açao involuntaria do sistema 
// é como se executassemos o comando String(numero) e depois concatenamos
console.log(Number(string)+numero); // type casting, acao voluntaria da pessoa

let word = "ELIezer";
console.log(word)
console.log(word.length);
console.log(word.toUpperCase());
console.log(word.toLowerCase());

let numero2 = 1234.5678;
console.log(numero2);
console.log(numero2.length); //percebe que o codigo da undefined, por conta da função length mostrar quantas letras tem na palavra, nao funciona para digitos/numeros; para dar certo precisa transformar numero em string
console.log(String(numero2).length) //como agora falamos de string, o ponto conta como caracter dando total de 9
console.log(numero2.toFixed(2));

let frase = "eu quero viver o amor", meuAraay, frase_junta;
meuAraay = frase.split(" ");
frase_junta = meuAraay.join("_");
console.log(frase);
console.log(meuAraay);
console.log(frase_junta);

let myArray = new Array ("a", "b", "c", "", "", "", "", "", "", "") 
//podemos criar um array vazio utilizando um numero ao invez dos aspas; new array (10)
console.log(myArray);

//MATRIZ ou ARRAY

let linguagem = ['html', 'css',  'javascript'];
linguagem.push('node js');   //add fim
linguagem.unshift('react');  //add inicio
//linguagem.pop();   //deleta fim
//linguagem.shift(); //delata inicio
console.log(linguagem.slice(1,3)); //nao esquecer do console; seleciona [1;3[
linguagem.splice(1,2); //deleta 2 eementos a partir da posição 1

let index = linguagem.indexOf('react'); //procura o que ta entre () 
//linguagem.splice(index, 1);  //deleta o que ta entre()
console.log(index); //fala qual é/era a posição do que ta entre () 
console.log(linguagem);



var exemplo = "email do eliezer";
var resultado = exemplo.replace(/e/g, "5");//substitui todas as letras e por 5
/*ou podemos usar: var resultado = exemplo.replaceAll('e', "5"); */ 

console.log(resultado);
