// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리
const input = require('fs').readFileSync(file).toString().trim().split(' ');

// lv: 키 노트의 레벨
const lv = Number(input[0]);

// judgment: 판정 (miss, bad, cool, great, perfect 중 하나)
const judgment = input[1];

// ===== 획득 점수 계산 =====
let score = 0;

// 판정에 따른 점수 계산
if (judgment === 'miss') {
    // miss: 0점
    score = 0;
} else if (judgment === 'bad') {
    // bad: 200 × lv;
    score = 200 * lv;
} else if (judgment === 'cool') {
    // cool: 400 × lv;
    score = 400 * lv;
} else if (judgment === 'great') {
    // great: 600 × lv;
    score = 600 * lv;
} else if (judgment === 'perfect') {
    // perfect: 1000 × n × lv;
    /*
        "이전에 받은 판정과 다른 판정"이므로 이전이 perfect가 아님,
        따라서 1연팩 (n = 1)
    */
    score = 1000 * 1 * lv;
}

// ===== 결과 출력 =====
console.log(score);
