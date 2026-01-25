// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// T: 파댕이를 돌봐야 하는 시간(분)
const T = Number(input[0]);

// N: 가지고 있는 사탕의 총 개수
const N = Number(input[1]);

// candies: 각 사탕의 맛(파댕이를 울지 않게 하는 시간)
const candies = input[2].split(' ').map(Number);

// ===== 사탕으로 파댕이를 돌볼 수 있는 총 시간 계산 =====
// 모든 사탕의 맛(F)을 더하면 총 돌볼 수 있는 시간
let totalTime = 0;

for (let i = 0; i < N; i++) {
    totalTime += candies[i];
}

// ===== 결과 판별 및 출력 =====
// 총 시간이 T 이상이면 파댕이를 울지 않게 만들 수 있음
if (totalTime >= T) {
    console.log('Padaeng_i Happy');
} else {
    console.log('Padaeng_i Cry');
}
