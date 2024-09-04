import { memoize } from '../problems/15.memoize';

test('should memoize the function result', () => {
    const sum = jest.fn((a: number): number => a + 2);
    const memoized = memoize(sum); 

    expect(memoized(5)).toEqual(7); 
    expect(memoized(5)).toEqual(7); //from cache
    expect(sum).toHaveBeenCalledTimes(1);
});
