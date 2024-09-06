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
    expect(deepEqual([], [])).toBe(true);
    expect(deepEqual([1,2,3], [1,2,3])).toBe(true);
});

test('should deepEqual nested arrays', () => {
    expect(deepEqual([[1,2,3]], [[1,2,3]])).toBe(true);
    expect(deepEqual([1,2,[3]], [1,2,[3]])).toBe(true);
});

test('should deepEqual simple objects', () => {
    expect(deepEqual({}, {})).toBe(true);
    expect(deepEqual({"a" : 1, "b" : 2}, {"a" : 1, "b" : 2})).toBe(true);
});

test('should deepEqual nested objects', () => {
    expect(deepEqual({"a" : 1, "b" : {"c" : 3}}, {"a" : 1, "b" : {"c" : 3}})).toBe(true);
    expect(deepEqual({"a" : 1, "b" : {"c" : 4, "d" : {"e" : 5 }}}, {"a" : 1, "b" : {"c" : 4, "d" : {"e" : 5 }}})).toBe(true);
});

test('should deepEqual functions', () => {

});