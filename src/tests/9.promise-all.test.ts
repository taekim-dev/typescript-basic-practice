import { PromiseAll } from '../problems/9.promise-all'

test('should resolve when no promises are given', async () => {
    const promises : any = [];

    const result = await PromiseAll(promises);
    expect(result).toEqual([]);
});

test('should resolve when all promises resolve', async () => {
    const promises = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
    ];

    const result = await PromiseAll(promises);
    expect(result).toEqual([1, 2, 3]);
});

test('should reject when any promise rejects', async () => {
    const promises = [
        Promise.resolve(1),
        Promise.reject(new Error('Promise failed')),
        Promise.resolve(3)
    ];

    try {
        await PromiseAll(promises);
    } catch (error) {
        expect(error).toEqual(new Error('Promise failed'));
    }
});
