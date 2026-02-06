// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// T: 테스트 케이스의 개수
const T = Number(input[0]);

// ===== 각 테스트 케이스 처리 =====
// 현재 읽고 있는 줄 번호
let lineIndex = 1;

for (let i = 0; i < T; i++) {
    // N: 자연수의 개수
    const N = Number(input[lineIndex]);

    // N:개의 자연수 배열
    const numbers = input[lineIndex + 1].split(' ').map(Number);

    // 자연수들의 합 계산
    let sum = 0;
    for (let j = 0; j < N; j++) {
        sum += numbers[j];
    }

    // 결과 출력
    console.log(sum);

    // 다음 테스트 케이스로 이동 (N이 있는 줄 + 숫자들이 있는 줄 = 2줄)
    lineIndex += 2;
}
