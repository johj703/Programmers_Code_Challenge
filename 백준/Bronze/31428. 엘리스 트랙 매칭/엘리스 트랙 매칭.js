// ===== 백준 31428번 "엘리스 트랙 매칭" (브론즈3) =====
// https://www.acmicpc.net/problem/31428
// 풀이일: 2026-04-23

// ===== 정답 코드 =====
// 시간 복잡도: O(N) - Big-O, N명의 친구 확인
// 공간 복잡도: O(N) - Big-O, 친구들의 트랙 배열 저장

// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== 트랙 매칭 =====
const N = Number(input[0]);
const friendsTracks = input[1].trim().split(' ');
const hellobitTrack = input[2].trim();

// 헬로빗과 같은 트랙을 선택한 친구 수 세기
let count = 0;
for (let i = 0; i < N; i++) {
    if (friendsTracks[i] === hellobitTrack) {
        count++;
    }
}

// ===== 결과 출력 =====
console.log(count);
