export function canJump(nums: number[]): boolean {
    
    const positions : Boolean[] = Array(nums.length).fill(false);

    for(let i = 0; i < positions.length-1; i++) {
        const capacity = nums[i];
        if ((i + capacity) >= (positions.length-1)) return true;

        for (let j = 1; j <= capacity; j++) {
            if (positions[i + j] === false) {
                positions[i + j] = true;
            }
        }
    }

    return false;
};