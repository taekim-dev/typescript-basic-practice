// Problem:
// Implement a curry function that transforms a function of multiple arguments into a sequence of functions, 
// each taking a single argument. 
// This is often used in functional programming to create more reusable and flexible functions.

export function curry(fn: Function): Function {
    return function curried (this: any, ...args : any[]) : any {
        if (args.length >= fn.length) {
            return fn.apply(this, args.slice(0, fn.length));
        } else {
            return function (this: any, ...nextArgs: any) : any {
                return curried.apply(this, args.concat(nextArgs));
            }
        }
    }
}