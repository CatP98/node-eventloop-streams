//2nd step of SINGLE THREAD: require modules
const fs = require('fs');
const crypto = require('crypto'); //all the files from this package will be offloaded automatically by the event loop to the thread pool

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

//3rd step of SINGLE THREAD: Register event callbacks   =>  4th step of SINGLE THREAD: Start Event Loop
//The events are set, and once they are hit, their callbacks functions are called
setTimeout(() => console.log('Timer 1 expired'), 0);
setImmediate(() => console.log("immediate 1 finnished!"));

fs.readFile('test-file.txt', () => {
    console.log('I/O finnished!');
    console.log('-----------------------');

    setTimeout(() => console.log('Timer 2 expired'), 0);
    setTimeout(() => console.log('Timer 3 expired'), 3000);
    setImmediate(() => console.log("immediate 2 finnished!"));

    process.nextTick(() => console.log("Process.nextTick"));


    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'passowrd encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'passowrd encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'passowrd encrypted');
    });


});


//1st step of SINGLE THREAD : execute top level code
//Outside callback funtions 
console.log('Hello from the top-level code');
