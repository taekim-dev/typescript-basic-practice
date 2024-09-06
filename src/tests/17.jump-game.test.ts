import { canJump } from '../problems/17.jump-game';

test('should handle basic cases', () => {
    expect(canJump([2,3,1,1,4])).toBe(true);
    expect(canJump([3,2,1,0,4])).toBe(false);
});

test('should handle edge cases', () => {
    expect(canJump([5,0,0,0,0,0])).toBe(true);
    expect(canJump([1,1,1,1,0])).toBe(false);
});