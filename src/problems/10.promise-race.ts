// Problem:
// Implement a promiseRace function that mimics the behavior of Promise.race. 
// This function should take an array of promises and return a new promise 
// that resolves or rejects as soon as the first input promise resolves or rejects.

export function PromiseRace<T>(promises: Promise<T>[]): Promise<T | undefined> {

    return new Promise((resolve, reject) => {
        if(promises.length === 0) {
            resolve(undefined);
            return
        }

        promises.forEach(promise => {
            promise.then(resolve).catch(reject);
        });
    });
}
