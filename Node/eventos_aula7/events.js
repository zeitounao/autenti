
//const events = require('events');
//console.log(events)
const {EventEmitter} = require('events');
console.log(EventEmitter);

const ev = new EventEmitter();
console.log(ev)

ev.on('saySomething', (message) => {console.log("eu ouvi voce", message)}); 
//se usarmos o once em vez de usar o on, sera realizado apenas um disparo 
//levando em conta apenas o primeiro emit que encontrar, no caso, eliezer
ev.emit('saySomething', "eliezer");
ev.emit('saySomething', "hurivitz");
ev.emit('saySomething', "zeitoune");