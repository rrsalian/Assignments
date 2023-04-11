function add (a:number,b:number):number {
    return a + b;
}

function subtract (a:number,b:number):number {
    return a - b;
}

function multiply (a:number,b:number):number {
    return a * b;
}

function divide (a:number,b:number) {
    return Math.round(a / b);
}

console.log(divide(2,3));
/*
module.exports = {
    add,
    subtract,
    multiply,
    divide
}
*/