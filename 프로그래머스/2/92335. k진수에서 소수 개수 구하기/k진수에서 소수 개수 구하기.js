function isPrimeNumber(number) {
    if(number <= 1) {
        return false;
    }
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n, k) {
    let answer = 0;
    // n을 k진수로 변환
    let num = n.toString(k);
    // 변환한 숫자를 0을 기준으로 나눠 배열에 저장
    let numArr = num.split("0");
    
    for(let i = 0; i < numArr.length; i++) {
        if(isPrimeNumber(Number(numArr[i]))) {
            // 해당 숫자가 소수면 answer++
            answer++;
        }
    }
    return answer;
}