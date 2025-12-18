// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, \r 제거 후 앞뒤 공백 제거를 한 후 줄바꿈으로 분리, 숫자로 변환
const input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// ===== 테스트 케이스 =====
// 첫 줄: 테스트 케이스 개수
const T = Number(input[0]);

// 각 테스트 케이스 처리
for (let i = 1; i <= T; i++) {
  // V(꼭짓점), E(모서리) 입력
  const [V, E] = input[i].split(" ").map(Number);

  // 오일러의 다면체 공식: V - E + F = 2
  // F = 2 - V + E = E - V + 2
  const F = E - V + 2;

  // 결과 출력
  console.log(F);
}
