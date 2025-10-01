// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 문자열로 저장
let input = require("fs").readFileSync(file).toString().trim();

// 3. 입력값을 숫자로 변환
const n = Number(input);

// 4. 팩토리얼 결과를 저장할 변수 초기화
let result = 1;

// 5. 1부터 n까지 모든 수를 곱하기
for (let i = 1; i <= n; i++) {
  result *= i;
}

// 6. 팩토리얼 결과 출력
console.log(result);
