// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거
const N = Number(require("fs").readFileSync(file).toString().trim());

// ===== 변수 초기화 =====
// 1부터 N까지의 합
let sum = 0;
// 1부터 N까지의 세제곱의 합
let sumOfCubes = 0;

// ===== 계산 =====
// 1부터 N까지 반복
for (let i = 1; i <= N; i++) {
  // 1 + 2 + 3 + ... + N
  sum += i;
  // 1³ + 2³ + 3³ + ... + N³ (** 연산자 사용)
  sumOfCubes += i ** 3;
}
// ===== 결과 출력 =====
// 첫째 줄: 1부터 N까지의 합
console.log(sum);
// 둘째 줄: (1부터 N까지의 합)의 제곱
console.log(sum ** 2);
// 셋쪠 줄: 1부터 N까지의 세제곱의 합
// 수학 공식 검증: (1+2+...+N)² = 1³+2³+...+N³
console.log(sumOfCubes);
