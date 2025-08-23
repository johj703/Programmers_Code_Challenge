// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽어서 줄 단위로 분리
// 입력 형식: "B진법수 진법" (예: "ZZZZZ 36")
let input = require("fs").readFileSync(file).toString().trim().split(" ");

// 3. 구조 분해 할당으로 B진법 수와 진법 추출
// N: B진법 수(문자열), B: 진법(문자열)
const [N, B] = input;

// 4. Javascript 내장 함수를 이용한 진법 변환
// parseInt(문자열, 진법): 주어진 진법의 문자열을 10진법으로 변환
console.log(parseInt(N, B));
