(function () {

    //main = document.getElementById('main');

    fetch('https://poetrydb.org/author')
        .then(response => response.json())
        .then(data => {
            let a;
            let textLink;
            // for (let i = 0; i < data.authors.length; i++) {
            //     div = document.createElement('div');
            //     a = document.createElement('a');
            //     textLink = document.createTextNode(data.authors[i]);
            //     a.appendChild(textLink);
            //     a.href = "#";
            //     div.append(a);
            //     main.append(div);
            // }

            for(let author of data.authors) {
                div = document.createElement('div');
                a = document.createElement('ahref');                
                a.innerText = author;                
                a.href = "#";
                div.append(a);
                document.body.append(div);
            }            
        });
}())