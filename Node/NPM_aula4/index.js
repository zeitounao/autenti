/*
console.log("teste 'via' script ")
process.stdout.write('teste1')
console.log("deu certo \n")
process.stdout.write('teste1 \n')
console.log("rodando 'via' script \n\n")
*/
// o \n serve para mudar de linha
//console.log('alguma coisa') == process.stdout.write('alguma coisa \n')


const question = [
    "o que voce fez hoje ?",
    "como posso melhorar ?",
    "voce esta feliz ?",
]

const ask = (index = 0) => {
    process.stdout.write(question[index] + "\n") //saida de dados
}
ask();

/*
process.stdin.on("data", data => {  //entrada de dados; on fica escutando eventos
    process.stdout.write(data.toString().trim() + '\n')
    process.exit() //sem o exit, o processo é assincrono (e é infinito)
})     
*/
const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < question.length){
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    que legal!

    eu: ${answers[0]}

    posso melhorar: ${answers[1]}
    
    estou feliz com as escolhas: ${answers[2]}
    
    volte amanha para nova reflexão
    `)
})
