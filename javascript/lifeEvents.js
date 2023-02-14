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