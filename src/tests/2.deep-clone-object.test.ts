import { deepClone } from '../problems/2.deep-clone'; 

/* Problem:
Write a function that deep clones a given object. 
The function should be able to handle nested objects, arrays, and primitive data types. */

test('primitive types', () => {
    expect(deepClone(42)).toBe(42); // Number
    expect(deepClone("hello")).toBe("hello"); // String
    expect(deepClone(true)).toBe(true); // Boolean true
    expect(deepClone(false)).toBe(false); // Boolean false
    expect(deepClone(null)).toBeNull(); // Null
    expect(deepClone(undefined)).toBeUndefined(); // Undefined
    expect(deepClone(BigInt(12345))).toBe(BigInt(12345)); // BigInt
    expect(deepClone(Symbol('symbol'))).not.toBe(Symbol('symbol')); // Symbol
});

test('objects', () => {
    expect(deepClone({})).toEqual({}); // Empty object
    expect(deepClone({1: 2})).toEqual({1: 2}); // Simple object with number
    expect(deepClone({"key": "value"})).toEqual({"key": "value"}); // Simple object with string
    expect(deepClone({a: 1, b: "text", c: true})).toEqual({a: 1, b: "text", c: true}); // Mixed types
});

test('nested objects', () => {
    expect(deepClone({"key": {"innerKey": "value"}})).toEqual({"key": {"innerKey": "value"}}); // Nested object
    expect(deepClone({"key": {1: {2: 3}}})).toEqual({"key": {1: {2: 3}}}); // Deeply nested object
    expect(deepClone({"key": {1: [{"inner": "value"}]}})).toEqual({"key": {1: [{"inner": "value"}]}}); // Object with array as value
});

test('arrays', () => {
    expect(deepClone([])).toEqual([]); // Empty array
    expect(deepClone([1, 2, 3])).toEqual([1, 2, 3]); // Array of numbers
    expect(deepClone([1, {"key": "value"}, 2])).toEqual([1, {"key": "value"}, 2]); // Array with objects
    expect(deepClone([[1, 2], [3, 4]])).toEqual([[1, 2], [3, 4]]); // Array of arrays
    expect(deepClone([{"a": [1, 2]}, {"b": [3, 4]}])).toEqual([{"a": [1, 2]}, {"b": [3, 4]}]); // Array of objects containing arrays
});

test('functions', () => {
    const fn = () => "test";
    const clonedFn = deepClone(fn);
    expect(clonedFn).not.toBe(fn); // Ensure the function reference is different
    expect(clonedFn()).toBe("test"); // Ensure the function behavior is preserved
});

test('dates', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).not.toBe(date); // Ensure the Date reference is different
    expect(clonedDate.getTime()).toBe(date.getTime()); // Ensure the Date value is the same
});

test('complex objects', () => {
    const complexObj = {
        a: [1, 2, {b: 3}],
        c: {d: [4, 5, {e: "text"}]},
        f: new Date(),
        g: () => "function",
    };
    const clonedObj = deepClone(complexObj);
    expect(clonedObj).toEqual(complexObj); // Check if the deep cloned object is deeply equal
    expect(clonedObj).not.toBe(complexObj); // Check if the deep cloned object is not the same reference
});
