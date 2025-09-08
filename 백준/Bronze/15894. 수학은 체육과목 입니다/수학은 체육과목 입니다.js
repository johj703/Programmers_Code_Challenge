// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽고 공백 제거
let input = require("fs").readFileSync(file).toString().trim();

// 3. 둘레 공식 적용 및 출력
// 가장 아래 정사각형이 n개일 때 둘레는 "4n"
console.log(4 * input);
