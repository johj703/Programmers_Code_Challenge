// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 파묻튀밥 한 줄에 들어가는 파묻튀의 양(그램)
const N = Number(input[0]);

// M: 학교가 사용한 파묻튀의 총 양(그램)
const M = Number(input[1]);

// K: 파묻튀밥 한 줄에 필요한 가지의 양(그램)
const K = Number(input[2]);

// ===== 필요한 가지의 양 계산 =====
/*
    학교가 만든 파묻튀밥의 줄 수
    파묻튀밥 한 줄에 파묻튀 N그램이 들어가므로
    총 M그램의 파묻튀로 만든 파묻튀밥 줄 수 = M ÷ N(정수 나눗셈)
*/
const numRolls = M / N;

/*
    필요한 가지의 총량
    파묻튀밥 한 줄당 가지 K그램이 필요하므로
    총 필요한 가지 = (파묻튀밥 줄 수) × K)
*/
const eggplantNeeded = numRolls * K;

// ===== 결과 출력 =====
console.log(eggplantNeeded);
