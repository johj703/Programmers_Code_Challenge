// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 공백으로 분리하고 BigInt로 변환
let [a, b] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);
// a: 총 돈(엄청 큰 수)
// b: 생명체 수(엄청 큰 수)

// ===== 분배 계산 함수 =====
// a: 총 돈
// b: 생명체 수
const solution = (a, b) => {
  // BigInt 나눗셈: 몫만 반환 (소수점 버림)
  // 한 생명체당 받는 돈 = 총 돈 / 생명체 수
  const share = a / b;

  // BigInt 나머지 연산: 나누고 남은 돈
  // 분배 후 남는 돈 = 총 돈 % 생명체 수
  const remainder = a % b;

  // 첫 줄: 한 생명체당 받는 돈
  // 둘째 줄: 남는 돈
  return share + "\n" + remainder;
};

// ===== 결과 출력 =====
console.log(solution(a, b));
