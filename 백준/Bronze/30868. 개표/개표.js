// ===== 백준 30868번 "개표" (브론즈3) =====
// https://www.acmicpc.net/problem/30868
// 풀이일: 2026-04-23

// ===== 정답 코드 =====
// 시간 복잡도: O(T × N) - Big-O, T개 후보, 각 후보당 최대 N/5개의 그룹
// 공간 복잡도: O(N) - Big-O, 결과 문자열 길이

// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== 개표 처리 =====
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    const n = Number(input[i]);

    // ++++ 그룹 개수와 나머지 | 개수 계산
    const groups = Math.floor(n / 5); // 5표씩 묶은 개수
    const remainder = n % 5; // 나머지 표 개수

    let result = '';

    // ++++ 그리기
    for (let j = 0; j < groups; j++) {
        result += '++++';
        if (j < groups - 1 || remainder > 0) {
            result += ' '; // 다음이 있으면 공백 추가
        }
    }

    // 남은 | 그리기
    for (let j = 0; j < remainder; j++) {
        result += '|';
    }

    console.log(result);
}
