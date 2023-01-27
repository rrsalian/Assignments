const prompt = require('prompt-sync')();

const actualTemp = prompt("What is the Actual Temperature?");
if (isNaN(actualTemp)) {
    console.log("Actual Temperature should be a number");
    return;
}
const desiredTemp = prompt("What is your Desired Temperature?");

if ( isNaN(desiredTemp) ) {
    console.log("Desired Temperature should be a number");
    return;
}


if (actualTemp < desiredTemp) {
    console.log("Run heat");
}
else if (actualTemp > desiredTemp) {
    console.log("Run A/C");    
}
else {
    console.log("Run Standby");
}