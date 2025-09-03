// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. M(시작 값)과 N(끝 값)을 숫자로 변환하여 추출
const M = Number(input.shift()); // 범위의 시작값
const N = Number(input.shift()); // 범위의 끝 값

// 4. M부터 N까지의 모든 자연수 배열 생성
const array = Array(N - M + 1)
  .fill() // 빈 배열 생성
  .map((_, index) => M + index); // M, M+1, M+2, ..., N 배열 생성

// 5. 배열에서 소수만 필터링
const answer = array.filter((num) => {
  // 6. 소수 판별: 2부터 num-1까지 나누어보기
  for (let i = 2; num > i; i++) {
    // 7. 나누어 떨어지면 소수가 아님
    if (num % i === 0) {
      return false;
    }
  }
  // 8. 1보다 큰 수이면서 위 반복문을 통과하면 소수
  return num > 1;
});

// 9. 소수가 존재하는지 확인
if (answer.length) {
  // 10. 소수들의 합 계산 및 출력
  console.log(answer.reduce((sum, prime) => (sum += prime)));
  // 11. 최소값(첫 번째 소수) 출력(이미 오름차순 정렬이 됨)
  console.log(answer[0]);
} else {
  // 12. 소수가 없으면 -1 출력
  console.log(-1);
}
