const events = require('events');
const util = require('util');

const Student = function(name){
    this.name = name;
};


// From the module util, we are inheriting the from events.EventEmitter
util.inherits(Student,events.EventEmitter);

let harry = new Student('Harry');
let tom = new Student('Tom');
let jenny = new Student('Jenny');
let krishna = new Student('Krishna');
const students = [harry,tom,jenny,krishna];


students.forEach((student) =>{
    student.on('studies', (course)=>{
        console.log(`${student.name} is studying ${course}`);
    } )
});

harry.emit("studies","Computer Science");
tom.emit("studies","Electronics");
jenny.emit("studies","Architecture and Designing");
krishna.emit("studies","Business and People Management");