// Problem:
// Implement a compose function that performs right-to-left function composition. 
// It takes a sequence of functions as input and returns a new function that applies 
// each function to the result of the previous function, starting with an initial value.

export function compose<T>(...fns: Array<(arg: T) => T>): (initialArg: T) => T {
    return function (initialArg: T) : T {
        let curr = initialArg;
        for (let i = fns.length-1; i >= 0 ; i--) {
            curr = fns[i](curr);
        }
        return curr;
    }
}


