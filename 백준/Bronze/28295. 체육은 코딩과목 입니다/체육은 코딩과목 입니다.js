// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, \r 제거 및 앞뒤 공백 제거 후 줄바꿈으로 분리, 숫자로 변환
const commands = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);
// commands: 10개의 명령 배열 [t1, t2, ...,t10]

// ===== 방향 설정 =====
// 방향을 배열로 관리 (index: 0, 1, 2, 3)
// 0: 북(N), 1: 동(E), 2: 남(S), 3: 서(W)
const directions = ["N", "E", "S", "W"];

// 현재 방향(초기: 북쪽 = 0)
let currentDirection = 0;

// ===== 명령 실행 =====
// 각 명령에 따라 방향 변경
for (let i = 0; i < commands.length; i++) {
  const command = commands[i];

  if (command === 1) {
    // 우향우: 오른쪽으로 90도 (+1)
    currentDirection = (currentDirection + 1) % 4;
  } else if (command === 2) {
    // 뒤로 돌아: 오른쪽으로 180도 (+2)
    currentDirection = (currentDirection + 2) % 4;
  } else if (command === 3) {
    // 좌향좌: 왼쪽으로 90도 (-1 = +3)
    currentDirection = (currentDirection + 3) % 4;
  }
}

// ===== 최종 방향 출력 =====
console.log(directions[currentDirection]);
