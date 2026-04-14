// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리
const [N, U, L] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

/*
    N: 백준 문제 해결 개수
    U: 유니온 레벨
    L: 최고 레벨
*/

// ===== 출제진 자격 판정 =====
// 조건1: 백준 1000문제 이상 해결
const baekjoonCondition = N >= 1000;

// 조건2: 유니온 8000 이상 or 최고 레벨 260 이상
const mapleCondition = U >= 8000 || L >= 260;

// 판정
if (baekjoonCondition && mapleCondition) {
    // 두 조건 만족
    console.log('Very Good');
} else if (baekjoonCondition) {
    // 백준 조건만 만족
    console.log('Good');
} else {
    // 둘 다 만족 안함
    console.log('Bad');
}
