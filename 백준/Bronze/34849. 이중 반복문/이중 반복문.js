// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 파일을 읽고 문자열로 변환 후 앞뒤 공백 제거, 숫자로 변환
const N = Number(
  require("fs") // Node.js 파일 시스템 모듈
    .readFileSync(file) // 파일 동기적으로 읽기
    .toString() // Buffer를 문자열로 변환
    .trim() // 앞 뒤 공백(/n, \r 등) 제거
);
// N: 반복문의 반복 횟수

// ===== 시간 제한 판단 =====
// 이중 반복문: N^2번의 연산 수행
const operations = N * N;

// 컴퓨터 성능: 1초에 10^8번(1억 번) 연산 가능
const limit = 100000000; // 10^8 = 100,000,000

// 연산 횟수가 제한 이하면 통과, 초과하면 시간 초과
if (operations <= limit) {
  console.log("Accepted");
} else {
  console.log("Time limit exceeded");
}
