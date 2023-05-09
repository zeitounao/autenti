

class Veiculo{
    rodas = 4;

    mover (direcao){}
    virar (direcao){}

}

class Moto extends Veiculo {
    constructor() {
        super() //puxar atributos e metodos do pai, no caso, o mover e o virar
        this.rodas = 2
    }
}

let moto = new Moto();
console.log(moto);

