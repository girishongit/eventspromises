//The EventEmitter calls all listeners synchronously in the order in which they were registered. 
//This is important to ensure the proper sequencing of events and to avoid race conditions or logic errors. 
//When appropriate, listener functions can switch to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods:

const  EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a Listerner
emitter.on('error', (msg) => {                          //This Listerner works async, and is not binded to the order of registration
    setImmediate(() => {
            console.log(`This error was Logged : ${msg}`);
    });
});

emitter.on('warning', (msg) => {
    console.log(`This warning was Logged : ${msg}`);
});

emitter.on('info', (msg) => {
    setTimeout(()=>{
        console.log(`This info was Logged : ${msg}`);
    }, 3000);
});

//Raise an event
emitter.emit('error', "Got a Salary...!");
emitter.emit('info',"Namaskara.....!");
emitter.emit('warning', "Hello World...!",50);