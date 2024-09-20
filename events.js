const EventEmitter = require('events');
const http = require('http');

//Sales -> parent class , EventEmiter -> super class  (everytime we are extending from a super class we need to add super() to the constructor , so that we gain access to the methods and proprieties from the super class)
class Sales extends EventEmitter {

    constructor(){
        super();
    }
}

const myEmitter = new Sales();

//Observers -> myEmitter.on
myEmitter.on('newSale', () => {
    console.log('There was a new sale!');
})
myEmitter.on('newSale', () => {
    console.log('Customer name: Jonas');
});

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stock`);
})

//Emitter -> myEmitter.emit
myEmitter.emit('newSale', 9);

//p.s. when we are using an custome eventEmitter, done by ourselves we need to use the eventlistener-name.emit, but we are using a built in node module, they will emitt the events by their own, all we have to do is to listen to them


//////////////////////


const server = http.createServer();

server.on('request', (req, resp) => {
    console.log('Request received!');
    console.log(req.url)

    resp.end('Request received!');
});

server.on('request', (req, resp) => {
    console.log('Another resquest ');
});

server.on('close', (req,res) => {
    console.log('server closed');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('waiting for requests...');
} )