
const process = require('node:process')

//precisamos aplicar no terminal o "node console.js"
/* usando modulos nativos */ /*
console.log("ola mundo"); //mostra ola mundo na tela
console.log(global);   //mostra as variaveis globais
console.log(__dirname); //diretorio local do arquivo
console.log(__filename); //caminho completo com nome do arquivo
const path = require('node:path');
console.log(path.basename("User/starter/docs.js"));
*/
/* importando modulos*/ /*
const meuModulo = require('./exporta_modulos'); //importa a classe exporta_modulos e 
console.log(meuModulo); // mostra mensagens escritas na classe
*/
/* lista de argumentos */ /*
console.log(process);  //vai mostrar infos do objeto
console.log(process.argv);
console.log('seu nome é', process.argv[2], process.argv[3]); // precisa usar no terminal "node console eli zei"
*/ /*
const firstName = process.argv[2]; // precisa usar no terminal "node console eli zei"
const lastName = process.argv[3];
console.log(`seu nome é ${firstName} ${lastName}`)
*/
console.log(process.argv); //para passar flag como argumento usa "node console --name "eli zei" --greeting "saudações terraqueio""
