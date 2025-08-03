// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽어서 문자열로 변환 후 공백/개행 제거
let input = require("fs").readFileSync(file).toString().trim();

// 3. 입력받은 문자의 ASCII 코드값 계산
// charCodeAt(0): 문자열의 첫 번째 문자(index 0)의 ASCII 코드 반환
let result = input.charCodeAt(0);

// 4. ASCII 코드값 출력
console.log(result);
