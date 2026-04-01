// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// ===== LoveisKoreaUniversity를 N번 출력 =====
// Array(N).fill()로 N개 배열 생성, join(' ')로 공백 구분
console.log(Array(N).fill('LoveisKoreaUniversity').join(' '));
