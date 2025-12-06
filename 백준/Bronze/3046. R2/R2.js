// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, \r 제거 및 앞뒤 공백 제거 후 줄바꿈으로 분리, 숫자로 변환
const [R1, S] = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split(" ")
  .map(Number);

// ===== R2 계산 =====
// 평균 공식: S = (R1 + R2) / 2
// 식을 정리하면: R2 = 2 * S - R1
const R2 = 2 * S - R1;

// ===== 결과 출력 =====
console.log(R2);
