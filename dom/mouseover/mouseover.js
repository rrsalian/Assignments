(function(){
    const box = document.querySelector(".box");
    
    box.addEventListener('mouseover', (event) => {
        box.style.backgroundColor = 'blue';
    });

    box.addEventListener('mouseleave', (event) => {
        box.style.backgroundColor = 'red';
    });
    console.log(box);
}());