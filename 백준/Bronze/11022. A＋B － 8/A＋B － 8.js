const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 첫 번째 줄(input[0])에 있는 테스트 케이스 개수만큼 반복
for(let i = 1; i <= input[0]; i++){
    // 각 줄에서 A, B를 공백으로 분리하여 숫자로 변환
    let [a, b] = input[i].split(" ").map((value) => +value);
    // "Case #번호: A + B = 결과" 형식으로 출력(11022번 특정 출력 형식)
    console.log(`Case #${i}: ${a} + ${b} = ${a + b}`)
}