(function () {

    let section;
    let count = 0;
    let id = 11;
    let origColor;
    main = document.getElementById('main');
    

    for (let i = 0; i < 4; i++) {
        section = document.createElement("section");
        section.classList.add("section");

        for (let j = 0; j < 4; j++) {
            ++count;          

            square = document.createElement("div");
            square.style.width = '70px';
            square.style.height = '70px';
            square.style.border = '1px solid gray';
            if (count === id) {                
                square.style.backgroundColor = 'red';
                square.setAttribute('id','it');
            }    
            else {
                square.style.backgroundColor = "rgb(167, 167, 167)";
                origColor = square.style.backgroundColor;
            }
            square.classList.add('sqr');
            square.classList.add('sqr' + count);            
            section.append(square);
            main.append(section);
        }
    }

    let color = 'green';
    main.addEventListener('click', (e) => {
        if (e.target.className.startsWith('sqr')) {
            if (e.target.id != 'it')            
                e.target.style.backgroundColor = color;           
        }
    })

    let newColor = 'yellow';
    const it = document.getElementById('it');
    const allsqrs = document.querySelectorAll('.sqr');

    it.addEventListener('click' , (e) => {
        for (let sqr of allsqrs) {
            if (sqr.style.backgroundColor === 'green')
                sqr.style.backgroundColor = newColor;
        }
    })

}());