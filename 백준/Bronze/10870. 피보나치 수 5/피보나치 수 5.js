//===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 파일 읽기 → 문자열 변환 → 공백 제거
const input = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 변환
  .trim(); // 앞 뒤 공백 제거

// ===== 피보나치 함수 (재귀) =====
// num: 구하려는 피보나치 수의 인덱스
// 반환값: num번째 피보나치 수
function fibonacci(num) {
  // Base Case 1: F(0) = 0
  if (num === 0) return 0;

  // Base Case 2: F(1) = 1
  if (num === 1) return 1;

  // Recursive Case: F(n) = F(n-1) + F(n-2)
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// ===== 결과 출력 =====
console.log(fibonacci(+input));
