


class Parafuso {
    constructor() {
        if(this.constructor === Parafuso)
            throw new Error('classe abstrada nao pode ser instanciada')
    }
    get tipo() {
        throw new Error('metodo "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() { super() } 
    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() { super() } 
    get tipo() {
        return 'philips'
    }
}

class Allen extends Parafuso {

}

//criar e usa as classes

//new Parafuso() //tem que mostrar a frase "classe abstrata nao pode ser instanciada"
let fenda = new Fenda();
let philips = new Philips();
let allen = new Allen();

console.log(fenda.tipo, philips.tipo);
console.log(allen.tipo);

/* so existe parafuso se for um tipo especifico como: fenda, philips e allen  */