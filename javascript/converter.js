const prompt = require('prompt-sync')();

const temperature = prompt("What is the Temperature?");

let unit = temperature.charAt(temperature.length - 1);
let temp = temperature.substring(0,temperature.length - 1);
let tempConvert = 0;

if (isNaN(temp)) {
    console.log("Temperature should be a anumber");
    return;
}
else {
    tempConvert = +temp;
}

if ((unit === "F") || (unit === "f")) {
    tempConvert = (temp - 32) * 5/9;
    tempConvert = Math.round(tempConvert * 100 ) / 100;
    console.log(`Temperature ${temperature} in Celcius is ${tempConvert}C`);
}
else if ((unit === "C") || (unit === "c")) {
    tempConvert = temp * 1.8 + 32;
    tempConvert = Math.round(tempConvert * 100 ) / 100;
    console.log(`Temperature ${temperature} in Farenhiet is ${tempConvert}F`);
}
else {
    console.log("Invalid Unit of temperature");
}
