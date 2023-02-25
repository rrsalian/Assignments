(function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    const navLinks = document.querySelectorAll(".nav-link");

    for (let link of navLinks) {
        link.addEventListener('click', (e) => {
            if (link.innerText.toLowerCase() === 'letters') {
                content1.innerText = 'A B C D E F G H I J K L M';
                content2.innerText = 'N O P Q R S T U V W X Y Z';
            }
            else {
                content1.innerText = '1 2 3 4 5 6 7 8 9 10';
                content2.innerText = '';
            }
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
        })
    }
}());
