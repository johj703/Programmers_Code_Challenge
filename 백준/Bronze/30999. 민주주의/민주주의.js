// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 문제 후보 수, M: 출제위원 수
const [N, M] = input[0].split(' ').map(Number);

// ===== 출제될 문제 수 세기 =====
let count = 0; // 출제될 문제 수

for (let i = 1; i <= N; i++) {
    const votes = input[i].trim();

    // O(찬성)의 개수 세기
    let yesCount = 0;
    for (let j = 0; j < M; j++) {
        if (votes[j] === 'O') {
            yesCount++;
        }
    }

    // 과반수(절반 초과) 찬성이면 출제
    if (yesCount > M / 2) {
        count++;
    }
}

// ===== 결과 출력 =====
console.log(count);
