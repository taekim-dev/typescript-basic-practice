// Problem:
// Implement a memoize function that caches the results of a function call based on its arguments. 
// If the memoized function is called again with the same arguments, it should return the cached result 
// instead of executing the function again.

export function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map<string, ReturnType<T>>();

    return function(...args : Parameters<T>): ReturnType<T> {
        const key = JSON.stringify(args);

        if(cache.has(key)) {
            return cache.get(key)!;
        }

        const res = fn(...args);
        cache.set(key, res);
        return res;
    } as T;
}