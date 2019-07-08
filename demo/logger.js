const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

const myFunctions = require('./fs_demo.js');
//console.log(uuid.v4());

class Logger extends EventEmitter{
  log(msg){
    this.emit('Message', {id: uuid.v4(), msg:msg})
  }
  
};

const logger = new Logger;
logger.on('Message', data=> myFunctions.writeToFile(path.join(__dirname, '/logs', 'log.txt' ),`${data.id} : ${data.msg}\n`));
// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input text in command line.");

// When user input data and click enter key.
standard_input.on('data', function (data) {
  data=data.trim();
    // User input exit.
    if(data == 'exit'){
        // Program exit.
        console.log("User input complete, program exit.");
        console.log('---------------');
        process.exit();
    }else
    {
        // Print and log user input in console.
        console.log('Your input \'' + data + '\' has been logged');
        logger.log(data);
    }
});




//module.exports = Logger;