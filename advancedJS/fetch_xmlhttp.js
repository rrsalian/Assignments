const xhr = new XMLHttpRequest();
xhr.open('GET', "https://grandcircusco.github.io/demo-apis/donuts/1.json");
xhr.onload = () => {
    if (xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
        console.log(responseData);
    } else {
        console.log('Request Failed. Returned status of ' + xhr.status);
    }
};
xhr.send();