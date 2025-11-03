// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 공백으로 분리 및 숫자로 변환
let [a, b] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// ===== 최대공약수 (GCD) - 유클리드 호제법 =====
// 재귀 방식: O(log N)
function gcd(a, b) {
  // Base Case: b가 0이면 a가 최대 공약수
  if (b === 0) return a;

  // Recursive Case: gcd(a, b) = gcd(b, a % b)
  return gcd(b, a % b);
}

// ===== 최소공배수 (LCM) =====
// 공식: lcm(a, b) = (a × b) / gcd(a, b)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// ===== 결과 출력 =====
console.log(gcd(a, b));
console.log(lcm(a, b));
