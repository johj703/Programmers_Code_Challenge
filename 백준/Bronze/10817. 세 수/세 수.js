// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const numbers = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// ===== 두 번째로 큰 수 찾기 =====
// 배열을 오름차순으로 정렬
// 예: [20, 30, 10] -> [10, 20, 30]
numbers.sort((a, b) => a - b);

// 정렬된 배열의 중간값(index 1)이 두 번째로 큰 수
const secondLargest = numbers[1];

// ===== 결과 출력 =====
console.log(secondLargest);
