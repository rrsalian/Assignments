const word = require("./vowel");

describe('test vowel exercise', () => {

    describe("Validate vowel functions ", () => {
        test('Test correctly word at a specified position is a vowel', () => {
            expect(word.isVowel("hello",1)).toEqual(true);
            expect(word.isVowel("why",2)).toEqual(false);
            expect(word.isVowel("iief",0)).toEqual(true);
        });

        test('Test correctly number of vowels', () => {
            expect(word.vowels("hello")).toEqual(2);
            expect(word.vowels("why")).toEqual(0);
            expect(word.vowels("iief")).toEqual(3);
        });
    });
});