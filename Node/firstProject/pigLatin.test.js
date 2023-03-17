const pigLatin = require('./pigLatin.js');

describe('pigLatin', () => {

    test('Translate words starting with vowel to PigLatin Correctly', () => {
        expect(pigLatin.translate('Ola America')).toEqual("olaway americaway");
    });

    test('Translate words starting with vowel to PigLatin Correctly', () => {
        expect(pigLatin.translate('APPLE is up')).toEqual("appleway isway upway");
    });
    
    test('Translate words starting with vowel to PigLatin Correctly', () => {
        expect(pigLatin.translate('ihIO is in US')).toEqual("ihioway isway inway usway");
    });
    
    test('Translate words starting with vowel to PigLatin Correctly', () => {
        expect(pigLatin.translate('I am errrr')).toEqual("iway amway errrrway");
    });
    
    test('Translate words starting with vowel to PigLatin Correctly', () => {
        expect(pigLatin.translate('Oh uck ounces')).toEqual("ohway uckway ouncesway");
    });    

    test('Translate words starting with 1 consonant to Pig Latin Correctly', () => {
        expect(pigLatin.translate('Hello World')).toEqual("ellohay orldway");
    });

    test('Translate words starting with 1 consonant to Pig Latin Correctly', () => {
        expect(pigLatin.translate('Happy Go Lucky')).toEqual("appyhay ogay uckylay");
    });

    test('Translate words starting with 2 consonants to Pig Latin Correctly', () => {
        expect(pigLatin.translate('WHAT the')).toEqual("atwhay ethay");
    });    

});

