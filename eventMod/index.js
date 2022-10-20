const EventEmitter = require('events');
const event = new EventEmitter();
event.on('skhan',(code,status)=>
{
    console.log(`code is ${code} and status is ${status}`);
})


event.emit('skhan',200,'ok');