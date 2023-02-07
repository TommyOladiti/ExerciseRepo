const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    const actual = sum(1,2);
    expect(actual).toBe(3);

    
});