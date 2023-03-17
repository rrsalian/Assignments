
function translate(words) {    
        
    let newWord;
    for (let word of words.split(' ')) {        
        
        const flippedWord = pigLatin(word.toLowerCase());        
        newWord = (newWord === undefined) ? `${flippedWord}` : `${newWord} ${flippedWord}`;
    }    
    return newWord;
}


function pigLatin(text) {
    let length = text.length;
    let i = 0;

    for (i = 0; i < length ; i++ ) {        
        if (!isVowel(text.charAt(0))) 
            text = text.substring(1) + text.charAt(0);
        else
            break;         
    }   
    
    return i === 0 ? text + 'way' : text + 'ay';
}

function isVowel(letter) {
    const vowel = ['a', 'e', 'i', 'o' , 'u'];    
    return vowel.includes(letter);
}

//module.exports {
//    translate
//}

console.log(translate('Happy go lucky'));