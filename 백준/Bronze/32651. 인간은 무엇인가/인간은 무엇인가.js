// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// ===== 형진이가 기억하는 수인지 판별 =====
/*
    형진이가 기억하는 수의 조건:
    1. 2024의 배수
    2. 100,000 이하
*/

if (N % 2024 === 0 && N <= 100000) {
    // 2024의 배수이면서 100,000 이하
    console.log('Yes');
} else {
    // 조건을 만족하지 않은
    console.log('No');
}
