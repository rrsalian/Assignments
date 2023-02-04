const prompt = require('prompt-sync')();

const pizzaSizes = ['S','s','M','m','L','l'];
const saladSizes = ['S','s','L','l'];
const deliveries = ['yes','y','no','n'];

//const priceChart = [ { item: 0 , pizza: [ { size:'S' , price:5 }, { size:'M' , price:6 }, { size:'L' , price:7 } ] }, 
//                     { item: 1 , salad: [ { size:'S' , price:2 }, { size:'L' , price:4 } ] } 
//                     ];

function ask(itemName) {
    const order = prompt(`What size ${itemName} would you like? `);
    
    let newObject = {};

    for (let i=0; i < priceChart.length; i++ ) {
        for (key in priceChart[i]) {
            if (key === 'pizza') {
                for (let j=0 ; j < priceChart[i][key].length; j++) {
                    if ( priceChart[i][key][j].size === order )
                        return priceChart[i][key][j];
                }
            }                
        }
    }

}

function askAboutPizza() {
    const itemName = 'pizza';
    const order = prompt(`What size ${itemName} would you like? `);

    if (!pizzaSizes.includes(order)) {
        console.log(`${order} is not valid size for ${itemName}. Redo Order.`);
        return null;
    }
    
    let newObj = {};
    newObj.size = order;
    switch (order) {
        case 'S':            
            newObj.price = 5;
            break;
        case 'M':
            newObj.price = 6;
            break;
        case 'L':
            newObj.price = 7;
            break;
    }
    
    return newObj;
}

function askAboutSalad() {
    const itemName = 'salad';
    const order = prompt(`What size ${itemName} would you like? `);

    if (!saladSizes.includes(order)) {
        console.log(`${order} is not valid size for ${itemName}. Redo Order.`);
        return null;
    }
    
    let newObj = {};
    newObj.size = order;
    switch (order) {
        case 'S':            
            newObj.price = 2;
            break;        
        case 'L':
            newObj.price = 4;
            break;
    }
    return newObj;
}

function askAboutDelivery() {
    let delivery = prompt("Would you like delivery?");   
    delivery = delivery.toLowerCase();

    if (!deliveries.includes(delivery)) {
        console.log(`Not a valid response. Redo response.`);
        return null;
    }

    const address = prompt("Please provide your address information: ");
    if (address === '') {
        console.log(`Not a valid address. Redo.`);
        return null;
    }
    
    let newObj = {};
    if (delivery === 'yes' || delivery === 'y') {
        newObj.address = address;
        newObj.price   = 10;
        return newObj;
    }
    else {
        newObj.address = null;
        newObj.price = 0;
        return newObj;
    }
}

let order = prompt('Would you like order pizza, salad, and delivery? ');
order = order.toLowerCase();
if (order === 'yes' || order === 'y') {
    let finalBull = 0;

    let pizzaObj = askAboutPizza();
    while (pizzaObj == null) {
        pizzaObj = askAboutPizza();
    }
    console.log(pizzaObj);

    let saladObj = askAboutSalad();
    while (saladObj == null) {
        saladObj = askAboutSalad();
    }
    console.log(saladObj);

    let deliveryObj = askAboutDelivery();
    while (deliveryObj == null) {
        deliveryObj = askAboutDelivery();
    }
    console.log(deliveryObj);
    
    finalBill = pizzaObj.price + saladObj.price + deliveryObj.price;
    console.log(finalBill);
}
else {
    console.log("Customer is not ineterested in the Order");
}

//pizza = ask('pizza');
//console.log(pizza);
//salad = ask('salad');
//console.log(salad);

