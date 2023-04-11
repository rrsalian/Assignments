const word = require("./vowel");

describe('test vowel exercise', () => {

    describe("Validate vowel functions ", () => {
        test('Test correctly word at a specified position is a vowel', () => {
            expect(word.isVowel("hello",1)).toEqual(true);
            expect(word.isVowel("why",2)).toEqual(false);
            expect(word.isVowel("iief",0)).toEqual(true);
        });

        test('Test correctly vowels returned from the word', () => {
            expect(word.vowels("hello")).toEqual(['e','o']);
            expect(word.vowels("why")).toEqual([]);
            expect(word.vowels("iief")).toEqual(['i','i','e']);
        });

        test('Test correctly the largest of the 3 numbers', () => {
            expect(word.largest(1,2,3)).toEqual(3);
            expect(word.largest(8,5,3)).toEqual(8);
            expect(word.largest(9,13,11)).toEqual(13);
        });

        test('Test correctly the scramble word', () => {
            expect(word.scramble('HELLO')).toEqual('LOLHE');
            expect(word.scramble('CANOE')).toEqual('NEOCA');
        });

        test('Test correctly largest number in an array', () => {
            expect(word.largestInArray([5, 6, 8])).toEqual(8);
            expect(word.largestInArray([13, 80, 1, 2])).toEqual(80);
        });

        test('Test correctly single String concat from an array of names', () => {
            expect(word.singleString([''])).toEqual('');
            expect(word.singleString(['John'])).toEqual('John');
            expect(word.singleString(['Rajesh','R','Salian'])).toEqual('Rajesh,R,Salian');            
        });

        test('Test correctly inserting a word into a sentence at a position', () => {
            expect(word.insertWord('I want apple',' an',6)).toEqual('I want an apple');
            expect(word.insertWord('is fun', 'He ', 0)).toEqual('He is fun');
            expect(word.insertWord('We are in ', 'GrandCircus', 50)).toEqual('We are in GrandCircus');
        });        

    });
});