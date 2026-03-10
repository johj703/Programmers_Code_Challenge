// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력을 받기는 하지만 사용하지 않음
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== 출력 =====
// 버스 운전수의 이름은 항상 "비와이"
console.log('비와이');
