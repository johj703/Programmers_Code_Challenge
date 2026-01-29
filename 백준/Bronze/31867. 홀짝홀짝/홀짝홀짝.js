// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 자릿수
const N = Number(input[0]);

// K: 양의 정수(문자열로 처리)
const K = input[1].trim();

// ===== 홀수와 짝수 개수 세기 =====
let evenCount = 0; // 짝수 개수
let oddCount = 0; // 홀수 개수

// K의 각 자릿수를 순회
for (let i = 0; i < K.length; i++) {
    const digit = Number(K[i]);

    // 해당 자릿수가 짝수인지 홀수인지 판별
    // 0은 짝수로 간주
    if (digit % 2 === 0) {
        // 짝수일 경우(0, 2, 4, 6, 8)
        evenCount++;
    } else {
        // 홀수일 경우(1, 3, 5, 7, 9)
        oddCount++;
    }
}

// ===== 결과 판별 및 출력 =====
if (evenCount > oddCount) {
    // 짝수가 더 많으면 짝짝수
    console.log('0');
} else if (oddCount > evenCount) {
    // 홀수가 더 많으면 홀홀수
    console.log('1');
} else {
    // 개수가 같으면
    console.log(-1);
}
