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