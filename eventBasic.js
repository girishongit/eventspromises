//All Events are by default synchronous, i.e. it works based on the order of the registration

const  EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a Listerner
emitter.on('messageLogged', (msg) => {
    console.log("messageLogged Listener Called....!!")
    console.log(`message logged was ${msg}`);
});

emitter.on('messageDiscarted', (msg) => {
    console.log("messageDiscarted....!")
    console.log(`This Message was discarted : ${msg}`);
});

//Raise an event
emitter.emit('messageLogged', "Hello World...!");
emitter.emit('messageLogged',"Namaskara.....!");
emitter.emit('messageDiscarted',"Good Morning...!");

