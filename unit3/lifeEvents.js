const prompt = require('prompt-sync')();
const myName = 'Mitch Cuckovich';
const age = 25;
const birthday = 'January 24';
const pineapplePizza = false;

const lifeEvents = ["I was born in Troy, Michigan.",
                    "I went to Hope College.",
                    "I participated in junior olympics when I was 10 years old.",
                    "I love to be in nature."];

if ( pineapplePizza ) 
    console.log(`My name is ${myName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`);
else
    console.log(`My name is ${myName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`);

for(let i = 0; i < lifeEvents.length; i++)
    console.log(lifeEvents[i]);

let counter = 0;
while(true) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    
    if (randomNumber !== 5) {
        counter += 1;
        console.log(`${randomNumber}` + "!== 5");
    }
    else {
        counter += 1;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break; 
    }
}

const wage = prompt("What is your wage / hour?");
const hrs  = prompt("How many hours worked this week?");
let pay = 0;

if (hrs <= 40) {
    pay = wage * hrs;
}
else if (hrs < 50) {
    pay = (40 * wage) + ((hrs - 40) * 15);   
}
else {
    pay = (40 * wage) + ((hrs - 40) * 18);
}
console.log(pay);

let earning = 0;
let weeks = 0;

while ( earning < 1000000 ) {
    earning = earning + pay;
    weeks = ++weeks;    
}

console.log(`It will take ${weeks} weeks with a wage of $${wage} and ${hrs} hours per week to earn $1,000,000`);
