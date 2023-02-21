(function () {

  const howMany = document.getElementById('how-many');
  const whichCoin = document.getElementById('which-coin');
  const makeMoney = document.getElementById('make-money');
  const coinContainer = document.getElementById("coinContainer");

  makeMoney.addEventListener('click', (event) => {    
    event.preventDefault();    
    for (let i = 0; i < howMany.value; i++) {
      const newCoinP = document.createElement("p");
      newCoinP.classList.add("showCoin");
      newCoinP.textContent = whichCoin.value;
      coinContainer.append(newCoinP);

      newCoinP.addEventListener('click',(e) => {
        console.log(e.target);
        e.target.remove();
      })
    }
  });



}())