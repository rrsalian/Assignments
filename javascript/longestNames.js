let name1 = "Ado"           /* Lovelace */
let name2 = "Charles";
let name3 = "Brendan";
let names = [name1 ,name2, name3];

let sameLenNameArray = [];
let longest = 0;

for ( let i = 0; i < 3; i++) {
    if (names[ i ].length > longest) {
        longest = names[ i ].length;
        sameLenNameArray[0] = names[ i ];
    }
}

/* check if another name exists with same length */
let j = 0;
for (i = 0 ; i < 3 ; i++) {
    if (longest === names[i].length) {              
        sameLenNameArray[j] = names[i];
        j = j + 1;
    }
}

console.log(sameLenNameArray);
switch (sameLenNameArray.length) {
    case 1:
        console.log(sameLenNameArray[0] + " has the longest name.");
        break;
    case 2:
        console.log(sameLenNameArray[0] + " and " + sameLenNameArray[1] + " tie for the longest name.");
        break;
    case 3:
        console.log("All three names, " + sameLenNameArray[0] + ", " + 
                    sameLenNameArray[1] + ", " + "and " + sameLenNameArray[2] +
                    ", are the same length");
        break;
    default:
        console.log("N/A");
}