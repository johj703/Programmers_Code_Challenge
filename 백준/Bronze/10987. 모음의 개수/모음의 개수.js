// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const word = require('fs').readFileSync(file).toString().trim();

// ===== 모음 개수 세가 =====
// 모음 목록 정의
const vowels = ['a', 'e', 'i', 'o', 'u'];

// 모음 개수
let vowelCount = 0;

// 단어의 각 문자를 소환
for (let i = 0; i < word.length; i++) {
    /*
        현재 문자가 모음인지 확인
        includes(): 배열에 해당 요소가 있는지 확인(있으면 true)
    */
    if (vowels.includes(word[i])) {
        vowelCount++;
    }
}

// ===== 결과 출력 =====
console.log(vowelCount);
