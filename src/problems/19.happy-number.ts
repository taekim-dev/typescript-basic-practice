export function isHappy(n: number): boolean {

    function checkNumber(num : number, count: number) : boolean {
        let res : number = 0;
        const stringNum : string = num.toString();
        for(let char of stringNum) {
            const currNum: number = Number(char);
            const currSquare : number = currNum * currNum;
            res += currSquare;
        }
        count--;
        if (res === 1) return true;
        if (count === 0) return false;
        return checkNumber(res, count);
    }

    
    let count : number = 100;
    return checkNumber(n, count);
};