// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
let [N, M] = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split(" ")
  .map(Number);

// N : 100원 동전 개수
// M : 초코바 가격

// ===== 계산 및 출력 =====
// 밤고가 가진 돈 = 100원 × N개
const money = 100 * N;

// 가진 돈이 초코바 가격 이상이면 Yes, 아니면 No 출력
console.log(money >= M ? "Yes" : "No");
