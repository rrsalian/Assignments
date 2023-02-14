const prompt = require('prompt-sync')();

let balance = 10;
let betResponses = ['H','h','T','t'];

function flip() {    
    return (Math.random() < 0.5 ? 'H':'T');    
}

function rebalanceBetAmount(bet) {    
    balance += bet;    
    return balance;
}

function checkBalance(bet) {    
    let leftOverBalance = balance - bet;    
    return leftOverBalance;
}

console.log(`Starting Balance: ${balance}`);

while (true) {
    let betMoney = +prompt("How much you would like to bet?");

    if (checkBalance(betMoney) < 0) {
        console.log("You do not have enough money to place the bet");
        break;
    }

    let coinflip = prompt("What would you like heads or tails H/T ");

    if (!(betResponses.includes(coinflip))) {
        console.log("Incorrect response entered. Please start over.");
        continue;
    }

    amount = coinflip === flip() ? betMoney : betMoney * -1;

    if(amount < 0)
        console.log(`You lost the Bet`);
    else
        console.log(`You won the Bet`);

    console.log(`Current Balance is: ${rebalanceBetAmount (amount)}`);    

    doYouWantToquit = prompt("Do you wanna quit Y/N?");

    if (!(['Y','N'].includes(doYouWantToquit))) {
        console.log("Incorrect response entered. Please start over.");
        continue;
    }
    else if (doYouWantToquit === 'Y')
        break;    
}

console.log(`Ending Balance is: ${balance}`);

