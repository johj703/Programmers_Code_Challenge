// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [X, Y] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// ===== X자리 레퓨닛과 Y자리 레퓨닛 생성 =====
/*
    X자리 레퓨닛: 1이 X개 연속된 수
    예: X = 3 -> "111" -> 111
*/
const repunitX = '1'.repeat(X);

/*
    Y자리 레퓨닛: 1이 Y개 연속된 수
    예: Y = 2 -> "11" -> 11
*/
const repunitY = '1'.repeat(Y);

// ===== 두 레퓨닛의 합 계산 =====
// 문자열을 숫자로 변환하여 더하기
const sum = Number(repunitX) + Number(repunitY);

// ===== 결과 출력 =====
console.log(sum);
