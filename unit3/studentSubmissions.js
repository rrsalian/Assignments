
function addSubmission(array, newName, newScore, newDate) {
    let addObject = {};
    /* creating a new submission object */
    addObject.name = newName;
    addObject.score = newScore;
    addObject.newDate = newDate;
    addObject.passed = (newScore >= 60) ? true : false;
    array.push(addObject);      /* Pushing new submission object to the existing submissions array */
}

function deleteSubmissionByIndex (array, index) {
    array.splice(index,1);
}

function deleteSubmissionByName (array,removeName) {

    let index = array.findIndex( element => element.name === removeName );
    array.splice(index,1);
}

function editSubmissions (array, index, score) {
    array[index].passed = true;
    array[index].score  = score;

    if (array[index].score < 60) {
        array[index].passed = false;
    }
}

function findSubmissionByName (array, name) {
    let submissionsObject = array.find( element => element.name === name);
    return submissionsObject;
}

function findLowestScore (array) {
    let lowestScore = array[0].score;
    let submissionObject = array[0];

    array.forEach(element => {      /* Use forEach if you're only dealing with synchronous code (or you don't need to wait for an asynchronous process to finish during the loop) */
        
        if (lowestScore > element.score) {
            lowestScore = element.score;
            submissionObject = element;      
        }
    });

    return submissionObject;
}

function findAverageScore (array) {    
    let totalScore = 0;
    let totalStudents = 0;
    for (const iterator of array) {
        totalScore = totalScore + iterator.score;
        totalStudents = totalStudents + 1;
    }

    return (totalScore / totalStudents);
}

function filterPassing(array) {
    let submissionsPassed = array.filter( element => element.passed);
    return submissionsPassed;
}

/* Another way to do filter */
/*
function filterPassing(array) {
    let submissionsPassed = array.filter( function(element) {
       return element.passed == true;
    });
    return submissionsPassed;
}
*/

function filter90andAbove(array) {
    let submissions90AndAbove = array.filter(element => element.score >= 90);
    return submissions90AndAbove;
}

/* Another way to do filter */
/*   
function filter90AndAbove(array) {
    let submissions90AndAbove = array.filter( function (element) {
        return element.score >= 90;
    });
    return submissions90AndAbove;
}
*/

function createRange(start, end) {
    let array = [];
    let j = 0;
    for(let i = start ; i <= end ; i++) {        
        array[j] = i;
        j = ++j;        
    }
    return array;
}

function countElements (array) {
    let newObject = {};

    for (let i = 0; i < array.length ; i++ ) {
        if ( newObject[array[i]] == null )
            newObject[array[i]] = 0;            /* array[i] is the key for the object */ 
        
        newObject[array[i]] = newObject[array[i]] + 1;
    }
    return newObject;
}

/* Date "2021-01-24" : year-month-day is always ONE DAY OFF unless you format it to Month-Day-Year Or you can format it with forward-slash
        like "2021/01/24".
        One way is to use the following - New Date("2011-01-24".replace(/-/g, '\/'));
        Now the date was parsed automatically as GMT hence the difference .Another way is to specify date/time as "2021-01-24T00:00:00" 
        which will be parsed in your local timezone. OR Specify your timezone
 
*/

let submissions = [ { name:'Jane', score:95, date:new Date("2021-01-24 EST") , passed:true },
                    { name:'Joe', score:77, date:new Date("2018-05-14 EST") , passed:true },
                    { name:'jack', score:59, date:new Date("2019-07-05 EST") , passed:false },
                    { name:'Jill', score:88, date:new Date("2020-04-22 EST") , passed:false }
                  ];

addSubmission(submissions, "John", 55, new Date("2021-01-23 EST"));  /* call to addSubmission function */
addSubmission(submissions, "Jim", 97, new Date("2022-05-16 EST"));
/* print all names of the subissions after addSubmission */
console.log("Printing all the submissions after function addSubmissions");
console.log(submissions);

deleteSubmissionByIndex(submissions, 0);
console.log("Printing all the submissions after function call deleteSubmissionsByIndex 0");
console.log(submissions);

deleteSubmissionByName(submissions,"Jill");
console.log("Printing all the submissions after function call deleteSubmissionsByName Jill");
console.log(submissions);

editSubmissions(submissions,2,65); /* Updating score of submissions for index = 2 */
console.log("Printing all submissions using function editSubmissions");
console.log(submissions);

let sObjByName = findSubmissionByName(submissions,"jack");
console.log("Printing the submission found by name using function findSubmissionByName");
console.log(sObjByName);

let sObjLowestScore = findLowestScore(submissions);
console.log("Printing the submission found for the lowest score using function findLowestScore");
console.log(sObjLowestScore);

let averageScore = findAverageScore(submissions);
console.log("Printing the Average Score for the Submissions using function findAverageScore");
console.log(averageScore);

let sObjPassed = filterPassing(submissions);
console.log("Printing all the Student Submissions passed using function filterPassing");
console.log(sObjPassed);

let sObj90AndAbove = filter90andAbove(submissions);
console.log("Printing all the Student Submissions with scores 90 and above using function filter90AndAbove");
console.log(sObj90AndAbove);

let range = createRange(2,5);
console.log("Printing range of values between 2 numbers inclusive of those numbers using function createRange");
console.log(range);

let newObject = {};
/* Printing the count of the number of unique elements of an array Object [] to an Object {} in key value form */
newObject = countElements(['a', 'b', 'a', 'c', 'a', 'b']);
console.log(newObject);