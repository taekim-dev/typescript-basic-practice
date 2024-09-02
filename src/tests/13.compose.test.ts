import { compose } from '../problems/13.compose';

test('should chain multiple functions', () => {
    const sum = (a: number): number => a + 2;
    const subtract = (a: number): number => a - 1;
    const multiply = (a: number): number => a * 3;
    const composed = compose(sum, subtract, multiply); 

    expect(composed(5)).toEqual(16);
});