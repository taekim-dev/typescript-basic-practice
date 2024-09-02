// Problem:
// Implement a partial function that allows partial application of arguments to a function.
// It takes a function and some arguments, and returns a new function that takes the remaining arguments.

export function partial<T extends (...args: any[]) => any>(
    fn: T,
    ...partialArgs: Parameters<T>
): (...remainingArgs: Parameters<T>) => ReturnType<T> {
    
    return function (...remainingArgs: Parameters<T>) : ReturnType<T>  {
        return fn(...partialArgs, ...remainingArgs);
    }

}

