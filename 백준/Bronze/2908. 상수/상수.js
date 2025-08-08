// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞 뒤 공백 제거 후 공백으로 분리하여 배열 생성
let input = require("fs").readFileSync(file).toString().trim().split(" ");

// 3. 첫 번째 수를 거꾸로 뒤집이서 숫자로 변환
// split(""): 문자열을 문자 배열로 분리("734" -> ["7", "3", "4"])
// reverse(): 배열 순서를 뒤집기(["7", "3", "4"] -> ["4", "3", "7"])
// join(""): 배열을 다시 문자열로 합치기(["4", "3", "7"] -> "437")
// Number(): 문자열을 숫자로 변환("437" -> 437)
let num1 = Number(input[0].split("").reverse().join(""));

// 4. 두 번째 수를 거꾸로 뒤집어서 숫자로 변환
// 동일한 과정으로 두 번째 수도 뒤집어서 숫자로 변환
let num2 = Number(input[1].split("").reverse().join(""));

// 5. 삼항 연산자를 사용해서 두 수 중 더 큰 수를 출력
// num1이 num2보다 크면 num1을, 아니면 num2를 출력
console.log(num1 > num2 ? num1 : num2);
