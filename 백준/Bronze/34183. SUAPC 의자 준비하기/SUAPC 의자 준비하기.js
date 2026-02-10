// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [N, M, A, B] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

/*
    N: 참가 팀 수
    M: 현재 보유한 의자 수
    A: 의자 개당 가격
    B: 운송비(1회)
*/

// ===== 필요한 의자 개수 계산 =====
// 각 팀당 3개의 의자 필요
const totalNeeded = 3 * N;

// 부족한 의자 개수(음수면 0으로 처리)
const shortage = Math.max(0, totalNeeded - M);

// ===== 최소 금액 계산 =====
let minCost = 0;

if (shortage > 0) {
    /*
        의자를 구매해야 하는 경우
        비용 = (부족한 개수 × 개당 가격) + 운송비
    */
    minCost = shortage * A + B;
} else {
    // 의자를 구매할 필요가 없는 경우
    minCost = 0;
}

// ===== 결과 출력 =====
console.log(minCost);
