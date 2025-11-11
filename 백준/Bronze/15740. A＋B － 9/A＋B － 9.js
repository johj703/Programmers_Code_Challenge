// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 공백으로 분리하고 BigInt로 변환
let [A, B] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

// ===== 덧셈 계산 및 출력 =====
// BigInt끼리의 덧셈 결과를 문자열로 변환하여 출력
console.log((A + B).toString());
