const EventEmitter = require('events');

class Logger extends EventEmitter{
    info(msg){
        //console.log(msg); 
        //Raise an event to notify about msg log
        this.emit('messageLogged',{type: "info", message : msg});
    };

    error(msg){
        //console.log(msg); 
        //Raise an event to notify about msg log
        this.emit('messageLogged',{type: "error", message : msg});
    };

    warning(msg){
        //console.log(msg); 
        //Raise an event to notify about msg log
        this.emit('messageLogged',{type: "warning", message : msg});
    };
}

module.exports = Logger;
