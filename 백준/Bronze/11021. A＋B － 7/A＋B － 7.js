const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 첫 번째 줄(input[0])에 있는 테스트 케이스 개수만큼 반복
for(let i = 1; i <= input[0]; i++){
    // 각 줄에서 A, B를 공백으로 분리하여 숫자로 변환
    // "+" 연산자를 변수나 값 앞에 붙이면 숫자로 변환이 됨!
    let [a, b] = input[i].split(" ").map((value) => +value);
    
    // "Case #번호: 결과" 형식으로 출력
    console.log(`Case #${i}:`, a + b);
}