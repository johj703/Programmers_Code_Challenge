// ===== 백준 31322번 "재수강" (브론즈2) =====
// https://www.acmicpc.net/problem/31322
// 풀이일: 2026-04-20

// ===== 정답 코드 =====
// 시간 복잡도: O(N) - Big-O, N개 과목 순회
// 공간 복잡도: O(1) - Big-O, 상수 공간만 사용

// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== 재수강 과목 확인 =====
// 재수강할 과목의 5자리 추출
const targetCode = input[0].slice(0, 5);

// 수강 가능한 과목 개수
const N = Number(input[1]);

// 재수강 인정 과목 개수 세기
let count = 0;

for (let i = 2; i < 2 + N; i++) {
    const courseCode = input[i].trim().slice(0, 5);

    // 앞의 5자리가 일치하면 재수강 가능
    if (courseCode === targetCode) {
        count++;
    }
}

// ===== 결과 출력 =====
console.log(count);
