// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거
let input = require("fs").readFileSync(file).toString().trim();

// 3. 입력값을 숫자로 변환
const N = parseInt(input);

// 4. 종말의 수를 몇 개 찾았는지 세는 카운터
let count = 0;

// 5. 검사할 숫자(첫 번째 종말의 수인 666부터 시작);
let start = 666;

// 6. N번째 종말의 수를 찾을 때까지 반복
while (count < N) {
  // 7. 현재 숫자에 "666"이 포함되어 있는지 확인
  if (String(start).includes("666")) {
    // 8. 종말의 수 카운터 증가
    count++;

    // 9. N번째 종말의 수를 찾았으면 출력하고 종료
    if (count === N) {
      console.log(start);
      break;
    }
  }
  // 10. 다음 숫자로 이동
  start++;
}
