import { partial } from '../problems/14.partial';

test('should partially apply arguments to a function', () => {
    const multiply = (a: number, b: number): number => a * b;
    const double = partial(multiply, 2);

    expect(double(5)).toBe(10);  // 2 * 5 = 10
});

test('should apply multiple arguments partially', () => {
    const add = (a: number, b: number, c: number): number => a + b + c;
    const addFive = partial(add, 2, 3);

    expect(addFive(10)).toBe(15);  // 2 + 3 + 10 = 15
});

test('should return the result if all arguments are provided in the partial application', () => {
    const subtract = (a: number, b: number): number => a - b;
    const subtractFive = partial(subtract, 10, 5);

    expect(subtractFive()).toBe(5);  // 10 - 5 = 5
});

test('should work with array destructuring in arguments', () => {
    const getFirstTwo = ([a, b]: [number, number], c: number): number[] => [a, b, c];
    const partialFirstTwo = partial(getFirstTwo, [1, 2]);

    expect(partialFirstTwo(3)).toEqual([1, 2, 3]);  // [1, 2, 3]
});
