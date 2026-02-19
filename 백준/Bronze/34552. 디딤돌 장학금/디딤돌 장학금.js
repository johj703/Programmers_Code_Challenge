// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// M: 분위별 장학금(0~10분위, 총 11개)
const M = input[0].split(' ').map(Number);

// N: 재학생의 수
const N = Number(input[1]);

// ===== 장학금 총액 계산 =====
// 학교가 지출하는 장학금 총액
let totalScholarship = 0;

for (let i = 0; i < N; i++) {
    // 각 학생의 정보
    const [B, L, S] = input[2 + i].split(' ').map(Number);

    /*
        B: 분위 (0 ~ 10)
        L: 학기 평점 (1.00 ~ 4.50)
        S: 취득 학점 (1 ~ 24)

        디딤돌 장학금 자격 조건:
        1. 취득 학점이 17학점 이상
        2. 학기 평점이 2.0 이상
    */

    if (S >= 17 && L >= 2.0) {
        // 자격 조건을 만족하면 해당 분위의 장학금 지급
        totalScholarship += M[B];
    }
    // 자격 조건을 만족하지 않으면 장학금 0원 (아무것도 더하지 않음)
}

// ===== 결과 출력 =====
console.log(totalScholarship);
