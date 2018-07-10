const Logger = require('./logger');
let logger = new Logger();

logger.on('messageLogged', (arg)=>{
    console.log(`Listerner called with arguments ${JSON.stringify(arg)}`);
})


logger.info("This is just for an information");
logger.warning("Hmm, This is just an error, Who cares...!");
logger.error("Oh..! This was an error, It should not have happened.");