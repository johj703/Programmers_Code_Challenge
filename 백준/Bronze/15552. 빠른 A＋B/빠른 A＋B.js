const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 모든 결과를 하나의 문자열로 모아서 한 번에 출력하기 위한 변수(성능 최적화)
let answer = "";
// 첫 번째 줄(input[0])에 있는 테스트 케이스 개수만큼 반복
for(i = 1; i <= input[0]; i++){
    // 각 줄에서 A, B를 공백으로 분리하여 숫자로 변환
    let [a, b] = input[i].split(" ").map((value) => +value);
    // A + B 결과를 문자열에 누적(개행문자 포함)
    answer += a + b + "\n";
}
// 모든 결과를 한 번에 출력(console.log 호출 횟수 최소화로 성능 향상)
console.log(answer);