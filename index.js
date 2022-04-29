const EventEmitter = require('events');
const emitter = new EventEmitter();

// Enregistrement de l'ecouteur
emitter.on('FizzBuzz', function(number) {
	if(typeof number != 'number'){
		console.log("L'argument passé doit être un nombre : " + typeof number + " reçu");
		return;
	}

	if(number % 3 == 0 && number % 5 == 0){
		console.log('FizzBuzz');
	}
	else if(number % 5 == 0){
		console.log('Buzz');
	}
	else if(number % 3 == 0){
		console.log('Fizz');
	}
	else {
		console.log(number)
	}
});

emitter.emit('FizzBuzz', 15);