import { deepClone } from '../problems/2.deep-clone'; 

/* Problem:
Write a function that deep clones a given object. 
The function should be able to handle nested objects, arrays, and primitive data types. */

test('primitive types', () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone("hello")).toBe("hello");
    expect(deepClone(true)).toBe(true);
    expect(deepClone(false)).toBe(false);
    expect(deepClone(null)).toBeNull();
    expect(deepClone(undefined)).toBeUndefined();
    expect(deepClone(BigInt(12345))).toBe(BigInt(12345));
    expect(deepClone(Symbol('symbol'))).not.toBe(Symbol('symbol'));
});

test('objects', () => {
    expect(deepClone({})).toEqual({});
    expect(deepClone({1: 2})).toEqual({1: 2});
    expect(deepClone({"key": "value"})).toEqual({"key": "value"});
    expect(deepClone({a: 1, b: "text", c: true})).toEqual({a: 1, b: "text", c: true});
});

test('nested objects', () => {
    expect(deepClone({"key": {"innerKey": "value"}})).toEqual({"key": {"innerKey": "value"}});
    expect(deepClone({"key": {1: {2: 3}}})).toEqual({"key": {1: {2: 3}}});
    expect(deepClone({"key": {1: [{"inner": "value"}]}})).toEqual({"key": {1: [{"inner": "value"}]}});
});

test('arrays', () => {
    expect(deepClone([])).toEqual([]);
    expect(deepClone([1, 2, 3])).toEqual([1, 2, 3]);
    expect(deepClone([1, {"key": "value"}, 2])).toEqual([1, {"key": "value"}, 2]);
    expect(deepClone([[1, 2], [3, 4]])).toEqual([[1, 2], [3, 4]]);
    expect(deepClone([{"a": [1, 2]}, {"b": [3, 4]}])).toEqual([{"a": [1, 2]}, {"b": [3, 4]}]);
});

test('functions', () => {
    const fn = () => "test";
    const clonedFn = deepClone(fn);
    expect(clonedFn).toBe(fn); // Functions should return the same reference
});

test('dates', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).not.toBe(date);
    expect(clonedDate.getTime()).toBe(date.getTime());
});

test('complex objects', () => {
    const complexObj = {
        a: [1, 2, {b: 3}],
        c: {d: [4, 5, {e: "text"}]},
        f: new Date(),
        g: () => "function",
    };
    const clonedObj = deepClone(complexObj);
    expect(clonedObj).toEqual(complexObj);
    expect(clonedObj).not.toBe(complexObj);
});

test('error cases', () => {
    class CustomClass {
        constructor(public data: number) {}
    }
    const customInstance = new CustomClass(42);
    expect(() => deepClone(customInstance)).toThrow('Unable to clone this type');

    const regex = /abc/gi;
    expect(() => deepClone(regex)).toThrow('Unable to clone this type');

    const error = new Error('Test error');
    expect(() => deepClone(error)).toThrow('Unable to clone this type');

    const weakMap = new WeakMap();
    expect(() => deepClone(weakMap)).toThrow('Unable to clone this type');

    const weakSet = new WeakSet();
    expect(() => deepClone(weakSet)).toThrow('Unable to clone this type');
});
