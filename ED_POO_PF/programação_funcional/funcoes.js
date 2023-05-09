/* função independente */

//gerar numero randomico
/*
const random = (number, Math) =>  (Math.floor(Math.random() * number));
random();
*/
//console.log(Math.floor(Math.random() * 100));

// fatorial recursivo

var y = 0;
const fatorial = (x, y) => {
    if (x === 0) {
        return 1;
    }
    return x * fatorial(x - 1);
    x *= 2;
    return y += 1;
    console.log(y += 1);

}

console.log(fatorial(3, 0));
console.log(y);

/*
const sayMyName = () => console.log("eli");
const rodarFuncao = fn => fn();
console.log(sayMyName());
console.log(rodarFuncao(sayMyName));
console.log(rodarFuncao(Math.random));
*/
/*
const numeros = [2, 4, 8, 16, 32];
const square = n => n**n;
const squaredNumeros = numeros.map(square);
console.log(squaredNumeros);
*/
/*
const pausa = espera => funcao => setTimeout(funcao, espera);
pausa(6000) ( () => console.log('esperando 6s') )

const espera2000 = pausa(2000)
const espera10000 = pausa(10000)
espera2000 ( () => console.log('esperando 2s') )
espera10000 ( () => console.log('esperando 10s') )
*/
/*
const people = ['Rafa', 'Diego', 'Daniel', 'Rod'];
const pessoasComLetraD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase());

console.log(pessoasComLetraD);
*/