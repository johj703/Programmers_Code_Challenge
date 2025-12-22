// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, \r 제거 후 앞뒤 공백 제거를 한 후 줄바꿈으로 분리
const input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);

// ===== 점수 입력 =====
const A = input[0]; // 물리
const B = input[1]; // 화학
const C = input[2]; // 생물
const D = input[3]; // 지구과학
const E = input[4]; // 역사
const F = input[5]; // 지리

// ===== 그룹1: 4과목 중 3과목 선택 =====
// 4과목 합에서 가장 낮은 점수를 빼기
const group1Sum = A + B + C + D;
const group1Min = Math.min(A, B, C, D);
const group1Score = group1Sum - group1Min;

// ===== 그룹2: 2과목 중 1과목 선택 =====
// 더 높은 점수 선택
const group2Score = Math.max(E, F);

// ===== 총점 계산 및 출력 =====
const totalScore = group1Score + group2Score;
console.log(totalScore);
