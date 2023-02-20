(function() {

    const howMany = document.getElementById('how-many');    
    const whichCoin = document.getElementById('which-coin');
    const makeMoney = document.getElementById('make-money');
    
    
    makeMoney.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(howMany.value);    
        console.log(whichCoin.value);
        
    });

}())

/*
const newCoin = document.createElement("div");
      const newCoinP = document.createElement("p");
      if (coinType.value === "halfDollar") {
        newCoinP.innerText = "Half Dollar";
      } else {
        newCoinP.innerText = coinType.value;
      }

      newCoin.append(newCoinP);
      newCoin.addEventListener("click", (event) => {
        console.log(event.target);
        // event.target.remove();
      });
      newCoin.classList.add("coin");
      newCoin.classList.add(coinType.value);
      coinContainer.append(newCoin);
*/