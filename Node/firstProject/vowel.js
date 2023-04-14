function isVowel( word, position) {    
    if ( position < word.length)
        return ['a', 'e', 'i', 'o' , 'u'].includes(word[position]);
    
    return false;
}

function vowels(word) {
    let vowels = [];
    for (let i = 0; i < word.length ; i++ ) {        
        if (isVowel(word[i],0))
            vowels.push(word[i]);
    }
    return vowels;
}

function largest(a, b, c) {
    return a > b ? (a > c ? a : c): (b > c ? b : c);
}

function scramble(word) {
    if (word.length > 5) 
        return null;

    return `${word[2]}${word[4]}${word[3]}${word[0]}${word[1]}`;
}

function largestInArray(arr) {
    return arr.reduce((a, b) => Math.max(a, b), -Infinity);
}

function singleString(arr) {
    return arr.toString();
}

function insertWord(sentence, insertWord, position) {  
    return [sentence.slice(0, position), insertWord, sentence.slice(position)].join('');
}

console.log(insertWord('We are in ', 'GrandCircus', 50));


module.exports = {
    isVowel,
    vowels, 
    largest,
    scramble,
    largestInArray,
    singleString,
    insertWord
}
