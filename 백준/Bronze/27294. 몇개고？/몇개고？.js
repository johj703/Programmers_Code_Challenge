// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
let [T, S] = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split(" ")
  .map(Number);
// T: 시간(0~23)
// S: 술 유무(0: 술 없음, 1: 술 있음);

// ===== 밥알 개수 결정 =====
// 점심 시간(12시~16시)이면서 술 없이(S=0) 먹을 때: 320개
// 그 외 모든 경우: 280개

if (T >= 12 && T <= 16 && S === 0) {
  console.log(320);
} else {
  console.log(280);
}
