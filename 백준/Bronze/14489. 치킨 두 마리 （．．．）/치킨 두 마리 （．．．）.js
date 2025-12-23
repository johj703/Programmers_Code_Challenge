// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, \r 제거 후 앞뒤 공백 제거를 한 후 줄바꿈으로 분리
const input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// ===== 입력 값 =====
// 첫 줄: 두 통장 잔고
const [A, B] = input[0].split(" ").map(Number);

// 둘째 줄: 치킨 한 마리 가격
const C = Number(input[1]);

// ===== 계산 =====
// 두 통장 잔고의 합
const total = A + B;

// 치킨 두 마리 가격
const chickenCost = 2 * C;

// ===== 치킨 구매 가능 여부 확인 =====
if (total >= chickenCost) {
  // 살 수 있으면: 치킨을 사고 남은 돈
  console.log(total - chickenCost);
} else {
  // 살수 없으면: 현재 잔고 합
  console.log(total);
}
