// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const str = require('fs').readFileSync(file).toString().trim();

// ===== MOBIS를 만들 수 있는지 확인 =====
// MOBIS를 만들려면 M, O, B, I, S가 모두 있어야 함
const required = ['M', 'O', 'B', 'I', 'S'];

// 모든 필수 문자가 문자열에 포함되어 있는지 확인
let canMake = true;

for (const char of required) {
    if (!str.includes(char)) {
        canMake = false;
        break;
    }
}

// ===== 결과 출력 =====
console.log(canMake ? 'YES' : 'NO');
