export function deepEqual<T>(obj1: T, obj2: T): boolean {
    // Handle strict equality for primitive types and null/undefined
    if (obj1 === obj2) return true;

    // Check if either object is null or undefined
    if (obj1 == null || obj2 == null) return false;

    // Check if both are arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        for (let i = 0; i < obj1.length; i++) {
            if (!deepEqual(obj1[i], obj2[i])) return false;
        }
        return true;
    }

    // Check if both are objects (and not arrays)
    if (typeof obj1 === 'object' && typeof obj2 === 'object' && !Array.isArray(obj1) && !Array.isArray(obj2)) {
        const keys1 = Object.keys(obj1) as Array<keyof T>;
        const keys2 = Object.keys(obj2) as Array<keyof T>;

        if (keys1.length !== keys2.length) return false;

        for (let key of keys1) {
            // Ensure both objects have the key and their values are deeply equal
            if (!(key in obj2) || !deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    }

    // If neither are objects or arrays, return false (they aren't equal)
    return false;
}
