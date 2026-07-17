const obscure = require('./obscure');

describe('Credit Card Obscure Tests', () => {
    test('should obscure all but the last 4 digits for a 12-digit number', () => {
        expect(obscure('123456789012')).toBe('********9012');
    });

    test('should obscure all but the last 4 digits for a 16-digit number', () => {
        expect(obscure('1234567812345678')).toBe('************5678');
    });

    test('should return "Invalid Credit Card" for length less than 12', () => {
        expect(obscure('12345')).toBe('Invalid Credit Card');
    });

    test('should return "Invalid Credit Card" for length greater than 16', () => {
        expect(obscure('12345678901234567')).toBe('Invalid Credit Card');
    });
});