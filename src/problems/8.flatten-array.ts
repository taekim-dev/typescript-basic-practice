export function flattenArray(input: any[]): any[] {
    let res : any[] = [];

    for (let element of input) {
        if (Array.isArray(element)) {
            res = res.concat(flattenArray(element));
        } else {
            res.push(element);
        }
    }

    return res;
}
