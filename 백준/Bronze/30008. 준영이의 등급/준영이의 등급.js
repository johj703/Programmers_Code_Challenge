// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 학생 수, K: 과목 수
const [N, K] = input[0].split(' ').map(Number);

// G: 각 과목에서 준영이의 등수 배열
const rank = input[1].split(' ').map(Number);

// ===== 각 과목의 등급 계산 =====
// 각 과목의 등급을 저장할 배열
const grades = [];

for (let i = 0; i < K; i++) {
    // 백분율 계산(정수 나눗셈의 몫)
    // P = floor((등수 × 100) / 학생 수)
    const P = Math.floor((rank[i] * 100) / N);

    // 백분율에 따라 등급 부여
    let grade;

    if (P >= 0 && P <= 4) {
        grade = 1;
    } else if (P > 4 && P <= 11) {
        grade = 2;
    } else if (P > 11 && P <= 23) {
        grade = 3;
    } else if (P > 23 && P <= 40) {
        grade = 4;
    } else if (P > 40 && P <= 60) {
        grade = 5;
    } else if (P > 60 && P <= 77) {
        grade = 6;
    } else if (P > 77 && P <= 89) {
        grade = 7;
    } else if (P > 89 && P <= 96) {
        grade = 8;
    } else {
        // P > 96 && P <= 100
        grade = 9;
    }

    grades.push(grade);
}

// ===== 결과 출력 =====
// 각 과목의 등급을 공백으로 구분하여 출력
console.log(grades.join(' '));
