(function () {
        const body = document.querySelector("body");
        const circle = document.querySelector(".circle");

        body.addEventListener('mousemove', (e) => {
            let xPos = e.clientX;
            let yPos = e.clientY;            
            circle.style.top = yPos.toString() + "px";
            circle.style.left = xPos.toString() + "px";
        })
}())
    