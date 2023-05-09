

//entre com as notas do aluno
let nota1=79

function notas(nota1){
    if(nota1<0 || nota1>100){
        console.log("coloque uma nota de 0 ate 100")
    } else if (nota1>=90){
        console.log("parabens vc tirou nota A")
    } else if(nota1>=80){
        console.log("parabens vc tirou nota B")
    } else if(nota1>=70){
        console.log("vc tirou nota C")
    } else if(nota1>=60){
        console.log("vc tirou nota D")
    } else if(nota1<60){
        console.log("precisa estudar mais, tirou nota F ")
    }
}

notas(103);
notas(33);
notas(83);
notas(93);
notas(73);
notas(63);