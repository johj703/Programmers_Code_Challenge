// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim();

// 3. 입력값을 숫자로 변환
const N = Number(input);

// 4. 재귀를 이용한 팩토리얼 함수
function factorial(n) {
  // 5. 기저 조건: 0! = 1;
  if (n === 0) {
    return 1;
  } else {
    // 6. 재귀 호출: n! = n × (n-1)!
    return n * factorial(n - 1);
  }
}

// 팩토리얼 결과 출력
console.log(factorial(N));
