// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 trim()만 적용
// trim()으로 맨 끝의 개행문자만 제거하고 내용은 그대로 유지
let input = require("fs").readFileSync(file).toString().trim();

// 3. 입력받은 내용을 그대로 출력
console.log(input);
