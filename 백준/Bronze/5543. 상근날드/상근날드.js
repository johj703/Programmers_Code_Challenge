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

// ===== 가격 정보 =====
// 햄버거 3종(상덕버거, 중덕버거, 하덕버거)
const burger1 = input[0];
const burger2 = input[1];
const burger3 = input[2];

// 음료 2종(콜라, 사이다)
const drink1 = input[3];
const drink2 = input[4];

// ===== 최솟값 찾기 =====
// 가장 싼 햄버거
const minBurger = Math.min(burger1, burger2, burger3);

// 가장 싼 음료
const minDrink = Math.min(drink1, drink2);

// ===== 세트 메뉴 가격 계산 =====
// 세트 = 햄버거 + 음료 - 50원
const setPrice = minBurger + minDrink - 50;

// ===== 결과 출력 =====
console.log(setPrice);
