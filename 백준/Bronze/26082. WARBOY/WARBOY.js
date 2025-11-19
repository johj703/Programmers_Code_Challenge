// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
let [A, B, C] = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split(" ")
  .map(Number);

// A: 경쟁사 제품 가격
// B: 경쟁사 제품 성능
// C: WARBOY 가격

// ===== WARBOY 성능 계산 =====
// 경쟁사 가격 대비 성능: B/A
// WARBOY 가격 대비 성능: (B/A) × 3 (경쟁사의 3배)
// WARBOY 성능 = WARBOY 가격 × WARBOY 가격 대비 성능
//             = C × (B/A) × 3
//             = (B × C × 3) / A
const warboyPerformance = (B * C * 3) / A;

// ===== 결과 출력 =====
console.log(warboyPerformance);
