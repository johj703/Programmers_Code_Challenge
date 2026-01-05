// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
const [N, W, H, L] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

/* 
N : 응모한 소의 수
W : 헛간의 가로 크기
H : 헛간의 세로 크기
L : 소 한 마리당 배정되는 공간의 한 변 길이(L × L 정사각형)
*/

// ===== 입주 가능한 소의 수 계산 =====
// 헛간의 가로 방향에 배치 가능한 L × L 공간의 개수
// 예: W = 17, L = 5 -> 17 / 5 = 3개 (3 × 5 = 15, 2가 남음)
const countWidth = Math.floor(W / L);

// 헛간의 세로 방향에 배치 가능한 L × L 공간의 개수
// 예: H = 11, L = 5 -> 11 / 5 = 2개 (2 × 5 = 10, 1이 남음)
const countHeight = Math.floor(H / L);

// 헛간에 배치 가능한 총 공간의 개수
// 예: 3 × 2 = 6개
const maxSpace = countWidth * countHeight;

// 입주 가능한 소의 수는 응모한 소의 수(N)와 배치 가능한 공간의 수 중 작은 값
// 예: min(7, 6) = 6마리
const result = Math.min(N, maxSpace);

// ===== 결과 출력 =====
// 헛간에 입주할 수 있는 최대 소의 수 출력
console.log(result);
