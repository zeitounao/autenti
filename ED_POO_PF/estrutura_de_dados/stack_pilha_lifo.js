
//passo um: modelando
class Stack{
    constructor() {
        this.data = [];
        this.top = -1;
    }

    push(value) {
        this.top++;
        this.data[this.top] = value
        return this.data
    }
    pop() {
        if (this.top<0) return undefined;
        const poppedTop = this.data[this.top];
        delete this.data[this.top];
        this.top--;
        return poppedTop
    }
    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

//passo dois: utilizando

//instanciando objeto
const stack = new Stack(); 

//adicionando elemento no array
stack.push('estudante'); 
stack.push('aluno'); 
console.log(stack.push('professores'));

//obtem elemento do topo da pilha
console.log("elemento no topo da pilha", stack.peek())

//removendo elemento do topo
console.log("elemento retirado", stack.pop());
console.log("elemento retirado", stack.pop());

console.log("elemento no topo da pilha", stack.peek());