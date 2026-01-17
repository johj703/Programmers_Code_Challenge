// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require("fs").readFileSync(file).toString().trim());

// ===== N! 계산 =====
// N!은 1 × 2 × 3 × ... × N
// N이 최대 17일 때 17!은 매우 큰 수이므로 BigInt 사용
let factorial = 1n; // BigInt 초기 값

for (let i = 1; i <= N; i++) {
  factorial *= BigInt(i);
}

// ===== 1주는 몇 초인지 계산 =====
// 1주 = 7일 × 24시간 × 60분 × 60초
const secondsPerWeek = 7n * 24n * 60n * 60n; // 604,800초 (BigInt)

// ===== N!초가 몇 주인지 계산 =====
// 주 수 = N! ÷ 604,800
const weeks = factorial / secondsPerWeek;

// ===== 결과 출력 =====
// BigInt를 문자열로 변환하여 출력
console.log(weeks.toString());
