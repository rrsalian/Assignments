(function () {

  const howMany = document.getElementById('how-many');
  const whichCoin = document.getElementById('which-coin');
  const makeMoney = document.getElementById('make-money');
  const coinContainer = document.getElementById("coinContainer");
  const total = document.getElementById('total-amount');
  let totalAmount = 0;
  
  total.contenteditable="true";

  makeMoney.addEventListener('click', (event) => {    
    event.preventDefault();
    for (let i = 0; i < howMany.value; i++) {
      const newCoinP = document.createElement("p");
      newCoinP.classList.add("showCoin");
      newCoinP.textContent = whichCoin.value;
      newCoinP.classList.add(whichCoin.value.toLowerCase());
      coinContainer.append(newCoinP);
      newCoinP.addEventListener('click',(e) => {
        e.target.remove();
        totalAmount = totalAmount + getTotal("-", 1, e.target.innerText);
        total.value = totalAmount;
      })
    }
    totalAmount = totalAmount + getTotal("+", howMany.value,whichCoin.value);
    total.value = totalAmount;
  });
}())

function getTotal (operator, numCoins, coinType) {
  let amount = 0;
  switch (coinType) {
    case "Penny":
      amount = numCoins;
      break;
    case "Nickel":
      amount = numCoins * 5;
      break;
    case "Dime":
      amount = numCoins * 10;
      break;
    case "Quarter":
      amount = numCoins * 25;
      break;
    case deafult:      
  }
  if (operator === "-")  
    amount = amount * -1;

  return amount;
}
