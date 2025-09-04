// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim();

// 3. 입력 받은 문자열을 정수로 변환
let num = parseInt(input);

// 4. 소인수를 저장할 배열
const arr = [];

// 5. 2부터 num까지 소인수분해 수행
for (let i = 2; i <= num; i++) {
  // 6. i로 나누어떨어지는 동안 반복
  while (num % i === 0) {
    // 소인수를 배열에 저장
    arr.push(i);
    // num을 i로 나누기
    num = num / i;
  }
  // 7. 더 이상 나눌 수 없으면 반복문 종료
  if (num === 1) break;
}

// 8. 소인수들을 줄바꿈으로 구분하여 출력
console.log(arr.join("\n"));
