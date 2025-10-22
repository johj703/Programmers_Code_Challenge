//===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 파일 읽기 → 문자열 변환 → 공백 제거 → 공백으로 분리 → 숫자로 변환
const input = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 변환
  .trim(); // 앞 뒤 공백 제거

// ===== 데이터 파싱 =====
// 창문의 개수
const n = parseInt(input);

// ===== 핵심 로직 =====
// 열려있는 창문의 개수 = 1부터 n까지 중 완전제곱수의 개수
// 왜냐하면 약수의 개수가 홀수인 수(완전제곱수)만 최종적으로 열림
var result = 0;

// 1² ≤ n, 2² ≤ n, 3² ≤ n, ... 을 만족하는 i의 개수 세기
// 즉, √n 이하의 자연수 개수 = 완전제곱수의 개수
for (i = 1; i * i <= n; i++) {
  result++;
}

// ===== 결과 출력 =====
console.log(result);
