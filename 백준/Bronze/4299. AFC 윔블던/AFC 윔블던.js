// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, \r 제거 후 앞뒤 공백 제거를 한 후 줄바꿈으로 분리
const input = require("fs").readFileSync(file).toString().trim();

// ===== 입력 값 =====
// sum: 두 수의 합, diff: 두 수의 차
const [sum, diff] = input.split(" ").map(Number);

// ===== 점수 계산 =====
// A + B = sum, A - B = diff
// -> A = (sum + diff) / 2
// -> B = (sum - diff) / 2

// 유효성 검사
// 1. (sum + diff)가 짝수여야 함 (정수 조건)
// 2. sum >= diff 이여야 함 (B >= 0 조건)
if ((sum + diff) % 2 !== 0 || sum < diff) {
  console.log(-1);
} else {
  const A = (sum + diff) / 2;
  const B = (sum - diff) / 2;
  console.log(A, B);
}
