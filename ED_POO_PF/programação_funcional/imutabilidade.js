

const cart = {
    quantity: 2,
    total: 200
}

cart.quantity = 3;  //maneira ruim de mudar quantidade
const newCart = {...cart, quantity: 3} //boa maneira de mudar

/*
const [amount, setAmount] = useState(0) //exemplo em reactJS
amount = 2  //maneira ruim
setAmount(2) //boa maneira
*/

console.log(cart)
console.log(newCart)

  