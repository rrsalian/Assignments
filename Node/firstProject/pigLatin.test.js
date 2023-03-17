const pigLatin = require('./pigLatin.js');

describe('pigLatin', () => {
    
    test('Translated English to Pig Latin Correctly', () => {
        expect(pigLatin.translate('Hello World')).toEqual("ellohay orldway");
    });

    test('Translated English to Pig Latin Correctly', () => {
        expect(pigLatin.translate('')).toEqual("Unauthorized");
    });    

});

