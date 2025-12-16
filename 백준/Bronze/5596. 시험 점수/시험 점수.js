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

// ===== 점수 계산 =====
// 민국이의 4과목 점수 (정보, 수학, 과학, 영어)
const mingukScores = input[0].split(" ").map(Number);
const S = mingukScores.reduce((acc, cur) => acc + cur, 0);

// 만세의 4과목 점수 (정보, 수학, 과학, 영어)
const manseScores = input[1].split(" ").map(Number);
const T = manseScores.reduce((acc, cur) => acc + cur, 0);

// ===== 최댓값 출력 =====
// 두 총점 중 큰 값 출력 (동점이면 민국이 총점 출력)
console.log(Math.max(S, T));
