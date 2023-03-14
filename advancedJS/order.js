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

            for(let author of data.authors) {
                const ul = document.createElement('ul');
                const li = document.createElement('li');                
                const a = document.createElement('a');             
                a.innerText = author;                
                a.href = "#";
                li.append(a);
                ul.append(li);                
                document.body.append(ul);
            }            
        });
}())