// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// ===== N번째 한글 글자 찾기 =====
// "가"의 유니코드 값: 44032
const GA_CODE = '가'.charCodeAt(0);

// N번째 글자의 유니코드 값 = '가'의 유니코드 + (N - 1)
const charCode = GA_CODE + (N - 1);

// 유니코드 값을 문자로 변환
const char = String.fromCharCode(charCode);

console.log(char);
