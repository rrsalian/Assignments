function main(){

    //Add the "big" class to the "grow-me" paragraph.
    const growMe = document.getElementById('grow-me');
    growMe.classList.add('big');

    //Remove the "big" class from the "shrink-me" paragraph.
    const shrinkMe = document.getElementById('shrink-me');
    shrinkMe.classList.remove('big');

    // find all the <li>s and log their text content to the console
    const lis = document.querySelectorAll('li');
    for (let i=0; i< lis.length; i++)
        console.log(lis[i].innerText);

    // set the href of the link to www.example.com and updatethe text to somewhere
    const link = document.querySelector(".link");
    link.innerText = "somewhere";
    link.setAttribute('href', 'https://www.example.com');
    
    // set the "display" CSS property of the "hide-me" paragraph to "none"
    document.getElementById('hide-me').style.display = "none";

    // set the "display" CSS property of the "show-me" paragraph to "block"
    document.getElementById('show-me').style.display = "block";

    //Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".
    document.querySelector('h1').textContent = document.getElementById('name').value;
}