(function () {
    let square;    
    let count = 0;
    let section;

    main = document.getElementById('main');

    for (let i = 0; i < 10; i++) {        
        section = document.createElement("section");        
        section.classList.add("section");
        for (let j = 0; j < 10; j++) {
            count++;
            square = document.createElement("div");
            square.style.width = '40px';
            square.style.height = '40px';
            square.style.border = '1px solid white';
            square.classList.add('sqr');
            square.classList.add('sqr' + count);
            section.append(square);
            main.append(section);
        }
    }

    const buttons = document.querySelector(".buttons");
    let color = 'black';
    
    buttons.addEventListener('click', (e)=> {
        if (e.target.className.startsWith('button')) {
            color = e.target.value;
        }
    })
    
    main.addEventListener('click', (e) => {
        if (e.target.className.startsWith('sqr')) {
            e.target.classList.add(color);
        }
    })
}())