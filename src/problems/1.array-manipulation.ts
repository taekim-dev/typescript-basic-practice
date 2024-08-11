
export const arrayManipulation = (input: Array<number>) : Array<number> => {
    if (input.length < 1) return input;

    let pivot : number = input[0];
    let left : Array<number> = [];
    let right : Array<number> = [];

    for(let i = 1; i < input.length; i++) {
        if (input[i] < pivot) {
            left.push(input[i]);
        } else {
            right.push(input[i]);
        }
    }

    return [...arrayManipulation(left), pivot, ...arrayManipulation(right)];
}