export function PromiseAll<T>(promises: Promise<T>[]) : Promise<T[]> {
    return new Promise((resolve, reject) => {
        let res : T[] = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve([]);
        }

        promises.forEach((promise, index) => {
            promise.then(value => {
                res[index] = value;
                completed++;
                if (completed === promises.length) {
                    resolve(res);
                }

            }).catch(error => reject(error))
        })
        
    });
}