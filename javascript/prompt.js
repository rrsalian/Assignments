
const prompt = require('prompt-sync')();

const size = prompt("What size pizza they'd like? ");
const pepperoni = prompt("Would you like pepperoni? ");
const delivery = prompt("Do you need Delivery? ");

let sizes = ["S","M","L","XL"];
let prices = [5,6,7,8];
let total = 0;

console.log(size);

for(let i = 0; i < 4; i++ ) {
    if (size == sizes[i]) {
        total = prices[i];
    }
}

if (total === 0) {
    console.log('Please select a valid size pizza');
}

console.log(pepperoni);
if (pepperoni === true) {
    total += 2;
}

console.log(delivery);

if (delivery === true) {
    total += 10;
}

// Compute Sales Tax
total += total * 0.06;

console.log(`Your Total is: ${total}`);


