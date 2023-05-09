
class Pessoa {
    constructor (nome) {
        this.id = ~~(Math.random()*1000);
        this.nome = nome
    }
}

const pessoa = new Pessoa('mayk');
console.log(pessoa);