// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 테스트 케이스 개수를 가져오고 배열에서 제거
const num1 = input.shift();

// 4. 각 테스트 케이스 처리하는 반복문
for (let i = 0; i < num1; i++) {
  // 5. 각 테스트 케이스의 결과를 저장할 빈 문자열 초기화
  let answer = "";

  // 6. 현재 테스트 케이스에서 반복회수(num2)와 문자열(str)을 분리
  const [num2, str] = input[i].split(" ");

  // 7. 문자열의 각 문자를 순회하는 반복문
  for (let j = 0; j < str.length; j++) {
    // 8. 현재 문자를 num2번 반복하는 반복문
    for (let c = 0; c < num2; c++) {
      // 9. 현재 문자를 answer에 추가
      answer += str[j];
    }
  }
  // 10. 완성된 문자열 출력
  console.log(answer);
}
