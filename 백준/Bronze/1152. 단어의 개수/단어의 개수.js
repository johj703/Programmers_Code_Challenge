// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞 뒤 공백 제거 후 공백으로 분리하여 배열 생성
let input = require("fs").readFileSync(file).toString().trim().split(" ");

// 3. 빈 문자열인 경우(공백만 있거나 아무것도 없는 경우) 처리
if (input[0] === "") {
  // 4. 단어가 없으면 0 출력
  console.log(0);
} else {
  // 5. 단어가 있으면 배열의 길이(단어 개수) 출력
  console.log(input.length);
}
