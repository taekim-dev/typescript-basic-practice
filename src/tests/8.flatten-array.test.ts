import { flattenArray } from '../problems/8.flatten-array';

test('should merge two objects with distinct properties', () => {
    const array = [[1, 2, [3]], 4];
    const flattened = flattenArray(array);
    
    expect(flattened).toEqual([1, 2, 3, 4]);
});
