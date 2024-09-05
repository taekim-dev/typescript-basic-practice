import { deepEqual } from '../problems/16.deep-equal';


test('should deepEqual primary types', () => {
    expect(deepEqual(5, 5)).toBe(true);
    expect(deepEqual(false, false)).toBe(true);
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(undefined, undefined)).toBe(true);
    expect(deepEqual(BigInt(2), BigInt(2))).toBe(true);
    expect(deepEqual("hello", "hello")).toBe(true);
});

test('should return false for unequal primary types', () => {
    expect(deepEqual(5, 10)).toBe(false);
    expect(deepEqual(false, true)).toBe(false);
    expect(deepEqual(null, undefined)).toBe(false);
    expect(deepEqual(BigInt(2), BigInt(3))).toBe(false);
    expect(deepEqual("hello", "world")).toBe(false);
});

test('should deepEqual simple arrays', () => {

});

test('should deepEqual nested arrays', () => {

});

test('should deepEqual simple objects', () => {

});

test('should deepEqual nested objects', () => {

});

test('should deepEqual functions', () => {

});