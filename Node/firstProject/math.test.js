const math = require('./math');

describe('math', () => {

    test('1 + 1 equals 2', () => {
        expect(math.add(1,1)).toEqual(2);
    });

    test('1 - 1 equals 0', () => {
        expect(math.subtract(1,1)).toEqual(0);
    });

});