// ===== 백준 31994번 "강당 대관" (브론즈3) =====
// https://www.acmicpc.net/problem/31994
// 풀이일: 2026-04-23

// ===== 정답 코드 =====
// 시간 복잡도: O(1) - Big-O, 항상 7개 세미나만 처리
// 공간 복잡도: O(1) - Big-O, 고정된 개수의 세미나 저장

// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== 최대 신청자 세미나 찾기 =====
let maxApplicants = 0;
let maxSeminar = '';

for (let i = 0; i < 7; i++) {
    const [seminar, applicants] = input[i].trim().split(' ');
    const count = Number(applicants);

    if (count > maxApplicants) {
        maxApplicants = count;
        maxSeminar = seminar;
    }
}

// ===== 결과 출력 =====
console.log(maxSeminar);
