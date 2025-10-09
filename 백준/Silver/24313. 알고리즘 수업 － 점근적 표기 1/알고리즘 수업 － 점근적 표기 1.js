// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄: f(n) = a1 * n + a0의 계수
const [a1, a0] = input[0].split(" ").map(Number);

// 4. 두 번째 줄: 상수 c
const c = Number(input[1]);

// 5. 세 번째 줄: 기준점 a0
const n0 = Number(input[2]);

// 6. 0(n) 정의 검증
// 조건1: f(n0) <= c * n0 (n0에서 조건 만족)
// 조건2: a1 <= c (모든 n >= n0에 대해 f(n) <= c * n 보장)
if (a1 * n0 + a0 <= c * n0 && a1 <= c) {
  // 0(n) 정의 만족
  console.log(1);
} else {
  // 0(n) 정의 불만족
  console.log(0);
}
