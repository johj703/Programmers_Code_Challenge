// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const [A, P, C] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// A: Division 1 우승 상금(만원)
// P: Division 2 우승 상금(만원)
// C: 2024 shake! 우승 상금(만원)

// ===== 최대 상금 계산 =====
// 소프트웨어융합대학이나 정보통신대학 소속이 아닌 사람의 선택지:

// 1. Division 1 참가 -> Division 1 우승 (A만원) + shake! 진출 및 우승 (C만원)
// 총 상금: A + C 만원
const option1 = A + C;

// 2. Division 2 참가 -> Division 2 우승 (P만원), shake! 진출 불가
// 총 상금: P 만원
const option2 = P;

// 최대 상금 선택
const maxPrize = Math.max(option1, option2);

// ===== 결과 출력 =====
console.log(maxPrize);
