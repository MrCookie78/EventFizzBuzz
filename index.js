const EventEmitter = require('events');
const emitter = new EventEmitter();

// Enregistrement de l'ecouteur
emitter.on('FizzBuzz', function(number) {
	console.log(number);
});

emitter.emit('FizzBuzz', 15);