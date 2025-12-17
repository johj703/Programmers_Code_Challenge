// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, \r 제거 후 앞뒤 공백 제거를 한 후 줄바꿈으로 분리, 숫자로 변환
const input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);

// ===== 입력 값 =====
const L = input[0]; // 방학 총 일수
const A = input[1]; // 국어 총 페이지
const B = input[2]; // 수학 총 페이지
const C = input[3]; // 하루 최대 국어 페이지
const D = input[4]; // 하루 최대 수학 페이지

// ===== 숙제에 필요한 최소 일수 계산 =====
// 국어를 다 풀려면 최소 며칠이 필요한가? (올림)
const koreanDays = Math.ceil(A / C);

// 수학을 다 풀려면 최소 며칠이 필요한가? (올림)
const mathDays = Math.ceil(B / D);

// 국어와 수학을 동시에 할 수 있으므로, 더 오래 걸리는 과목 기준
const workDays = Math.max(koreanDays, mathDays);

// ===== 놀 수 있는 날 계산 =====
// 방학 일수 - 숙제하는 일수 = 놀 수 있는 일수
const playDays = L - workDays;

// ===== 결과 출력 =====
console.log(playDays);
