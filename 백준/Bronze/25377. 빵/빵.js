// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 가게의 수
const N = Number(input[0]);

// ===== 빵을 살 수 있는 가장 빠른 시간 찾기 =====
let minTime = Infinity; // 최소 시간(처음에는 무한대)

for (let i = 1; i <= N; i++) {
    const [A, B] = input[i].trim().split(' ').map(Number);

    // A: 가게까지 가는 데 걸리는 시간
    // B: 빵이 들어올 때까지 남은 시간

    // 빵이 도착하기 전이나 도착하는 순간에 가게에 도착할 수 있으면
    if (A <= B) {
        // 빵을 살 수 있음
        // 빵을 구하는 데 걸리는 시간은 B (빵이 들어올 때까지 시간)
        minTime = Math.min(minTime, B);
    }
}

// ===== 결과 출력 =====
if (minTime === Infinity) {
    // 빵을 살 수 없음
    console.log(-1);
} else {
    // 최소 시간 출력
    console.log(minTime);
}
