// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim();

// 3. 입력 문자열을 뒤집어서 새로운 문자열 생성
// split(""): 문자열을 문자 배열로 분리("level" -> ["l","e","v","e","l"])
// reverse(): 배열 순서를 뒤집기 (["l","e","v","e","l"] → ["l","e","v","e","l"])
// join(""): 배열을 다시 문자열로 합치기 (["l","e","v","e","l"] → "level")
const reverse = input.split("").reverse().join("");

// 4. 원본 문자열과 뒤집은 문자열이 같은지 비교
// 팰린드롬이면 1, 아니면 0을 출력 (삼항 연산자 사용)
console.log(input === reverse ? 1 : 0);
