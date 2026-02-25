// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const numbers = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// ===== 오름차순 정렬 =====
/*
    sort() 함수에 비교 함수 전달
    (a, b) => a - b: 오름차순 정렬
    a - b < 0 이면 a가 앞으로(작은 수가 앞)
    ex) [3, 2, 1] -> [1, 2, 3]
*/
numbers.sort((a, b) => a - b);

// ===== 결과 출력 =====
console.log(numbers.join(' '));
