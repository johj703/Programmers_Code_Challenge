// 1. 플랫폼에 따른 입력 파일 경로 설정
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 파일 읽기 (utf8 인코딩 명시적 지정)
let input = require("fs")
  .readFileSync(file, "utf8")
  .toString()
  .trim()
  .split("\n");

// 3. 테스트 케이스 개수 추출
const n = Number(input[0]);

// 4. 각 문자열의 첫 글자와 마지막 글자 출력
for (let i = 1; i <= n; i++) {
  // Windows \r 문자 제거를 위한 추가 trim()
  let str = input[i].trim();
  console.log(str[0] + str[str.length - 1]);
}
