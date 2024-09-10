import { isHappy } from '../problems/19.happy-number';

test('should handle basic cases', () => {
    expect(isHappy(2)).toEqual(false);
    expect(isHappy(19)).toEqual(true);
});

test('should handle edge cases', () => {
    expect(isHappy(1)).toEqual(true);
    expect(isHappy(0)).toEqual(false);
    expect(isHappy(-5)).toEqual(false);
});

test('should handle additional happy numbers', () => {
    expect(isHappy(7)).toEqual(true);    // 7 is a known happy number
    expect(isHappy(10)).toEqual(true);   // 10 is a happy number
    expect(isHappy(23)).toEqual(true);   // 23 is also a happy number
});

test('should handle large numbers', () => {
    expect(isHappy(123456789)).toEqual(false);  // Test a large non-happy number
    expect(isHappy(44444444)).toEqual(false);   // Another large non-happy number
});
