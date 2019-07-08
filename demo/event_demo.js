const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter{
  
}

//int object

const myEmitter = new MyEmitter();

//event listener
myEmitter.on('event', () => console.log('event fired!'));
myEmitter.on('event#2', () => console.log('second event fired!'));

//init event
myEmitter.emit('event');
myEmitter.emit('event#2');