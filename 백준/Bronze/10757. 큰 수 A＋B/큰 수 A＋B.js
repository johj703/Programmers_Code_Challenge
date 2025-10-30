// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 공백으로 분리
let input = require("fs").readFileSync(file).toString().trim().split(" ");

// input = ["큰 숫자1", "큰 숫자2"] (문자열 배열)

// ===== BigInt로 변환 =====
// BigInt: JavaScript에서 아주 큰 정수를 다루기 위한 타입
// Number 타입의 안전한 범위(2^53 - 1)를 초과하는 수 처리 가능
const A = BigInt(input[0]);
const B = BigInt(input[1]);

// ===== 큰 수 덧셈 =====
// BigInt끼리의 연산은 일반 연산자 사용 가능
let answer = A + B;

// ===== 결과 출력 =====
// BigInt를 문자열로 변환하여 출력 (뒤에 'n'이 안 붙도록)
console.log(answer.toString());