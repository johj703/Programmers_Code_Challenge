// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// 월과 일 입력받기
const month = Number(input[0]);
const day = Number(input[1]);

// ===== 2월 18일과 비교 =====
// 기준: 2월 18일

if (month < 2) {
    // 1월이면 무조건 before
    console.log('Before');
} else if (month > 2) {
    // 3월 이후면 무조건 After
    console.log('After');
} else {
    // month === 2 (2월인 경우)
    if (day < 18) {
        console.log('Before');
    } else if (day > 18) {
        console.log('After');
    } else {
        // day === 18
        console.log('Special');
    }
}
