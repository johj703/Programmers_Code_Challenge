// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, \r 제거 후 앞뒤 공백 제거를 한 후 줄바꿈으로 분리, 숫자로 변환
const input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);

// ===== 총 이동 시간 계산 =====
// 집 -> 학교, 학교 -> PC방, PC방 -> 학원, 학원 -> 집
const totalSeconds = input[0] + input[1] + input[2] + input[3];

// ===== 분과 초로 변환 =====
// 분 = 총 초를 60으로 나눈 몫
const minutes = Math.floor(totalSeconds / 60);

// 초 = 총 초를 60으로 나눈 나머지
const seconds = totalSeconds % 60;

// ===== 결과 출력 =====
console.log(minutes);
console.log(seconds);
