// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// n: 테스트 케이스 개수
const n = Number(input[0]);

// ===== 히스토그램 출력 =====
for (let i = 1; i <= n; i++) {
    const k = Number(input[i].trim());

    // k개의 '=' 출력
    // repeat(k): 문자열을 k번 반복
    console.log('='.repeat(k));
}
