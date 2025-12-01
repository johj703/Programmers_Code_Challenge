// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, \r 제거 및 앞뒤 공백 제거 후 줄바꿈으로 분리, 숫자로 변환
const times = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);
// times: 4바퀴 각각의 시간 배열[t1, t2, t3, t4]

//  ===== 4바퀴 총 시간 계산 =====
// reduce: 배열을 하나의 값으로 축소(reduce)하는 함수
// 배열의 각 요소를 순회하며 누적값을 만들어감
//
// reduce((누적값, 현재값) => 새로운_누적값, 초기값)
//
// 동작 과정 예시 (times = [375, 375, 375, 375]):
// 초기값: acc = 0
// 1단계: acc = 0, cur = 375 → return 0 + 375 = 375
// 2단계: acc = 375, cur = 375 → return 375 + 375 = 750
// 3단계: acc = 750, cur = 375 → return 750 + 375 = 1125
// 4단계: acc = 1125, cur = 375 → return 1125 + 375 = 1500
// 최종 결과: 1500
const sum4Laps = times.reduce((acc, cur) => acc + cur, 0);

// ===== 5바퀴 총 시간 계산 및 판단 =====
// 4바퀴 시간 + 마지막 1바퀴(300초)
const totalTime = sum4Laps + 300;

// 1800초 이하면 통과
if (totalTime <= 1800) {
  console.log("Yes");
} else {
  console.log("No");
}
