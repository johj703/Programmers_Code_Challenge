// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// 날짜의 일의 자리 숫자
const day = Number(input[0]);

// 5대의 자동차 번호의 일의 자리 숫자 배열
const cars = input[1].split(' ').map(Number);

// ===== 10부제 위반 차량 대수 세기 =====
// 위반 차량 대수
let violationCount = 0;

// 5대의 자동차를 하나씩 확인
for (let i = 0; i < 5; i++) {
    // 자동차 번호의 일의 자리가 날짜의 일의 자리와 같으면 위반
    if (cars[i] === day) {
        violationCount++;
    }
}

// ===== 결과 출력 =====
console.log(violationCount);
