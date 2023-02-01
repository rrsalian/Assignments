let submissions = [ { name:'Jane', score:95, date:2020-01-24, passed:true },
                    { name:'Joe', score:77, date:2018-05-14, passed:true},
                    { name:'Jack', score:59, date:2019-07-05, passed:false},
                    { name:'Jill', score:88, date:2020-04-22, passed:true} ];

function addSubmissions (array, newName, newScore, newDate) {
    let newObject    = {};
    newObject.name   = newName;
    newObject.score  = newScore;
    newObject.date   = newDate;
    newObject.passed = newObject.score >= 60 ? true : false;

    array.push(newObject);
}

function deleteSubmissionByIndex (array, index) {
    array.splice(index, 1);
}

function deleteSubmissionByName (array, name) {
    
    let index = array.findIndex(getName);
    console.log(index);
    //array.splice(index,1);
}

function getName(element) {
    console.log(element);
    if (element.name === 'Joe') {
        return true;
    }    
}

addSubmissions(submissions , 'John', 55, 2020-02-19);
deleteSubmissionByIndex(submissions, 3 );
deleteSubmissionByName (submissions, 'Jane');

for (let i = 0 ; i < submissions.length; i++) {
    console.log(submissions[i].name);
}
