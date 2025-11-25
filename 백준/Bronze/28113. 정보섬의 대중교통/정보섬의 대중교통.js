// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
const [N, A, B] = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split(" ")
  .map(Number);
// N: 지하철역까지 걸리는 시간
// A: 버스 도착 시간
// B: 지하철 도착 시간

// ===== 판단 로직 =====
// 지하철을 탈 수 없는 경우(N > B: 지하철이 먼저 떠남)
if (N > B) {
  console.log("Bus");
}
// 지하철을 탈 수 있는 경우(N <= B)
else {
  // 버스 탑승 시각(A)과 지하철 탑승 시각(B) 비교
  if (A < B) {
    // 버스가 더 빠름
    console.log("Bus");
  } else if (A > B) {
    // 지하철이 더 빠름
    console.log("Subway");
  } else {
    // 동시 도착
    console.log("Anything");
  }
}
