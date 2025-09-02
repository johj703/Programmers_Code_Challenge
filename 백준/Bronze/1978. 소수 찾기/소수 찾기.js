// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 숫자의 개수 N 추출
const N = Number(input[0]);

// 4. 두 번째 줄에서 N개의 숫자들을 배열로 추출
const numbers = input[1].split(" ").map(Number);

// 5. 소수 판별 함수 정의
function isPrime(num) {
  // 1 이하의 수는 소수가 아님
  if (num <= 1) return false;

  // 2는 소수
  if (num === 2) return true;

  // 짝수는 소수가 아님(2 제외)
  if (num % 2 === 0) return false;

  // 3부터 √num까지 홀수로만 나누어보기
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

// 6. 주어진 숫자들 중 소수인 것의 개수 세기
let primeCount = 0;

for (let i = 0; i < N; i++) {
  if (isPrime(numbers[i])) {
    primeCount++;
  }
}

// 7. 소수의 개수 출력
console.log(primeCount);
