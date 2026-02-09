// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// 척이(초나라)의 남은 기물: 차, 포, 마, 상, 사, 졸
const chuckPieces = input[0].split(' ').map(Number);

// 은규(한나라)의 남은 기물: 차, 포, 마, 상, 사, 졸
const eunkyuPieces = input[1].split(' ').map(Number);

// 기물별 점수
// 차, 포, 마, 상, 사, 졸(병)
const scores = [13, 7, 5, 3, 3, 2];

// ===== 각자의 점수 계산 =====
// 척이(초나라)의 점수
let chuckScore = 0;
for (let i = 0; i < 6; i++) {
    chuckScore += chuckPieces[i] * scores[i];
}

// 은규(한나라)의 점수(후수 보너스 1.5점 추가)
let eunkyuScore = 1.5;
for (let i = 0; i < 6; i++) {
    eunkyuScore += eunkyuPieces[i] * scores[i];
}

// ===== 결과 판별 및 출력 =====
if (chuckScore > eunkyuScore) {
    // 초나라(척이) 점수가 더 높음
    console.log('cocjr0208');
} else {
    // 한나라(은규) 점수가 더 높음
    console.log('ekwoo');
}
