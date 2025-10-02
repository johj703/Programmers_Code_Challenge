// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 N과 K를 숫자로 변환하여 추출
let [n, k] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 3. 팩토리얼을 계산하는 함수
const factorial = (n) => {
  // 4. 팩토리얼 결과를 저장할 변수 초기화
  let answer = 1;

  // 5. 2부터 n까지 모든 수를 곱하기
  // 1은 곱해도 값이 변하지 않으므로 2부터 시작
  for (let i = 2; i <= n; i++) {
    answer *= i;
  }

  // 6. 계산된 팩토리얼 반환
  return answer;
};

// 7. 이항 계수 계산 및 출력
// C(n, k) = n! / (k! x (n - k)!)
console.log(factorial(n) / (factorial(k) * factorial(n - k)));
