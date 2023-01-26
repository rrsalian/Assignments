const prompt = require('prompt-sync')();

const temperature = prompt("What is the Temperature?");

let unit = temperature.charAt(temperature.length - 1);
let temp = temperature.substring(0,temperature.length - 1);
console.log(unit);
console.log(temp);
let tempArray = temperature.split(unit);
console.log(tempArray);
let tempConvert = 0;

if (unit === "F") {
    tempConvert = (temp - 32) * 5/9 ;
}
else if (unit === "C") {
    tempConvert = temp;
}
else {
    console.log("Invalid Unit of temperature");
}

console.log(tempConvert);