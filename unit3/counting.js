console.log("for loop to log numbers from 1 to 10:");
for ( let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("for loop to count down, logging numbers from 10 to 1:");
for (i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("While loop to log numbers from 1 to 10:");
i = 1;
while( i <= 10 ) {
    console.log(i);
    i++;
}

console.log("While loop to count down, logging numbers from 10 to 1:");
i = 10;
while( i > 0) {
    console.log(i);
    i--;
}

console.log("Do While loop to log numbers from 1 to 10:");
i = 1;
do {
    console.log(i);
    i++;
} while ( i < 11 )

console.log("While loop to count down, logging numbers from 10 to 1:");
i = 10;
do {
    console.log(i);
    i--;
} while ( i > 0 )

console.log("Loop through the array and log all the numbers:");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/* Extended Challenge */
console.log("Extended Challenge");
var str = "headlamp";
var padding = "";
if (str.length < 10) {
    for (i = 0; i < 10 - str.length; i++) {
        padding = padding + " ";
    }
    str = padding + str;
}    

console.log("String is:" + str);
console.log("length of string: " + str.length);
