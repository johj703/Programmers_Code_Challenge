// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const slogan = require('fs').readFileSync(file).toString().trim();

// ===== 구호-응원 매핑 =====
const responses = {
    'SONGDO': 'HIGHSCHOOL',
    'CODE': 'MASTER',
    '2023': '0611',
    'ALGORITHM': 'CONTEST',
};

console.log(responses[slogan]);
