// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const char = require('fs').readFileSync(file).toString().trim();

// ===== 한글 순서 계산 =====
// '가'의 유니코드 값: 44032
const GA_CODE = '가'.charCodeAt(0);

// 입력받은 한글의 유니코드 값
const charCode = char.charCodeAt(0);

// 몇 번째 글자인지 계산
// '가'가 1번이므로 (charCode - GA_CODE) + 1
const order = charCode - GA_CODE + 1;

console.log(order);
