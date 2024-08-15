export const memoize = <T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> => {
    const cache = new Map<string, ReturnType<T>>();

    return function memoized(this: unknown, ...args: Parameters<T>): ReturnType<T> {
        const key = JSON.stringify(args);

        if (cache.has(key)){
            return cache.get(key)!;
        }

        const res = fn.apply(this, args);
        cache.set(key, res);
        return res;
    }
}
