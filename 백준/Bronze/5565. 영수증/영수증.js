// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, \r 제거 후 앞뒤 공백 제거를 한 후 줄바꿈으로 분리
const input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);

// ===== 가격 정보 ======
// 첫 줄: 10권의 총 가격
const total = input[0];

// ===== 9권 가격 합계 계산 =====
// 둘째 줄부터 9개 줄: 가격을 알 수 있는 9권의 가격
let sum = 0;
for (let i = 1; i <= 9; i++) {
  sum += input[i];
}

// ===== 알 수 없는 책 가격 계산 =====
// 총 가격 - 9권 합계 = 나머지 1권 가격
const unknownPrice = total - sum;

// ===== 결과 출력 =====
console.log(unknownPrice);
