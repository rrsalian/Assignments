const prompt = require('prompt-sync')();

const temperature = prompt("What is the Temperature?");

let tempArray = temperature.split("");
let unit = tempArray[tempArray.length - 1];
tempArray = temperature.split(unit);
console.log(tempArray);
if (isNaN(tempArray[0])) {
    console.log("Not a anumber");
    return;
}
else {
    tempNum = Number(tempArray[0]);
}

if (( unit === "F") || 
    ( unit === "f")) {
    tempNum = (tempNum - 32) * 5/9;
    tempNum = Math.round(tempNum * 100) / 100 ;
    console.log(`Temperature ${temperature} converted to Celsius is ${tempNum}C`);
}
else if (( unit === "C") || 
         ( unit === "c")) {
    tempNum = (tempNum * 1.8) + 32;
    tempNum = Math.round(tempNum * 100) /100 ;
    console.log(`Temperature ${temperature} converted to Fahrenheit is ${tempNum}F`);
}
else {
    console.log(`Temperature unit ${unit} is invalid`);
    return;
}
