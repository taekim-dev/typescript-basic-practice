import { flattenArray } from '../problems/8.flatten-array';

test('should flatten a deeply nested array', () => {
    const array = [1, [2, [3, [4, 5]], 6], 7];
    const flattened = flattenArray(array);
    
    expect(flattened).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('should handle an empty array', () => {
    const array: any[] = [];
    const flattened = flattenArray(array);
    
    expect(flattened).toEqual([]);
});

test('should flatten an array with mixed types', () => {
    const array = [1, ['a', ['b', 2]], 3];
    const flattened = flattenArray(array);
    
    expect(flattened).toEqual([1, 'a', 'b', 2, 3]);
});
