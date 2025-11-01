// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 공백으로 분리
let input = require("fs").readFileSync(file).toString().trim().split(" ");

// ===== 데이터 파싱 =====
// 입력값을 BigInt로 변환 (큰 수 처리를 위해)
const A = BigInt(input[0]);
const B = BigInt(input[1]);

// ===== 이상한 기호 연산 =====
// A＠B = (A+B) × (A-B)
// BigInt끼리의 연산은 일반 연산자 사용 가능
const result = (A + B) * (A - B);

// ===== 결과 출력 =====
// BigInt를 문자열로 변환하여 출력 (뒤에 'n'이 안 붙도록)
console.log(result.toString());
