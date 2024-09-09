import { isHappy } from '../problems/19.happy-number';

test('should handle basic cases', () => {
    expect(isHappy(2)).toEqual(false);
    expect(isHappy(19)).toEqual(true);
});

test('should handle complex cases', () => {
    expect(isHappy(200001)).toEqual(false);
    expect(isHappy(999999)).toEqual(false);
    expect(isHappy(986543210)).toEqual(true);
});