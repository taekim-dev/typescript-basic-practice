// Problem:
// Write a deepMerge function that takes two objects and recursively merges their properties. 
// If a property is an object in both input objects, 
// the function should merge the two objects. 
// If a property exists in only one object or isn't an object in both, 
// the property should be taken from the object that contains it.

import { deepMerge } from '../problems/6.deep-merge.ts';

test('should merge two objects with distinct properties', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    
    const result = deepMerge(obj1, obj2);
    
    expect(result).toEqual({ a: 1, b: 2 });
});

test('should merge two objects with nested properties', () => {
    const obj1 = { a: { nested: 1 } };
    const obj2 = { a: { otherNested: 2 } };
    
    const result = deepMerge(obj1, obj2);
    
    expect(result).toEqual({ a: { nested: 1, otherNested: 2 } });
});

test('should replace an object with a primitive if the property is not an object in both', () => {
    const obj1 = { a: { nested: 1 } };
    const obj2 = { a: 2 };
    
    const result = deepMerge(obj1, obj2);
    
    expect(result).toEqual({ a: 2 });
});

test('should take the property from the object that contains it when it only exists in one object', () => {
    const obj1 = { a: 1, b: { nested: 1 } };
    const obj2 = { c: 3 };
    
    const result = deepMerge(obj1, obj2);
    
    expect(result).toEqual({ a: 1, b: { nested: 1 }, c: 3 });
});
