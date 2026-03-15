// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 줄의 수
const N = Number(input[0]);

// ===== 각 줄에 번호 붙여서 출력 =====
for (let i = 1; i <= N; i++) {
    // i번째 줄의 내용(input[i])
    // 줄 번호는 1부터 시작 (i)
    console.log(`${i}. ${input[i]}`);
}
