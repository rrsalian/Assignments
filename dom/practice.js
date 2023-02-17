(function() {
    const question1 = document.getElementById('question-1');
    question1.style.color = 'blue';

    const question2 = document.querySelector('.question-2');
    question2.style.color = 'red';

    const question3 = document.querySelectorAll('.question-3');
    for (let q of question3) {
         q.style.color = 'orange';
    }

    const question4 = document.getElementById('question-4');
    question4.parentNode.style.backgroundColor = 'purple';

    const button5 = document.getElementById('alert-button');
    button5.addEventListener('click', () => {
        console.log('CLICK!!!');        
    });

    const button6 = document.getElementById('add-tv-show-button');
    button6.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.innerText = "It's February";
        const ul = document.getElementById('tv-shows');
        ul.append(newLi);
    });

    const button7 = document.getElementById('question-7-remove-button');
    button7.addEventListener('click', () =>{
        const comment = document.getElementById('comment-7');
        if (comment)
         comment.remove();
    });

    const button8 = document.getElementById('question-8-remove-button');
    button8.addEventListener('click', () =>{
        const childrens = button8.parentNode;
        if (childrens.ifirstChld !== button8)
            childrens.firstChild.remove();
    });

    const qustion9 = document.querySelectorAll('.highlight');
    for( let m of qustion9) {
        m.addEventListener('mouseover', () => {
            m.style.backgroundColor = 'yellow';
            m.style.color = 'white';
       });

        m.addEventListener('mouseleave', () => {
            m.style.backgroundColor = 'white';
            m.style.color = 'black';
        });
    }   
    
    const question11 = document.getElementById('question-11');
    console.log(question11.childNodes[0].textContent);
    
    const question12Button = document.getElementById('say-hello');
    question12Button.addEventListener( 'click', () => document.getElementById('message').textContent = 
                                                       `Hello ${document.getElementById('question-12-name').value}`);

    const question13 = document.getElementById('add-user');
    question13.addEventListener('click', () => {
        const question13User = document.createElement('li');
        question13User.innerText = document.getElementById('question-13-name').value;
        if (question13User.innerText)
            document.getElementById('users').append(question13User);    
    })
    
    const secrettext = document.getElementById('secret-text');
    const showButton = document.getElementById('show-button');
    showButton.addEventListener('click', () =>secrettext.hidden = false)

    const hideButton = document.getElementById('hide-button');
    hideButton.addEventListener('click', () =>secrettext.hidden = true)

    const addCalcButton = document.getElementById('add-calc-button');
    addCalcButton.addEventListener('click', () => {
        document.getElementById('question-15-answer').textContent = +document.getElementById('question-15-x').value + +document.getElementById('question-15-y').value;        
    })

    

    const equalsbtn = document.getElementById('calc-button');
    equalsbtn.addEventListener('click', () => {
        const x = document.getElementById('question-16-x');
        const y = document.getElementById('question-16-y');
        const op = document.getElementById('operator');
        let answer = 0;

        switch (op.value) {
            case '+':
                answer = +x.value + +y.value;                
                break;
            case '-':
                answer = +x.value - +y.value;
                break;
            case '*':
                answer = +x.value * +y.value;
            default:
                answer = +x.value / +y.value;
        }
        
        document.getElementById('question-16-answer').textContent = answer;
    })
}())