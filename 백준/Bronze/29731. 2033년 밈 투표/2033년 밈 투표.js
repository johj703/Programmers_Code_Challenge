// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으루 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// 공약 개수
const N = Number(input[0]);

// ===== Rick Astley의 원래 공약 =====
const originalPromises = [
    'Never gonna give you up',
    'Never gonna let you down',
    'Never gonna run around and desert you',
    'Never gonna make you cry',
    'Never gonna say goodbye',
    'Never gonna tell a lie and hurt you',
    'Never gonna stop',
];

// ===== 공약이 바뀌었는지 확인 =====
let isChanged = false;

for (let i = 1; i <= N; i++) {
    const promise = input[i].trim();

    // 현재 공약이 원래 공약 목록에 없으면 바뀐 것
    if (!originalPromises.includes(promise)) {
        isChanged = true;
        break;
    }
}

// ===== 결과 출력 =====
console.log(isChanged ? 'Yes' : 'No');
