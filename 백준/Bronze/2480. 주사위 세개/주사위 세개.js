const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((value) => +value);

// 주사위 눈을 내림차순으로 정렬(큰 수부터 배치)
// 정렬 후 A는 가장 큰 값, C는 가장 작은 값
input.sort(function(a, b) {
    // 내림차순 정렬
    return b - a;
});

// 구조분해할당으로 정렬된 주사위 눈 추출
const [A, B, C] = input;

// 상금 계산 로직: 조건에 따라 상금 계산
// 조건1: 모두 다른 눈 - 가장 큰 눈 * 100원
if(A !== B && A !== C && B !== C) {
    // A가 가장 큰 값이므로 A * 100
    console.log(A * 100);
    
// 조건2-1: A와 B가 같고 C가 다름(2개가 같은 경우) 
} else if(A === B && B !== C){
    // 1,000원 + (같은 눈) * 100원
    console.log(1000 + A * 100);
    
// 조건2-2: B와 C가 같고 A가 다름(2개가 같은 경우)
} else if(B === C && C !== A){
    // 1,000원 + (같은 눈) * 100원
    console.log(1000 + C * 100);
    
// 조건2-3: C와 A가 같고 B가 다름(2개가 같은 경우)
} else if(C === A && A !== B){
    // 1,000원 + (같은 눈) * 100원
    console.log(1000 + C * 100);

// 조건 3: 모두 같은 눈(3개 모두 같음)
} else {
    // 10,000원 + (같은 눈) * 1,000원
    console.log(10000 + A * 1000)
}