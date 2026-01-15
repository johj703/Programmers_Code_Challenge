// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require("fs").readFileSync(file).toString().trim().split("\n");

// N: 경태가 모은 출석 도장의 수
const N = Number(input[0]);

// P: 구매할 물건의 가격(항상 100의 배수)
const P = Number(input[1]);

// ===== 최소 지불 금액 계산 =====
// 사용 가능한 모든 할인 쿠폰을 적용했을 때의 가격을 계산하고 최소값 선택

//할인 적용 안 했을 때(기본 값)
let minPrice = P;

// 출석 도장 5개 이상: 500원 할인 쿠폰
if (N >= 5) {
  const discountedPrice = P - 500;
  minPrice = Math.min(minPrice, discountedPrice);
}

// 출석 도장 10개 이상: 10% 할인 쿠폰
if (N >= 10) {
  const discountedPrice = P * 0.9;
  minPrice = Math.min(minPrice, discountedPrice);
}

// 출석 도장 15개 이상: 2,000원 할인 쿠폰
if (N >= 15) {
  const discountedPrice = P - 2000;
  minPrice = Math.min(minPrice, discountedPrice);
}

// 출석 도장 20개 이상: 25% 할인 쿠폰
if (N >= 20) {
  const discountedPrice = P * 0.75;
  minPrice = Math.min(minPrice, discountedPrice);
}

// 할인 금액이 물건의 가격보다 크며 0원
const result = Math.max(0, minPrice);

// ===== 결과 출력 =====
console.log(result);
