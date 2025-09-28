// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄(테스트 케이스 개수) 제거
input.shift();

// 4. 최소공배수를 구하는 함수
function lcm(a, b) {
  // 최소공배수 = (a × b) / 최대공약수
  return (a * b) / gcd(a, b);
}

// 5. 최대공약수를 구하는 함수(유클리드 호제법)
function gcd(a, b) {
  // b가 0이 될 때까지 반복
  while (b != 0) {
    // a와 b를 [b, a%b]로 교체
    [a, b] = [b, a % b];
  }
  // b가 0이 되면 a가 최대공약수
  return a;
}

// 6. 각 테스트 케이스 처리
for (i = 0; i < input.length; i++) {
  // 7. 각 줄에서 두 수 a, b를 추출(숫자 변환 필요)
  const [a, b] = input[i].split(" ");
  // 8. 최소공배수 계산 및 출력
  console.log(lcm(a, b));
}
