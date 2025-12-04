// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, \r 제거 후 앞뒤 공백 제거를 한 후 줄바꿈으로 분리
const input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// 첫째 줄: 첫 번째 바구니 (사과 A, 오렌지 B)
const [A, B] = input[0].split(" ").map(Number);

// 둘째 줄: 두 번째 바구니 (사과 C, 오렌지 D)
const [C, D] = input[1].split(" ").map(Number);

// ===== 최소 이동 횟수 계산 =====
// 방법 1: 바구니1에 사과만, 바구니2에 오렌지만
// - 바구니1의 오렌지 B개를 바구니2로 이동
// - 바구니2의 사과 C개를 바구니1로 이동
// - 총 이동: B + C
const method1 = B + C;

// 방법 2: 바구니1에 오렌지만, 바구니2에 사과만
// - 바구니1의 사과 A개를 바구니2로 이동
// - 바구니2의 오렌지 D개를 바구니1로 이동
// - 총 이동: A + D
const method2 = A + D;

// ===== 최소값 출력 =====
// 두 방법 중 이동 횟수가 적은 것 선택
console.log(Math.min(method1, method2));
