// 최대 공약수
const gcd = (a, b) => {
    if(b === 0){
        return a;
    } else if(a % b === 0) {
        return b;
    } else {
        return gcd(b, a % b);
    };
};

// 최소 공배수
const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
};

// 솔루션
function solution(arr){
    let answer = 1;
    for(let i = 0; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    };
    return answer;
}