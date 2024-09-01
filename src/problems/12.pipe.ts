// Problem:
// Implement a pipe function that performs left-to-right function composition. 
// It takes a sequence of functions as input and returns a new function that applies 
// each function to the result of the previous function, starting with an initial value.

export function pipe<T>(...fns: Array<(arg: T) => T>): (initialArg: T) => T {
    return function (initialArg: T): T {
        return fns.reduce((acc, fn) => fn(acc), initialArg);
    };
}
