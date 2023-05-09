
//tem que digitar primeiro um numero e depois se é celsius ou fahrenheit

function temperatura(temperatura) {

    
    let myArray = temperatura.split(" ");
    console.log(myArray);

    let graus=Number(myArray[0]);
    
    if(temperatura.includes("celsius")){ 
        let fahre = (graus*9)/5 +32;
        console.log('esta com', fahre, 'graus fahrenheit')
    } else {
        let celsius = ((graus - 32) *5) /9;
        console.log('esta com', celsius, 'graus celsius');
    }
    
}

try {
    temperatura( "0 fahre")
    temperatura( "0 celsius")
    temperatura( "30 fahre")
    temperatura( "30 celsius")
} catch (error) {
    console.log(error)
}


/*
let temperatura = "0 fahre"
let myArray = temperatura.split(" ");
console.log(myArray);

let graus=Number(myArray[0]);
    
if(temperatura.includes("celsius")){ 
    let fahre = (graus*9)/5 +32;
    console.log('esta com', fahre, 'graus fahrenheit')
} else {
    let celsius = ((graus - 32) *5) /9;
    console.log('esta com', celsius, 'graus celsius');
}
*/
