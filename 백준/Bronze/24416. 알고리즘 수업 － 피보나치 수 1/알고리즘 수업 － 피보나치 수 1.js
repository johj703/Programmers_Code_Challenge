// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim();

// 3. 입력값을 숫자로 변환
const n = Number(input);

// 4. 재귀 호출시 코드1 실행 횟수를 세는 변수
let recursionQnt = 0;

// 5. 동적 프로그래밍의 코드2 실행 횟수
// for문이 3부터 n까지 실행되므로 (n-2)번
const dpCnt = input - 2;

// 6. 재귀 방식 피보나치 함수
function recursionFc(n) {
  // 7. 기저 조건: n=1 또는 n=2일 때(코드1 실행)
  if (n == 1 || n == 2) {
    // 코드1 실행 횟수 증가
    recursionQnt++;
    return 1;
  } else {
    // 8. 재귀 호출: fib(n-1) + fib(n-2)
    return recursionFc(n - 1) + recursionFc(n - 2);
  }
}

// 9. 재귀 함수 실행하여 코드1 실행 횟수 계산
recursionFc(input);

// 10. 재귀 방식 코드1 실행 횟수와 DP 방식 코드2 실행 횟수 출력
console.log(recursionQnt, dpCnt);
