import { compose } from '../problems/13.compose';

test('should chain multiple functions', () => {
    const sum = (a: number): number => a + 2;
    const subtract = (a: number): number => a - 1;
    const multiply = (a: number): number => a * 3;
    const composed = compose(sum, subtract, multiply); 

    expect(composed(5)).toEqual(16);
});

test('should handle a single function', () => {
    const square = (a : number) : number => a * a;
    const composed = compose(square);

    expect(composed(5)).toBe(25);
});

test('should handle no function', () => {
    const composed = compose();

    expect(composed(5)).toBe(5);
});