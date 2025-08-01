// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄의 단어 길이 출력
// input[0] : 첫 번째 줄 = 입력 받은 단어
// .length: 문자열의 길이(글자 수) 반환
console.log(input[0].length);
