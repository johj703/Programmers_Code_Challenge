// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// 진호의 MBTI 유형
const jinhoMBTI = input[0].trim();

// 친구의 수
const N = Number(input[1]);

// ===== 같은 MBTI 유형인 친구 수 세기 =====
let count = 0;

for (let i = 2; i < 2 + N; i++) {
    const friendMBTI = input[i].trim();

    // 진호와 MBTI가 같으면 카운트 증가
    if (friendMBTI === jinhoMBTI) {
        count++;
    }
}

// ===== 결과 출력 =====
console.log(count);
