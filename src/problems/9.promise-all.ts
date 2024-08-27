export function PromiseAll<T>(promises: Promise<T>[]) : Promise<T[]> {
    return new Promise((resolve, reject) => {
        let res : T[] = [];
        let completed : number = 0;

        if (promises.length === 0) {
            resolve([]);
        }

        promises.forEach((promise : Promise<T>, index : number) => {
            promise.then((value : T) => {
                res[index] = value;
                completed++;
                if (completed === promises.length) {
                    resolve(res);
                }

            }).catch((error : any) => {
                reject(error);
            })
        })
        
    });
}