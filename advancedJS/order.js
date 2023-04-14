(function () {

    //main = document.getElementById('main');

    fetch('https://poetrydb.org/author')
        .then(response => response.json())
        .then(data => {
                        
            // for (let i = 0; i < data.authors.length; i++) {
            //     const div = document.createElement('div');
            //     const a = document.createElement('a');
            //     const textLink = document.createTextNode(data.authors[i]);
            //     a.appendChild(textLink);
            //     a.href = "#";
            //     div.append(a);
            //     main.append(div);
            // }

            const ul = document.createElement('ul');
            for(let author of data.authors) {                
                const li = document.createElement('li');                
                const a = document.createElement('a');             
                a.innerText = author;                
                a.href = "#";
                a.style.textDecoration = "none";
                li.append(a);
                ul.append(li);                
                document.body.append(ul);

                li.addEventListener('click', (e) => {
                    liText = e.target.innerText;
                    
                    fetch(`https://poetrydb.org/author/${liText}/title`)
                        .then(response1 => response1.json())
                        .then(data1 => {
                            const titleEl = document.createElement('div');                    
                            
                            for (let each of data1) {
                                console.log(data1);
                                const titleP = document.createElement('p');
                                
                                titleP.innerText = each.title;
                                
                                titleEl.append(titleP);
                            }

                            e.target.append(titleEl);
                        })
                })
            }            
        });
}())