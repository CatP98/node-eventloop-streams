class Calculator {

    add(a,b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b){
        return a / b;
    }
}

module.exports = Calculator; // use module.exports when you want to export one single value (eg one class, one function)