// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거
let input = require("fs").readFileSync(file).toString();

// 3. 입력값을 숫자로 변환
let N = Number(input);

// 4. 사용할 봉지의 개수
let answer = 0;

// 5. 최소 봉지 개수를 찾을 때까지 반복
while (true) {
  // 6. 5kg 봉지로 정확히 나누어 떨어지면
  if (N % 5 === 0) {
    // 7. 5kg 봉지만 사용하여 완성
    answer += N / 5;
    break;
  }

  // 8. 5kg으로 나누어떨이지지 않으면 3kg 봉지 1개 사용
  N -= 3;
  answer += 1;

  // 9. N이 음수가 되면 정확히 만들 수 없음
  if (N < 0) {
    answer = -1;
    break;
  }
}

// 10. 결과 출력
console.log(answer);
