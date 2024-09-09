// export function isHappy(n: number): boolean {

//     function checkNumber(num : number, count: number) : boolean {
//         let res : number = 0;
//         const stringNum : string = num.toString();
//         for(let char of stringNum) {
//             const currNum: number = Number(char);
//             const currSquare : number = currNum * currNum;
//             res += currSquare;
//         }
//         count--;
//         if (res === 1) return true;
//         if (count === 0) return false;
//         return checkNumber(res, count);
//     }

    
//     let count : number = 100;
//     return checkNumber(n, count);
// };


export function isHappy(n: number): boolean {
    const seenNumbers = new Set<number>();

    while (n !== 1 && !seenNumbers.has(n)){
        seenNumbers.add(n);
        n = getSumOfSquares(n);
    }

    return n === 1;
}

function getSumOfSquares(num : number) {
    let sum : number = 0;
    while (num > 0) {
        const lastDigit : number = num % 10;
        sum += (lastDigit * lastDigit);
        num = Math.floor(num / 10);
    }
    return sum;
}