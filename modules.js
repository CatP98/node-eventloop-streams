console.log(arguments); //Arguments -  array in js, that contains all the values that are passed to the function (export, require funtion, module, __filename, __dirname) > 
console.log(require("module").wrapper); // returns the wrapper function, it's the "template" node uses to create the wrapper function for every kodule and then fills it with our code

//exports.module
const C = require('./test-module-1'); //Use upper case for classes

const calc1 = new C();
console.log(calc1.add(2,5));

//exports -> when we require the module, the result that we're going to ge (calc2) is the proprties that we added to exports object
const calc2 = require("./test-module-2.js");
console.log(calc2.add(2,5));
console.log(calc2.multiply(2,4));

const { add, multiply, divide} = require("./test-module-2.js"); //the names have to match the names on the original obj
console.log(add(5,5));
console.log(multiply(2,5));
//This way we only  export what we want, instad pof exporting the entire file

