// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// N(세로 크기), M(가로 크기), K(좌석 번호)를 입력받음
const [N, M, K] = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split(" ")
  .map(Number);

// ===== 좌표 계산 =====
/* 문제 조건: 관중석의 왼쪽 위는(0 ,0), 오른쪽 아래는 (N-1, M-1)
 -> 0-based indexing 사용(배열 index처럼 0부터 시작)

 좌석 번호 메기는 규칙:
 - 0번부터 시작하여 왼쪽 -> 오른쪽으로 증가
 - 한 행이 끝나면 다음 행의 왼쪽부터 계속
 - 한 행에 M개의 좌석이 배치됨

 예시 (N=3, M=4):
    0열 1열 2열 3열
 0행 0   1   2   3
 1행 4   5   6   7
 2행 8   9  10  11

 K번 좌석의 위치 공식:
 행 = K를 M으로 나눈 몫(몇 번째 행인지)
 열 = K를 M으로 나눈 나머지(그 행의 몇 번째 열인지)
**/
const row = Math.floor(K / M);
const col = K % M;

// ===== 결과 출력 =====
console.log(row, col);
