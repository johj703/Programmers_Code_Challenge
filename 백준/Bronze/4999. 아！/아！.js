// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// 재환이가 낼 수 있는 "aaah" (첫째 줄)
const jaehwan = input[0];

// 의사가 원하는 "aah" (둘째 줄)
const doctor = input[1];

// ===== 길이 비교 =====
/*
    문자열의 길이를 비교 (a의 개수 + h 1개)
    h는 항1상 마지막에 1개씩이므로, 길이가 곧 a의 개수 + 1
    재환이 길이 >= 의사 길이 -> 재환이가 충분히 길게 낼 수 있음
*/

if (jaehwan.length >= doctor.length) {
    console.log('go');
} else {
    console.log('no');
}
