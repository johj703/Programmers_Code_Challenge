// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞 뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [A, B, C] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// ===== 두 가지 경우 계산 =====
/* 가능한 연산 조합:
 * 1. A * B / C (곱셈 먼저, 나눗셈 나중)
 * 2. A / B * C (나눗셈 먼저, 곱셈 나중)
 *
 * Math.floor(): 소수점 아래 버림
 * 예: Math.floor(3.9) = 3, Math.floor(2.1) = 2
 */

// 곱셈 -> 나눗셈
const case1 = Math.floor((A * B) / C);

// 나눗셈 -> 곱셈
const case2 = Math.floor((A / B) * C);

// ===== 최댓값 출력 =====
/* Math.max(값1, 값2, ...): 주어진 인자들 중 가장 큰 값 반환
 *
 * - 2개 이상의 인자를 받을 수 있음
 * - 그 중 가장 큰 값을 반환
 * - 개수 제한 없음
 *
 * 예시:
 * Math.max(10, 20)        // 20
 * Math.max(5, 15, 8, 22)  // 22
 * Math.max(64, 16)        // 64
 */

console.log(Math.max(case1, case2));
