// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
const N = require("fs").readFileSync(file).toString().trim();
// N : 매우 큰 수(문자열)

// ===== 나머지 계산 =====
// BigInt로 변환하여 나머지 계산
const remainder = BigInt(N) % 20000303n;

// ===== 결과 출력 =====
// BigInt를 문자열로 변환하여 출력
console.log(remainder.toString());
