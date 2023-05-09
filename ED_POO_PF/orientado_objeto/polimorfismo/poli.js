

class Atleta {
    peso;
    categoria;

    constructor (peso) {
        this.peso = peso;
    }

    definirCategoria () {
        if (this.peso <= 50) {
            this.categoria = 'infantil';
        }
        else if (this.peso <= 65) {
            this.categoria = 'juvenil';
        }
        else {
            this.categoria = 'adulto'
        }
    }
}

class Lutador extends Atleta {
    constructor (peso) {
        super(peso)
    }
    
    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'pluma';
        }
        else if (this.peso <= 65) {
            this.categoria = 'leve';
        }
        else if (this.peso <= 78) {
            this.categoria = 'medio';
        }
        else {
            this.categoria = 'pesado';
        }
    }
    
} 

let lutador = new Lutador(65);
lutador.definirCategoria();
console.log(lutador);