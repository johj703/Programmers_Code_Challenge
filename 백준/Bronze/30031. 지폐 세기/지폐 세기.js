// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 지폐의 개수
const N = Number(input[0]);

// ===== 지폐 총약 계산 =====
let totalAmount = 0; // 총 금액

for (let i = 1; i <= N; i++) {
    const [width, height] = input[i].split(' ').map(Number);

    /*
        가로 길이로 지폐 종류 판별
        * 천 원: 136mm
        * 오 천원권: 142mm
        * 만 원권: 148mm
        * 오 만원권: 154mm
    */
    if (width === 136) {
        // 천 원권
        totalAmount += 1000;
    } else if (width === 142) {
        // 오 천원권
        totalAmount += 5000;
    } else if (width === 148) {
        // 만 원권
        totalAmount += 10000;
    } else if (width === 154) {
        // 오 만원권
        totalAmount += 50000;
    }
}

// ===== 결과 출력 =====
console.log(totalAmount);
