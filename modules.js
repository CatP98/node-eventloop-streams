console.log(arguments); //Arguments -  array in js, that contains all the values that are passed to the function (export, require funtion, module, __filename, __dirname) > 
console.log(require("module").wrapper); // returns the wrapper function, it's the "template" node uses to create the wrapper function for every kodule and then fills it with our code

const C = require('./test-module-1'); //Use upper case for classes

const calc1 = new C();
console.log(calc1.add(2,5));
