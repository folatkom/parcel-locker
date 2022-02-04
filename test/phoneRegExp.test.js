const regexPhone = /^(\d{9}|\d{3}[-\s]\d{2}[-\s]\d{2}[-\s]\d{2}|\d{3}[-\s]\d{3}[-\s]\d{3})$/;

test('phone regex test', () => {
    expect(regexPhone.test('123123123')).toBe(true);
});
test('phone regex test', () => {
    expect(regexPhone.test('123 123 123')).toBe(true);
});
test('phone regex test', () => {
    expect(regexPhone.test('123 23 23 23')).toBe(true);
});
test('phone regex test', () => {
    expect(regexPhone.test('123-123-123')).toBe(true);
});
test('phone regex test', () => {
    expect(regexPhone.test('123-34-34-34')).toBe(true);
});
test('phone regex test', () => {
    expect(regexPhone.test('123 34-34-34')).toBe(true);
});
test('phone regex test', () => {
    expect(regexPhone.test('12312312')).toBe(false);
});
test('phone regex test', () => {
    expect(regexPhone.test('12312312345')).toBe(false);
});
test('phone regex test', () => {
    expect(regexPhone.test('abcdefghj')).toBe(false);
});
test('phone regex test', () => {
    expect(regexPhone.test('1231231a')).toBe(false);
});
test('phone regex test', () => {
    expect(regexPhone.test('')).toBe(false);
});
test('phone regex test', () => {
    expect(regexPhone.test('-123-123-123')).toBe(false);
});
test('phone regex test', () => {
    expect(regexPhone.test('---------')).toBe(false);
});