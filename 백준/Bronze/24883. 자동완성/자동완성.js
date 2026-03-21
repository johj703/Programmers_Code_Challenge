// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const alphabet = require('fs').readFileSync(file).toString().trim();

// ===== 자동완성 판별 =====
// N 또는 n이면 Naver D2, 아니면 Naver Whale
if (alphabet === 'N' || alphabet === 'n') {
    console.log('Naver D2');
} else {
    console.log('Naver Whale');
}
