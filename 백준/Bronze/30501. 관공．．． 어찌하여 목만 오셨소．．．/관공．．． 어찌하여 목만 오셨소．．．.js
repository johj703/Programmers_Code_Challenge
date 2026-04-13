// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// 용의자 수
const N = Number(input[0]);

// ===== 범인 찾기 =====
// 이름에 'S'가 포함된 사람이 범인
for (let i = 1; i <= N; i++) {
    const name = input[i].trim();

    // 이름에 'S'가 포함되어 있으면 범인!
    if (name.includes('S')) {
        console.log(name);
        break; // 답은 유일하므로 찾으면 종료
    }
}
