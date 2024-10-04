function solution(s) {
    let count = 0;
    let deleteZero = 0;
    let x = s;
    while(x !== '1') {
        const prevLength = x.length;
        const curLength = x.replaceAll('0', '').length;
        x = curLength.toString(2);
        count++;
        deleteZero += prevLength - curLength;
    }
    return [count, deleteZero];
}