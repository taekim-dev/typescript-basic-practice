import { subsetsWithDup } from '../problems/18.subsets';

test('should handle basic cases', () => {
    expect(subsetsWithDup([1,2,2])).toEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]);
    expect(subsetsWithDup([0])).toEqual([[], [0]]);
});

test('should handle more complex cases', () => {
    expect(subsetsWithDup([2, 3, 1, 1, 4])).toEqual([
        [],
        [1],
        [1, 1],
        [1, 1, 2],
        [1, 1, 2, 3],
        [1, 1, 2, 3, 4],
        [1, 1, 2, 4],
        [1, 1, 3],
        [1, 1, 3, 4],
        [1, 1, 4],
        [1, 2],
        [1, 2, 3],
        [1, 2, 3, 4],
        [1, 2, 4],
        [1, 3],
        [1, 3, 4],
        [1, 4],
        [2],
        [2, 3],
        [2, 3, 4],
        [2, 4],
        [3],
        [3, 4],
        [4],
    ]);
});
