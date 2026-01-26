// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// T: 테스트 케이스의 개수
const T = Number(input[0]);

// ===== 각 테스트 케이스 처리 =====
for (let i = 1; i <= T; i++) {
    // N: 올해 년도
    const N = Number(input[i]);

    // N의 끝 두 자리 구하기
    // 예: 2023의 끝 두 자리 = 2023 % 100 = 23
    const lastTwoDigits = N % 100;

    // N + 1 (내년 연도)
    const nextYear = N + 1;

    // ===== 조건 판별 =====
    // N+1이 N의 끝 두 자리로 나누어 떨어지는지 확인
    // 예: 2024 % 23 = 0이면 나누어 떨어짐
    if (nextYear % lastTwoDigits === 0) {
        console.log('Good');
    } else {
        console.log('Bye');
    }
}
