import { arrayManipulation } from '../problems/1.array-manipulation';

/* Problem:
Write a function that takes an array of integers and 
returns a new array with the integers sorted in ascending order. 
You should not use the built-in Array.prototype.sort method. */

test('empty array', () => {
    expect([]).toBe([]);
})

test('array with descending order', () => {
    expect([5,4,3,2,1]).toBe([1,2,3,4,5]);
})

test('array with mixed order', () => {
    expect([4,3,5,1,2]).toBe([1,2,3,4,5]);
})