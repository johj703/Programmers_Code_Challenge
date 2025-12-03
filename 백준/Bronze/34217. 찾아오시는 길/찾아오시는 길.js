// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, \r 제거 후 앞뒤 공백 제거를 한 후 줄바꿈으로 분리
const input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// 첫째 줄: 출발지에서 각 역까지 시간
const [A, B] = input[0].split(" ").map(Number);
// A: 출발지 -> 한양대역
// B: 출발지 -> 용답역

// 둘째 줄: 각 역에서 ITBT관까지 시간
const [C, D] = input[1].split(" ").map(Number);
// C: 한양대역 -> ITBT관
// D: 용답역 -> ITBT관

//  ===== 총 소요 시간 계산 =====
// 한양대역 경로: 출발지 -> 한양대역 -> ITBT관
const hanyangTime = A + C;

// 용답역 경로: 출발지 -> 용답역 -> ITBT관
const yongdapTime = B + D;

// ===== 결과 출력 =====
if (hanyangTime < yongdapTime) {
  console.log("Hanyang Univ.");
} else if (hanyangTime > yongdapTime) {
  console.log("Yongdap");
} else {
  console.log("Either");
}
