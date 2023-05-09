
let a=5, b=3, c=2 ;

if (a>b && a>c){
    console.log("a é o maior")
} else if (b>a && b>c) {
    console.log("b é o maior")
} else if (c>a && c>b) {
    console.log("c é o maior")
} else {
    console.log("algo deu errado")
}
console.log(a, b, c);


let expression = 'b' //mudar o valor para atingir diferentes casos
switch (expression) { // puxa a expressão para o switch
    case 'a': // confere se o valor da expressão é o correto
        console.log('a');
        break; // para a execução do switch apenas se verdadeiro
    case 'b':
        console.log('b');
        break;
    default: // caso nenhum valor seja o correto, realizará a instrução dentro de si.
        console.log('default');
        break;
}

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(3, '-', 5)) //mudar o valor para atingir diferentes casos


function SayMyName(name){
    if (name === ''){
        throw 'nome é obrigadtorio'
    }
}

try {
    SayMyName();
} catch (e) {
    console.log(e);
}


