import { arrayManipulation } from '../problems/1.array-manipulation';

/* Problem:
Write a function that takes an array of integers and 
returns a new array with the integers sorted in ascending order. 
You should not use the built-in Array.prototype.sort method. */

test('empty array', () => {
    expect(arrayManipulation([])).toEqual([]);
})

test('array with descending order', () => {
    expect(arrayManipulation([5,4,3,2,1])).toEqual([1,2,3,4,5]);
})

test('array with mixed order', () => {
    expect(arrayManipulation([4,3,5,1,2])).toEqual([1,2,3,4,5]);
})