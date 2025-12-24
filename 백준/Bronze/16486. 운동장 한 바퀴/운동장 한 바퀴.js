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

// ===== 입력 값 =====
const d1 = input[0]; // 직사각형 가로 길이
const d2 = input[1]; // 반원의 반지름

// ===== 원주율 =====
const PI = 3.141592;

// ===== 둘레 계산 =====
// 직사각형 가로 2개 + 원 1개 둘레(반원 2개 = 원 1개)
const perimeter = 2 * d1 + 2 * PI * d2;

// ===== 결과 출력 =====
console.log(perimeter);
