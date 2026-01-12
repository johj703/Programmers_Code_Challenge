// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [R, C, N] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// R: 대회장의 세로 크기(행)
// C: 대회장의 가로 크기(열)
// N: 한 대의 CCTV가 쵤영 가능한 영역(N × N 크기)

// ===== 필요한 CCTV 최소 개수 계산 =====
// 세로 방향에 필요한 CCTV 개수
// R행을 N행씩 커버하려면 ceil(R/N)개 필욤ㅁ
// 예: 7행을 3행씩 커버 -> ceil(7/3) = ceil(2.33) = 3개
const rowCount = Math.ceil(R / N);

// 가로 방향에 필요한 CCTV 개수
// C열을 N열씩 커버하려면 ceil(C/N)개 필요
// 예: 9열을 3열씩 커버 -> ceil(9/3) = ceil(3) = 3개
const colCount = Math.ceil(C / N);

// 전체 좌석을 커버하기 위한 총 CCTV 개수
// 세로 × 가로 = 격자 형태로 배치
// 예: 3 × 3 = 9개
const result = rowCount * colCount;

// ===== 결과 출력 =====
console.log(result);
