import { isPlainObject } from '../problems/0.plain-object';

test('should return true for an empty object', () => {
    expect(isPlainObject({})).toEqual(true);
});

test('should return true for a simple object with key-value pairs', () => {
    expect(isPlainObject({ "name": "Kim", "country": "Korea" })).toEqual(true);
});

test('should return true for a nested plain object', () => {
    expect(isPlainObject({ "name": "Kim", "country": { "Korea": "true" } })).toEqual(true);
});

test('should return false for an array', () => {
    expect(isPlainObject([1, 2, 3])).toEqual(false);
});

test('should return false for a Date object', () => {
    const date = new Date();
    expect(isPlainObject(date)).toEqual(false);
});
