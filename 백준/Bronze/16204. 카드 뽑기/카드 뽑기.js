// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [N, M, K] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// N: 전체 카드의 개수
// M: 앞면에 'O'(알파벳 오)가 적힌 카드의 개수(따라서 앞면 X는 N - M개)
// N: 뒷면에 'O'(알파벳 오)를 적을 카드의 개수(따라서 뒷면 X는 N - K개)

// ===== 앞 뒤 같은 모양 카드의 최대 개수 계산 =====
// 앞면과 뒷면이 모두 O인 카드의 최대 개수
// 앞면 'O'가 M개, 뒷면 'O'를 K개 적을 것이므로 min(M, K)개
// 예: 앞면 'O' 3개, 뒷면 'O' 2개 -> 최대 2개만 매칭 가능
const matchO = Math.min(M, K);

// 앞면과 뒷면이 모두 'X'인 카드의 최대 개수
// 앞면 'X'가 (N-M)개, 뒷면 'X'를 (N-K)개 적을 것이므로 min(N-M, N-K)개
// 예: 앞면 'X' 1개, 뒷면 'X' 2개 → 최대 1개만 매칭 가능
const matchX = Math.min(N - M, N - K);

// 앞뒤가 같은 카드의 총 개수
// 예제1: min(3, 2) + min(1, 2) = 2 + 1 = 3
// 예제2: min(0, 10) + min(10, 0) = 0 + 0 = 0
// 예제3: min(3, 3) + min(2, 2) = 3 + 2 = 5
// 예제4: min(5, 2) + min(2, 5) = 2 + 2 = 4
const result = matchO + matchX;

// ===== 결과 출력 =====
// 앞면과 뒷면이 같은 모양인 카드의 최대 개수 출력
console.log(result);
