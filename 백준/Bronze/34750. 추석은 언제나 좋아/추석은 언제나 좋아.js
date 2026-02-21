// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// N: 할아버지꼐 받은 용돈

// ===== 부모님께 드리는 금액 계산 =====
let toParents; // 부모님께 드리는 금액

if (N >= 1000000) {
    // 100만원 이상: 20%
    toParents = N * 0.2;
} else if (N >= 500000) {
    // 50만원 이상 100만원 미만: 15%
    toParents = N * 0.15;
} else if (N >= 100000) {
    // 10만원 이상 50만원 미만: 10%
    toParents = N * 0.1;
} else {
    // 10만원 미만: 5%
    toParents = N * 0.05;
}

// ===== 재민이가 갖게 되는 금액 계산 =====
const toJaemin = N - toParents;

// ===== 결과 출력 =====
console.log(toParents, toJaemin);
