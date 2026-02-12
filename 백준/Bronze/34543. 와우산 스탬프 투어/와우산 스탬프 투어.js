// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 방문한 명소의 개수(0~5곳)
const N = Number(input[0]);

// W: 총 걸음 수
const W = Number(input[1]);

// ===== 투어 점수 계산 =====
let score = 0;

// 1. 기본 점수: 방문한 명소 한 곳당 10점
score += N * 10;

// 2. 세 곳 이상 방문 시 추가 20점
if (N >= 3) {
    score += 20;
}

// 3. 다섯 곳 모두 방문 시 특별 보너스 50점
if (N === 5) {
    score += 50;
}

// 4. 총 걸음 수가 1000보 초과 시 15점 감정
if (W > 1000) {
    score -= 15;
}

// 5. 점수는 0점 미만으로 내려가지 않음
score = Math.max(0, score);

// ===== 결과 출력 =====
console.log(score);
