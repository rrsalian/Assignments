(function() {

    const howMany   = document.getElementById('how-many');    
    const whichCoin = document.getElementById('which-coin');
    const makeMoney = document.getElementById('make-money');
    
    makeMoney.addEventListener('click', (event) => {
        event.preventDefault();
        
        const coinContainer = document.getElementById("coinContainer");
        const newCoinP = document.createElement("p");        
        newCoinP.classList.add("showCoin");
        newCoinP.textContent = whichCoin.value;
        
        coinContainer.append(newCoinP);
    });

}())