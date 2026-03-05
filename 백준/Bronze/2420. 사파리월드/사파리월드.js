// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [N, M] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// N: 첫 번째 서브두메인의 유명도
// M: 두 번째 서브두메인의 유명도

// ===== 유명도 차이 계산 =====
/*
    Math.abs(): 절댓값을 반환하는 함수
    [N - M]: 두 유명도의 차이의 절댓값

    ex) N = -2, M = 5
    -2 - 5 = -7
    Math.abd(-7) = 7

    ex) N = 10, M = 3
    10 - 3 = 7
    Math.abd(7) = 7
*/
const difference = Math.abs(N - M);

// ===== 결과 출력 =====
console.log(difference);
