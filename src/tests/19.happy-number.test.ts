import { isHappy } from '../problems/19.happy-number';

test('should handle basic cases', () => {
    expect(isHappy(2)).toEqual(false);
    expect(isHappy(19)).toEqual(true);
});