/**
 Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums: number[]): number[] {
    let counterZero : number = 0;
    let counterOne : number = 0;
    let counterTwo : number = 0;

    nums.forEach(number => {
        if (number === 0) counterZero++;
        if (number === 1) counterOne++;
        if (number === 2) counterTwo++;
    })

    addNumbers(0, counterZero, 0, nums);
    addNumbers(counterZero, counterZero + counterOne, 1, nums);
    addNumbers(counterZero + counterOne, counterZero + counterOne + counterTwo, 2, nums);
    
    function addNumbers(start : number, end : number, number: number, nums : number[]) : void {
        for(let i = start; i < end; i++) {
            nums[i] = number;
        }
    }

    console.log(nums)
    return nums;
};