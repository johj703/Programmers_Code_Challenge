const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// 입력 받은 문자열을 숫자로 변환
const n = Number(input);

// 1부터 n까지의 합을 저장할 변수
let cnt = 0;

// 1부터 n까지 반복하며 각 수를 합계에 누적
for(i = 1; i <= n; i++){
    // 현재 수 i를 cnt에 더하기
    cnt = cnt + i;
}
// 최종 합계 출력
console.log(cnt);