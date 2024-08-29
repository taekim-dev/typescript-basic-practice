import { curry } from '../problems/11.curry';

test('should transform multiple arguments function', async () => {
    const inputFunction = (x : number, y : number, z : number ) => x + y + z;
    const curried = curry(inputFunction);

    expect(curried(1, 2, 3)).toEqual(6);
    expect(curried(1)(2)(3)).toEqual(6);
    expect(curried(1, 2) (3)).toEqual(6);
    expect(curried(1, 2, 3, 4)).toEqual(6);
});
