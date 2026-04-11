// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// 경기 수
const N = Number(input[0]);

// ===== 점수 계산 =====
let D = 0; // 달구 점수
let P = 0; // 포닉스 점수

for (let i = 1; i <= N; i++) {
    const winner = input[i].trim();

    // 승자에게 1점 추가
    // D가 이기면
    if (winner === 'D') {
        // D 점수 추가
        D++;
    } else {
        // 아니면 P 점수 추가
        P++;
    }

    // 2점 차이나면 경기 종료
    if (Math.abs(D - P) === 2) {
        break;
    }
}

// ===== 결과 출력 =====
console.log(`${D}:${P}`);
