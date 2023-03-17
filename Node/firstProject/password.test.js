const password = require('./password');

describe('password', () => {
    
    test('Log in with the correct password', () => {
        expect(password.checkPassword('shawn@psych.com','tearsforfears')).toEqual("Welcome Shawn");
    });

    test('Log in with the incorrect password', () => {
        expect(password.checkPassword('shawn@psych.com','tearsforfear')).toEqual("Unauthorized");
    });    

});