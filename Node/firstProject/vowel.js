function isVowel( word, position) {
    const vowel = ['a', 'e', 'i', 'o' , 'u']; 
    if ( position < word.length)
        return vowel.includes(word[position]);
    
    return false;
}

function vowels(word) {
    let count = 0;
    for (let i = 0; i < word.length ; i++ ) {        
        if (isVowel(word.charAt(i),0))
            ++count;
    }
    return count;
}

module.exports = {
    isVowel,
    vowels
}

