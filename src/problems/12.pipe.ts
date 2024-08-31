// Problem:
// Implement a pipe function that performs left-to-right function composition. 
// It takes a sequence of functions as input and returns a new function that applies 
// each function to the result of the previous function, starting with an initial value.

export function pipe(...fns: Function[]): Function {
    return function piped(...args : any[]) {
        let result = args[0];

        for (let i = 0; i < fns.length; i++) {
            result = fns[i](result);
        }

        return result;
    }
}
