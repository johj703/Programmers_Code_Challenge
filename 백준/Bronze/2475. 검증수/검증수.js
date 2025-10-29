// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 공백으로 분리
let input = require("fs").readFileSync(file).toString().trim().split(" ");

// input = ["0", "4", "2", "5", "6"] (문자열 배열)

// ===== 검증수 계산 =====
// reduce를 사용하여 각 숫자를 제곱한 값들의 합 구하기
const sum = input.reduce((num1, num2) => num1 + num2 * num2, 0);

// num1: 누적값 (accumulator)
// num2: 현재 값 (current value) - 문자열이지만 연산 시 자동으로 숫자로 변환됨
// 0: 초기값
// 동작: 0² + 4² + 2² + 5² + 6² = 0 + 16 + 4 + 25 + 36 = 81

// ===== 결과 출력 =====
// 합계를 10으로 나눈 나머지 = 검증수
// 81 % 10 = 1
console.log(sum % 10);
