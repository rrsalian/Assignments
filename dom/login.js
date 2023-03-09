/* Immediately Invoked function Expression IIFE */

(function() {
    
    const button = document.getElementById('login');
    

    button.addEventListener('click', (e) =>{
        form = document.getElementById('form');        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;   
        const errorPassword = document.getElementById('error-password');
        const errorEmail = document.getElementById('error-email');

        errorEmail.innerText = "";
        if (email.length === 0) {            
            errorEmail.innerText = "Should not be blank";
            return;
        }

        if (!email.toLowerCase().endsWith("@gmail.com")) {
            errorEmail.innerText = "Should be a gmail account";
            return;
        }

        errorPassword.innerText = "";
        if (password.length < 8) {
            errorPassword.innerText = "Password should be at least 8 characters";
            return;
        }

        let character = '';
        let count = 0;
        for(let i = 0; i < 8 ; i++) {
            character = password.charAt(i);        
            if (!isNaN(character) || character != character.toUpperCase()) {
                count++;
            }
        }

        if (count === 8) {
            errorPassword.innerText = "Password should have atleast 1 UpperCase character";
            return;
        }    

        checkSpecialChars(password);

        function checkSpecialChars(pass) {
            var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //unacceptable chars
            if (pattern.test(pass)) {
                errorPassword.innerText = "Password cannot have special character";
                return;
            };
        }        
        
    })
}());