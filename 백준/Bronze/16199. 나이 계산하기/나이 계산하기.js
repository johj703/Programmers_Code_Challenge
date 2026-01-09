// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require("fs").readFileSync(file).toString().trim().split("\n");

// 생년월일 파싱
const [birthYear, birthMonth, birthDay] = input[0].split(" ").map(Number);

// 기준날짜 파싱
const [currentYear, currentMonth, currentDay] = input[1].split(" ").map(Number);

// ===== 1. 만 나이 계산 =====
// 만 나이 = 기준연도 - 생년
// 단, 기준 날짜가 올해 생일 이전이면 -1
let manAge = currentYear - birthYear;

// 올해 생일이 아직 안 지났으면 -1
// 조건: (기준월 < 생월) 또는 (같은 달인데 기준일 < 생일)
if (
  currentMonth < birthMonth ||
  (currentMonth === birthMonth && currentDay < birthDay)
) {
  manAge -= 1;
}

// ===== 2. 세는 나이 계산 =====
// 세는 나이 = 태어난 해는 1세, 해가 바뀔 때마다 +1세
// 세는 나이 = (기준연도 - 생년) + 1
const countingAge = currentYear - birthYear + 1;

// ===== 3. 연 나이 계산 =====
// 연 나이 = 기준연도 - 생년(생월일 상관없이)
const yearAge = currentYear - birthYear;

// ===== 결과 출력 =====
console.log(manAge); // 만 나이
console.log(countingAge); // 세는 나이
console.log(yearAge); // 연 나이
