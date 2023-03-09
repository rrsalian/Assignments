(function () {
    let div;
    let count = 0;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            square = document.createElement("div");
            square.style.width = '40px';
            square.style.height = '40px';
            square.style.border = '1px solid black';
            square.classList.add('sqr');
            square.classList.add('sqr' + count);
            document.body.append(square);
        }
    }

}())