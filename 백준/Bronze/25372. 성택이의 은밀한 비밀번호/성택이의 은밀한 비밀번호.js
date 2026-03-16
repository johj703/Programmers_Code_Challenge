// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 문자열의 개수
const N = Number(input[0]);

// ===== 각 문자열이 비밀번호로 사용 가능한지 확인 =====
for (let i = 1; i <= N; i++) {
    const password = input[i].trim();

    // 비밀번호 조건: 6자리 이상 9자리 이하
    if (password.length >= 6 && password.length <= 9) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
