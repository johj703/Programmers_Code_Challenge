// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const initial = require('fs').readFileSync(file).toString().trim();

// ===== 동아리 첫 글자-전체 이름 매핑 =====
const clubs = {
    'M': 'MatKor',
    'W': 'WiCys',
    'C': 'CyKor',
    'A': 'AlKor',
    '$': '$clear',
};

console.log(clubs[initial]);
