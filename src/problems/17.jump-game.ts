export function canJump(nums: number[]): boolean {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false;
        farthest = Math.max(i + nums[i], farthest);
        if (farthest >= nums.length - 1) return true;
    }
    return false;
};