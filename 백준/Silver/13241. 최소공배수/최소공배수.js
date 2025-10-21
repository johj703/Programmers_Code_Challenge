//===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 파일 읽기 → 문자열 변환 → 공백 제거 → 공백으로 분리 → 숫자로 변환
const [a, b] = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 변환
  .trim() // 앞 뒤 공백 제거
  .split(" ") // 공백으로 분리
  .map(Number); // 문자열을 숫자로 변환

// ===== 유틸리티 함수 =====
// 최대공약수(GCD) 계산 - 유클리드 호제법 사용
// a: 첫 번째 수
// b: 두 번째 수
function gcd(a, b) {
  // Base Case: b가 0이면 a가 최대공약수
  if (b === 0) {
    return a;
    // Recursive Case: gcd(a, b) = gcd(b, a % b)
  } else {
    return gcd(b, a % b);
  }
}

// 최소공배수(LCM) 계산
// 공식: lcm(a, b) = (a × b) / gcd(a, b)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// ===== 결과 출력 =====
console.log(lcm(a, b));
