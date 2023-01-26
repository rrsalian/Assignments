const prompt = require('prompt-sync')();

const temperature = prompt("What is the Temperature?");

let unit = temperature.charAt(temperature.length - 1);
let temp = temperature.substring(0,temperature.length - 1);
let tempConvert = 0;

if ((unit === "F") || (unit === "f")) {
    tempConvert = (temp - 32) * 5/9 ;
    console.log(`Temperature ${temperature} in Celcius is ${tempConvert}C`);
}
else if ((unit === "C") || (unit === "c")) {
    tempConvert = temp * 1.8 + 32;
    console.log(`Temperature ${temperature} in Farenhiet is ${tempConvert}F`);
}
else {
    console.log("Invalid Unit of temperature");
}

