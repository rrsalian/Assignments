( () => {
    fetch("https://grandcircusco.github.io/demo-apis/donuts/1.json")
        .then(response => response.json())
        .then(data => {
            console.log(data.name);
            console.log(data.extras);
            console.log(data.photo);
    })

})()