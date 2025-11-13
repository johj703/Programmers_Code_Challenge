// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, \r 제거, 앞뒤 공백 제거 후 줄바꿈으로 분리
let [a, b, c] = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// ===== 결과 출력 =====
// 숫자로 생각했을 때 A+B-C
// Number()로 문자열을 숫자로 변환하여 일반 산술 연산
console.log(Number(a) + Number(b) - Number(c));

// 문자열로 생각했을 때 A+B-c
// +: 문자열이면 연결, -: 자동으로 숫자로 변환 후 뺄셈
console.log(a + b - c);
