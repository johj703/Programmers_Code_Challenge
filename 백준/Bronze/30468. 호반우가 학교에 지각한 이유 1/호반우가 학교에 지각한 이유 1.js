// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [STR, DEX, INT, LUK, N] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// STR: 힘 스탯
// DEX: 민첩 스탯
// INT: 지능 스탯
// LUK: 운 스탯
// N: 목표 평균 스탯 수치

// ===== 최소 축복 횟수 계산 =====
// 현재 스탯의 총 합
const currentSum = STR + DEX + INT + LUK;

/* 
 평균 스탯이 N 이상이 되려면:
 (STR + DEX + INT + LUK) / 4 >= N <-> STR + DEX + INT + LUK >= 4N
*/

// 목표 스탯 총 합
const targetSum = 4 * N;

// 필요한 축복 횟수 = 목표 총 합 - 현재 총 합
// 이미 평균이 N 이상이면 0
const blessingsNeeded = Math.max(0, targetSum - currentSum);

// ===== 결과 출력 =====
console.log(blessingsNeeded);
