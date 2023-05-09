
/*
for(let i=0; i<10; i++){
    console.log(i)
}

for(let i=100; i>10; i--){
    if(i==50) break //para a execução no meio do caminho
    console.log(i)
}

for(let i=0; i<10; i++){
    if(i==5) continue //pula essa execução e continua depois
    console.log(i)
}
*/
/*
for(let i=9876543210; i>1; i /= 35){
    console.log(i)
}
*/
/*
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
*/
/*
let i = 9876543210;
while(i > 1){
    console.log(i);
    i /= 35;
}
*/

let name = 'mayk'
let names = ['joao', 'pedro', 'paulo']

for(let char of name){
    console.log(char)
}
for(let name of names){
    console.log(name)
}

let person = {
    name:'john',
    age:30,
    weight:88,
}
for(let propriedades in person){
    console.log(propriedades);
}


