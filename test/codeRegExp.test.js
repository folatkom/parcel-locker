const regexCode = /^\d{4}$/;

test('code regex test', () => {
    expect(regexCode.test('1234')).toBe(true);
});
test('code regex test', () => {
    expect(regexCode.test('12345')).toBe(false);
});
test('code regex test', () => {
    expect(regexCode.test('123')).toBe(false);
});
test('code regex test', () => {
    expect(regexCode.test('1234 ')).toBe(false);
});
test('code regex test', () => {
    expect(regexCode.test(' 1234')).toBe(false);
});
test('code regex test', () => {
    expect(regexCode.test('abcd')).toBe(false);
});
test('code regex test', () => {
    expect(regexCode.test('1234a')).toBe(false);
});
test('code regex test', () => {
    expect(regexCode.test('')).toBe(false);
});
test('code regex test', () => {
    expect(regexCode.test('----')).toBe(false);
});