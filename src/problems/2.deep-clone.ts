export const deepClone = (input: any): any => {
    if (
        typeof input === 'number' ||
        typeof input === 'string' ||
        typeof input === 'boolean' ||
        typeof input === 'bigint' ||
        typeof input === 'symbol' ||
        input === null ||
        input === undefined
    ) {
        return input;
    }

    if (Array.isArray(input)) {
        let output: any[] = [];
        for (let element of input) {
            output.push(deepClone(element));
        }
        return output;
    }

    // Handle objects (including Date)
    if (typeof input === 'object') {
        if (input instanceof Date) {
            return new Date(input.getTime());
        }

        if (input instanceof Map) {
            const output = new Map();
            input.forEach((value, key) => {
                output.set(deepClone(key), deepClone(value));
            });
            return output;
        }

        if (input instanceof Set) {
            const output = new Set();
            input.forEach(value => {
                output.add(deepClone(value));
            });
            return output;
        }

        if (input.constructor !== Object) {
            throw new Error('Unable to clone this type');
        }

        let output: { [key: string]: any } = {};
        Object.keys(input).forEach(key => {
            output[key] = deepClone(input[key]);
        });

        return output;
    }

    if (typeof input === 'function') {
        return input;
    }

    throw new Error('Unable to clone this type');
}
