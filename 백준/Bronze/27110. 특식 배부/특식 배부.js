// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const input = require("fs").readFileSync(file).toString().trim().split("\n");

// N: 각 종류별 주문한 치킨 마릿수
const N = Number(input[0]);

// A: 후라이드 선호 인원, B: 간장 선호 인원, C: 양념 선호 인원
const [A, B, C] = input[1].split(" ").map(Number);

// ===== 선호 치킨을 받을 수 잇는 최대 인원 계산 =====
// 후라이드 선호자 중 실제로 후라이드를 받을 수 있는 인원
// A명이 원하지만 재고는 N마리뿐이므로 min(A, N)명만 가능
// 예: A = 100, N = 10 -> 10명만 받을 수 있음
const friedChicken = Math.min(A, N);

// 간장 선호자 중 실제로 간장을 받을 수 있는 인원
// 예: B = 200, N = 10 -> 10명만 받을 수 있음
const soyChicken = Math.min(B, N);

// 양념 선호자 중 실제로 양념을 받을 수 있는 인원
// 예: C = 300, N = 10 -> 10명만 받을 수 있음
const spicyChicken = Math.min(C, N);

// 본인이 가장 선호하는 치킨을 받을 수 있는 총 인원
// 예제1: min(1, 5) + min(7, 5) + min(6, 5) = 1 + 5 + 5 = 11
// 예제4: min(100, 10) + min(200, 10) + min(300, 10) = 10 + 10 + 10 = 30
const result = friedChicken + soyChicken + spicyChicken;

// ===== 결과 출력 =====
console.log(result);
