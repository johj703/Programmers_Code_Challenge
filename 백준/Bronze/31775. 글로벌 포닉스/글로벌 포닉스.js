// ===== 백준 31775번 "글로벌 포닉스" (브론즈3) =====
// https://www.acmicpc.net/problem/31775
// 풀이일: 2026-04-23

// ===== 정답 코드 =====
// 시간 복잡도: O(1) - Big-O, 항상 3개 문자열만 처리
// 공간 복잡도: O(1) - Big-O, 고정된 크기의 Set 사용

// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== GLOBAL 판별 =====
const S1 = input[0].trim();
const S2 = input[1].trim();
const S3 = input[2].trim();

// 각 문자열의 첫 글자를 Set에 저장
const firstLetters = new Set([S1[0], S2[0], S3[0]]);

// Set이 정확히 'l', 'k', 'p'를 포함하는지 확인
if (
    firstLetters.has('l') &&
    firstLetters.has('k') &&
    firstLetters.has('p') &&
    firstLetters.size === 3
) {
    console.log('GLOBAL');
} else {
    console.log('PONIX');
}
