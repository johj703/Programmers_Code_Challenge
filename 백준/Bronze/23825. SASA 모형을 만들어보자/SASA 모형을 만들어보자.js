// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [N, M] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// N: 알파벳 'S' 모양의 블록 개수
// M: 알파벳 'A' 모양의 블록 개수

// ===== SASA 모형 최대 개수 계산 =====
// SASA 모형 1개를 만들려면: 'S' 블록 2개 + 'A' 블록 2개 필요

// 'S' 블록으로 만들 수 있는 SASA 모형의 최대 개수
// 예: 'S' 4개 -> 4 / 2 = 2개 모형 가능
const maxFromS = Math.floor(N / 2);

// 'A' 블록으로 만들 수 있는 SASA 모형의 최대 개수
// 예: 'A' 5개 -> 5 / 2 = 2개 모형 가능 (1개 남음)
const maxFromA = Math.floor(M / 2);

// 실제로 만들 수 있는 SASA 모형의 개수는 둘 중 작은 값
// 예: min(2, 2) = 2개
const result = Math.min(maxFromS, maxFromA);

// ===== 결과 출력 =====
// 태영이가 만들 수 있는 SASA 모형 개수의 최댓값 출력
console.log(result);
