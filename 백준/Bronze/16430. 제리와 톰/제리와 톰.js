// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 공백으로 분리 및 숫자로 변환
let [A, B] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// ===== 남은 치즈 계산 =====
// 1 - A/B = B/B - A/B = (B - A) / B
// 분자(남은 양)
const numerator = B - A;
// 분모(전체 양)
const denominator = B;

// ===== 결과 출력 =====
// 분수 형태로 출력: "분자 분모"
console.log(`${numerator} ${denominator}`);
