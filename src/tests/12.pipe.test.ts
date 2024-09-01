// Problem:
// Implement a pipe function that performs left-to-right function composition. 
// It takes a sequence of functions as input and returns a new function that applies 
// each function to the result of the previous function, starting with an initial value.

import { pipe } from '../problems/12.pipe';

test('should chain multiple functions', () => {
    const sum = (a: number): number => a + 2;
    const subtract = (a: number): number => a - 1;
    const multiply = (a: number): number => a * 3;

    const result = pipe(sum, subtract, multiply)(5);
    expect(result).toEqual(18);
});

test('should handle empty functions', () => {
    const result = pipe()(5);
    expect(result).toEqual(5);
});

test('should chain multiple arguments', () => {
    const sum = (a: number): number => a + 2;
    const subtract = (a: number): number => a - 1;
    const multiply = (a: number): number => a * 3;

    const result = [1, 2, 3].map(pipe(sum, subtract, multiply));
    expect(result).toEqual([6, 9, 12]);
});