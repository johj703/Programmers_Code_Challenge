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

// 첫 줄: 라면 끓이는 횟수
const N = Number(input[0]);

//  ===== 각 케이스 계산 및 출력 =====
for (let i = 1; i <= N; i++) {
  // i번째 줄에서 A, B, X 추출
  const [A, B, X] = input[i].split(" ").map(Number);

  // 라면 공식: W = A × (X - 1) + B
  const W = A * (X - 1) + B;

  // 필요한 물의 양 출력
  console.log(W);
}
