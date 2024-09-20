/* feature: in our app we need to be capable of reading a large file and then send it to the client*/

const fs = require('fs');
const server = require('http').createServer(); //require('http) -> resukts in an http object to which we can ask to create s server

server.on('request', (req, res) => {
    // Solution 1: read the file into a variable and then, once that's done send it to the client
    // Problem: Node would actually need to read tyhe entire file, because only after it is ready, it can then send it to the client, whcih is a problem when the file is big and also when there are many requests -> dont use this solution for a server
    //fs.readFile('test-File.txt', (err, data) =>{
    //    if(err) console.log(err);
    //    res.end(data);
    //});

    //Solution 2: Using streams -> we dont really need to read the data from the file into a variable and store that variable into memory, instead we will just create a readable stream, then as we receive each chunk of data we send it to the client as a response, which is the writable stream
    //Problem: Back pressure proble: the response cannot send the data as fast as the file gets written
    //const readable = fs.createReadStream('test-file.txt');
    //readable.on('data', chunk => {
    //    res.write(chunk);
    //})
    //readable.on('end', () => {
    //   res.end();
    //})
    //readable.on('error', err => {
    //    console.log(err);
    //    res.statusCode = 500;
    //    res.end('File not found');
    //});


    //Solution 3: Use the pipe operator -> available on all readable streams and allows us to pipe the output of a readable steam right in to the input of a writable stream -> Fixes the back pressure problem, since it automatically handle the spree of the data coming in and the speed of the data going out 
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    //readablesource.pipe(writableDest)
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to requests...")
});