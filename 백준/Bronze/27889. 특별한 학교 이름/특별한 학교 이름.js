// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const school = require('fs').readFileSync(file).toString().trim();

// ===== 학교 정식 명칭 출력 =====
if (school === 'NLCS') {
    console.log('North London Collegiate School');
} else if (school === 'BHA') {
    console.log('Branksome Hall Asia');
} else if (school === 'KIS') {
    console.log('Korea International School');
} else if (school === 'SJA') {
    console.log('St. Johnsbury Academy');
}
