
//passo um: modelando

class Queue {
    constructor() {
        this.data = [];
    }
    enqueue (item) {
        this.data.push(item);
        console.log(`${item} chegou na fila!`);
    }
    dequeue () {
        const item = this.data.shift();
        console.log(`${item} saiu da fila!`);
    }
}

//passo dois: utilizando
const fila = new Queue();

fila.enqueue('mariana');
fila.enqueue('joao');
fila.enqueue('ariel');

fila.dequeue();
fila.dequeue();
fila.dequeue();