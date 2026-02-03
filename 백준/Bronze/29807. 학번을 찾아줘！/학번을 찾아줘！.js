// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// T: 응시한 과목 수
const T = Number(input[0]);

// 각 과목의 표준점수(국어, 수학, 영어, 탐구, 제2외국어 순서)
// 응시하지 않은 과목은 0점 처리
const scores = input[1].split(' ').map(Number);

// 과목별 점수 추출(없으면 0점)
const korean = scores[0] || 0; // 국어
const math = scores[1] || 0; // 수학
const english = scores[2] || 0; // 영어
const research = scores[3] || 0; // 탐구
const second = scores[4] || 0; // 제2외국어

// ===== 학번 계산 =====
let sum = 0;

// 1. 국어 vs 영어
if (korean > english) {
    /*
        국어 점수가 영어 점수보다 높으면
        (국어 - 영어) × 508 (인문관 건물 번호)
    */
    sum += (korean - english) * 508;
} else {
    /* 
        영어 점수가 국어 점수보다 크거나 같으면
        (영어 - 국어) × 108 (국제관 건물 번호)
    */
    sum += (english - korean) * 108;
}

// 2. 수학 vs 탐구
if (math > research) {
    /*
        수학 점수가 탐구 점수보다 높으면
        (수학 - 탐구) × 212 (제1공학관 건물 번호)
    */
    sum += (math - research) * 212;
} else {
    /*
        탐구 점수가 수학 점수보다 크거나 같으면
        (탐구 - 수학) × 305 (ITBT관 건물 번호)
    */
    sum += (research - math) * 305;
}

// 3. 제2외국어 (응시했다면)
if (second > 0) {
    // 제2외국어 × 707 (행원파크 건물 번호)
    sum += second * 707;
}

// 4. 학번 = 총합 × 4763 (한양대 우편번호)
const studentId = sum * 4763;

// ===== 결과 출력 =====
console.log(studentId);
