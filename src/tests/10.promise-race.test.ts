import { PromiseRace } from '../problems/10.promise-race';

test('should resolve when no promises are given', async () => {
    const promises: Promise<any>[] = [];

    const result = await PromiseRace(promises);
    expect(result).toBeUndefined();  // With no promises, the function resolves with no value
});

test('should resolve with the first successful promise when no delays', async () => {
    const promises = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
    ];

    const result = await PromiseRace(promises);
    expect(result).toBe(1);  // Should resolve with the first promise value
});

test('should reject with the first unsuccessful promise when no delays', async () => {
    const promises = [
        Promise.reject(new Error('Promise failed')),
        Promise.resolve(2),
        Promise.resolve(3)
    ];

    try {
        await PromiseRace(promises);
    } catch (error) {
        expect(error).toEqual(new Error('Promise failed'));  // Should reject with the first error
    }
});

test('should resolve with the first successful promise when delays are involved', async () => {
    const promises = [
        new Promise((resolve) => setTimeout(() => resolve(1), 100)),
        Promise.resolve(10),
        new Promise((resolve) => setTimeout(() => resolve(2), 50)),
        Promise.resolve(3)
    ];

    const result = await PromiseRace(promises);
    expect(result).toBe(10);  // The immediate resolve should win
});
