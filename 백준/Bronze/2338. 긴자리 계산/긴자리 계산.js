// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 줄바꿈으로으로 분리 후 BigInt로 변환
let [a, b] = require("fs")
  .readFileSync(file, "utf-8")
  .trim()
  .split("\n")
  .map(BigInt);
// a: 첫 번째 큰 정수
// b: 두 번째 큰 정수

// ===== 결과 출력 =====
// BigInt 연산 결과를 문자열로 변환하여 출력 (뒤에 'n'이 안 붙도록)

// 첫째 줄: A + B
console.log((a + b).toString());

// 둘째 줄: A - B
console.log((a - b).toString());

// 셋째 줄: A × B
console.log((a * b).toString());
