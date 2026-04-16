// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const str = require('fs').readFileSync(file).toString().trim();

// ===== DKSH 개수 세기 =====
// split('DKSH')로 나누면 -> "배열 길이 - 1 = DKSH 개수"
const count = str.split('DKSH').length - 1;

// ===== 결과 출력 =====
console.log(count);
