// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
const N = Number(require("fs").readFileSync(file).toString().trim());
// N: N번째 피갤컵

// ===== 날짜 계산 =====
// 시작: 2024년 8월
const startYear = 2024;
const startMonth = 8;

// N번째까지 추가되는 개월 수: (N - 1) * 7;
const totalMonths = startMonth + (N - 1) * 7;

// 연도와 월 계산
// 추가되는 연도 수 = (총 월 - 1) / 12의 몫
const addedYears = Math.floor((totalMonths - 1) / 12);
const year = startYear + addedYears;

// 최종 월 = 총 월 - (추가된 연도 × 12)
const month = totalMonths - addedYears * 12;

// ===== 결과 출력 =====
console.log(year, month);
