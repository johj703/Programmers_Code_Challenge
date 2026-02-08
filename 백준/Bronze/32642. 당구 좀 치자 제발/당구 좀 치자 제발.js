// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 날짜 수
const N = Number(input[0]);

// weather: N일 동안의 날씨(1: 비 오는 날, 0: 비 안 오는 날)
const weather = input[1].split(' ').map(Number);

// ===== 분노의 합 계산 =====
// 현재 분노 수치
let currentAnger = 0;
// 1일차부터 N일차까지의 분노 합
let totalAngerSum = 0;

for (let i = 0; i < N; i++) {
    // 오늘의 날씨 확인
    if (weather[i] === 1) {
        // 비가 오는 날: 분노 +1
        currentAnger += 1;
    } else {
        // 비가 안 오는 날: 분노 -1
        currentAnger -= 1;
    }

    // 오늘의 분노를 총합에 더함
    totalAngerSum += currentAnger;
}

// ===== 결과 출력 =====
console.log(totalAngerSum);
