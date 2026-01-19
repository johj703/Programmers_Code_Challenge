// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
let [X, Y] = require("fs").readFileSync(file).toString().trim().split(" ").map(Number);

// ===== 인도 베다수학 곱셈법 계산 =====

// 1. a = 100 - X (첫 번째 수를 100에서 뺀 값)
const a = 100 - X;

// 2. b = 100 - Y (두 번째 수를 100에서 뺀 값)
const b = 100 - Y;

// 3. c = 100 - (a + b) (100에서 a와 b의 합을 뺀 값)
// 예: a = 3, b = 4 -> c = 100 - 7 = 93
const c = 100 - (a + b);

// 4. d = a × b (a와 b의 곱)
// 예: a = 3, b = 4 -> d = 12
const d = a * b;

// 5. q = d를 100으로 나눈 몫(d의 초과 자릿수)
// 예: d = 12 -> q = 0, d = 2652 -> q = 26
const q = Math.floor(d / 100);

// 6. r = d를 100으로 나눈 나머지(d의 하위 두 자릿수)
// 예: d = 12 -> r = 12, d = 2652 -> r = 52
const r =  d % 100;

// ===== 최종 결과 계산 =====
// 앞의 두 자릿수(또는 한 자릿수): c + q
const front = c + q;

// 뒤의 두 자릿수(또는 한 자릿수): r
const back = r;

// ===== 결과 출력 =====
// 첫 줄: a, b, c, d, q, r을 공백으로 구분하여 출력
console.log(a, b, c, d, q, r);

// 둘째 줄: 앞의 두 자릿수, 뒤의 두 자릿수를 공백으로 구분하여 출력
// (싶의 자리가 0이면 일의 자리만 출력됨 - 자동으로 처리)
console.log(front, back)