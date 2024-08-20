import { isPlainObject } from "./0.plain-object";

export function deepMerge(obj1: { [key: string]: any }, obj2: { [key: string]: any }): { [key: string]: any } {
    const newObj: { [key: string]: any } = { ...obj1 };

    for (const [key, value] of Object.entries(obj2)) {
        if (newObj.hasOwnProperty(key)) {
            if (isPlainObject(newObj[key]) && isPlainObject(value)) {
                newObj[key] = deepMerge(newObj[key], value);
            } else {
                newObj[key] = value; // Overwrite primitive or non-object values
            }
        } else {
            newObj[key] = value;
        }
    }

    return newObj;
}