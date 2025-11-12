// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 공백으로 분리하고 BigInt로 변환
let [A, B] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

// ===== 곱셈 계산 및 출력 =====
// BigInt끼리의 곱셈 결과를 문자열로 변환하여 출력
console.log((A * B).toString());
