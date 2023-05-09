

const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character (name) {
    this.name = name;
}

inherits(Character, EventEmitter);

const chapolin = new Character('chapolin');
chapolin.on('help', () => console.log(`eu! o ${chapolin.name} colorado`));
console.log("quem podera me salvar ?");
chapolin.emit('help');