
/*
const gastos={
    receitas:[7,8,18,24,69],
    despesas:[2,3,5,7,11,13,17,19,23,29],
}

var total_receitas = 0;
for(let i=0; i<gastos.receitas.length; i++){
    total_receitas += gastos.receitas[i];
}

var total_despesas = 0;
for(let i=0; i<gastos.despesas.length; i++){
    total_despesas += gastos.despesas[i];
}


console.log(total_receitas);
console.log(total_despesas);
let controle_mensal = total_receitas-total_despesas;


if(controle_mensal>= 0){
    console.log("vc ainda tem saldo para gastar de: ", controle_mensal)
} else{
    controle_mensal *= -1
    console.log("vc esta devendo: ", controle_mensal)
}
*/


let familia = {
    receita:[250, 320, 250, 368],
    despesa:[320, 128, 176, 145],
}

function somar (array){

    let total = 0;
    for(let value of array){
        total  += value;
    }
    return total;
}

function balanca() {

    const calcula_receita = somar(familia.receita);
    const calcula_despesa = somar(familia.despesa);

    const total = calcula_receita - calcula_despesa
    let balanca_texto = 'negativo'
    if(total>=0) {
        balanca_texto = 'positivo'
    }
    console.log('o saldo e' , balanca_texto, total.toFixed(2))
}

balanca();
