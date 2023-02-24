(function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");        
        navMenu.classList.toggle("active");
    })

    const navLinks = document.querySelectorAll(".nav-link");
   
    for(let link of navLinks) {
        link.addEventListener('click',(e) => {
            const mainContainer = document.getElementById('mainContainer');
            const mainContent = document.getElementById('mainContent');
            
            console.log(link.innerText);
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
        })
    }    
}());
