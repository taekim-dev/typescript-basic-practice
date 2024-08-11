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
})

test('objects', () => {
    expect(deepClone({})).toEqual({});
    expect(deepClone({1:2})).toEqual({1:2});
    expect(deepClone({"key":"value"})).toEqual({"key":"value"});
})

test('nested objects', () => {
    expect(deepClone({"key":{"innerKey" : "value"}})).toEqual({"key":{"innerKey" : "value"}});
    expect(deepClone({"key":{1 : {2 : 3}}})).toEqual({"key":{1 : {2 : 3}}});
    expect(deepClone({"key":{1 : [{"inner" : "value"}]}})).toEqual({"key":{1 : [{"inner" : "value"}]}});
})

test('arrays', () => {
    expect(deepClone([])).toBe([]);
    expect(deepClone([1, 2, 3])).toBe([1, 2, 3]);
    expect(deepClone([1, {"key": "value"}, 2])).toBe([1, {"key": "value"}, 2]);
})