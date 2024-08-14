// Problem:
// Implement a memoize function that caches the results of function calls. 
// The memoize function should return a function that, 
// when invoked, will check if the result for the given arguments has already been computed. 
// If so, it should return the cached result; otherwise, 
// it should compute the result, cache it, and then return it.

import { memoize } from '../problems/4.memoize-function';

test('should return the correct result for a simple function', () => {
    const square = (n: number) => n * n;
    const memoizedSquare = memoize(square);

    expect(memoizedSquare(2)).toBe(4);
    expect(memoizedSquare(3)).toBe(9);
    expect(memoizedSquare(4)).toBe(16);
});

test('should cache the result and not call the original function again for the same input', () => {
    const square = jest.fn((n: number) => n * n);
    const memoizedSquare = memoize(square);

    expect(memoizedSquare(2)).toBe(4);
    expect(square).toHaveBeenCalledTimes(1);  // Original function is called

    expect(memoizedSquare(2)).toBe(4);
    expect(square).toHaveBeenCalledTimes(1);  // Result is retrieved from cache, function is not called again
});

test('should handle functions with multiple arguments', () => {
    const add = (a: number, b: number) => a + b;
    const memoizedAdd = memoize(add);

    expect(memoizedAdd(2, 3)).toBe(5);
    expect(memoizedAdd(2, 3)).toBe(5);  // Cached result
    expect(memoizedAdd(3, 4)).toBe(7);
});

test('should cache results separately for different arguments', () => {
    const factorial = jest.fn((n: number): number => {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    });
    const memoizedFactorial = memoize(factorial);

    expect(memoizedFactorial(5)).toBe(120);
    expect(factorial).toHaveBeenCalledTimes(6);  // Factorial function called 6 times (5 to 0)

    expect(memoizedFactorial(5)).toBe(120);
    expect(factorial).toHaveBeenCalledTimes(6);  // Cached result, no additional calls

    expect(memoizedFactorial(6)).toBe(720);
    expect(factorial).toHaveBeenCalledTimes(7);  // Only one additional call for the new input (6)
});

test('should work correctly with non-primitive arguments', () => {
    const getLength = jest.fn((arr: any[]) => arr.length);
    const memoizedGetLength = memoize(getLength);

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];

    expect(memoizedGetLength(array1)).toBe(3);
    expect(getLength).toHaveBeenCalledTimes(1);  // Original function should be called once

    expect(memoizedGetLength(array1)).toBe(3);  // Cached result for the same reference
    expect(getLength).toHaveBeenCalledTimes(1);  // Function should not be called again

    expect(memoizedGetLength(array2)).toBe(3);  // New array, different reference, new result cached
    expect(getLength).toHaveBeenCalledTimes(2);  // Original function should be called again for new input

    expect(memoizedGetLength(array2)).toBe(3);  // Cached result for array2
    expect(getLength).toHaveBeenCalledTimes(2);  // Function should not be called again
});

test('should clear cache for new inputs', () => {
    const multiply = jest.fn((a: number, b: number) => a * b);
    const memoizedMultiply = memoize(multiply);

    expect(memoizedMultiply(2, 3)).toBe(6);
    expect(multiply).toHaveBeenCalledTimes(1);  // Original function should be called once

    expect(memoizedMultiply(2, 3)).toBe(6);  // Cached result
    expect(multiply).toHaveBeenCalledTimes(1);  // Function should not be called again

    expect(memoizedMultiply(3, 3)).toBe(9);  // New inputs
    expect(multiply).toHaveBeenCalledTimes(2);  // Original function should be called for new inputs

    expect(memoizedMultiply(2, 3)).toBe(6);  // Cached result for the first inputs
    expect(multiply).toHaveBeenCalledTimes(2);  // Function should not be called again
});
