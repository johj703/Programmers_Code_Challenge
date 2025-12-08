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

// 첫 줄: 테스트 케이스 개수
const T = Number(input[0]);

// ===== 각 테스트 케이스 처리 =====
// 1번 케이스부터 시작(1 - based)
for (let i = 1; i <= T; i++) {
  // i번째 줄에서 주사위 두 개의 눈을 읽음
  const [dice1, dice2] = input[i].split(" ").map(Number);

  // 두 주사위 눈의 합
  const sum = dice1 + dice2;

  // "Case x: 합" 형식으로 출력
  console.log(`Case ${i}: ${sum}`);
}
