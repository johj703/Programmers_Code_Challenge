// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const word = require('fs').readFileSync(file).toString().trim();

// ===== 대소문자 바꾸기 =====
// 변환된 결과를 저장할 문자열
let result = '';

// 단어의 각 문자를 순회
for (let i = 0; i < word.length; i++) {
    const ch = word[i];

    // 대문자인지 확인
    // ch.toUpperCase()와 비교했을 때 같으면 대문자
    if (ch === ch.toUpperCase()) {
        // 대문자 -> 소문자로 변환
        result += ch.toLowerCase();
    } else {
        // 소문자 -> 대문자로 변환
        result += ch.toUpperCase();
    }
}

// ===== 결과 출력 =====
console.log(result);
