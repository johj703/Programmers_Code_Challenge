// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으루 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== 각 숫자의 개수 세기 =====
const count = {};

for (let i = 0; i < 5; i++) {
    const num = input[i].trim();

    // 해당 숫자의 개수 증가
    count[num] = (count[num] || 0) + 1;
}

// ===== 홀수 개인 숫자 찾기 =====
for (const num in count) {
    if (count[num] % 2 === 1) {
        // 홀수 개라면 남는 양말
        console.log(num);
        break;
    }
}
