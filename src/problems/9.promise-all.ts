export function PromiseAll<T>(promises: Promise<T>[]) : Promise<T[]> {
    return new Promise((resolve, reject) => {
        let res : T[] = [];
        for (let promise of promises) {
            promise.then((value) => {
                res.push(value);
            }).catch((error) => {
                reject("Promise failed");
            })
        }
        resolve(res)
    });
}