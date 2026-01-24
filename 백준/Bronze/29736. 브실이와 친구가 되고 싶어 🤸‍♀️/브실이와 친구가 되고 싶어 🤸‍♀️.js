// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// A, B: 사람들이 푼 문제 수 범위 [A, B]
const [A, B] = input[0].split(' ').map(Number);

// K: 브실이가 푼 문제 수, X: 친구 조건(차이가 X 이하)
const [K, X] = input[1].split(' ').map(Number);

// ===== 친구가 될 수 있는 사람의 수 계산 =====
/*
    브실이와 푼 문제 수 차이가 X 이하인 사람
    |사람이 푼 문제 수 - K| <= X
    <-> K - X <= 사람이 푼 문제 수 <= K + X

    친구 조건을 만족하는 범위: [K-X, K+X]
    사람들의 문제 수 범위: [A, B]
    두 범위의 교집합을 구하면 됨!
*/

// 교집합의 시작점
const rangeStart = Math.max(A, K - X);

// 교집합의 끝점
const rangeEnd = Math.min(B, K + X);

// ===== 결과 계산 및 출력 =====
// 교집합이 유효한지 확인 (시작점 <= 끝점)
if (rangeStart <= rangeEnd) {
    // 친구가 될 수 있는 사람의 수
    // [rangeStart, rangeEnd] 범위의 정수 개수 = rangeEnd - rangeStart + 1
    const friendCount = rangeEnd - rangeStart + 1;
    console.log(friendCount);
} else {
    // 교집합이 비어있음 (친구가 될 수 있는 사람이 없음)
    console.log('IMPOSSIBLE');
}
