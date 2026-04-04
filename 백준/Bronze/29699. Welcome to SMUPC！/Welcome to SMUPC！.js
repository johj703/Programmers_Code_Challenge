// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// ===== N번째 글자 찾기 =====
// 반복되는 문자열
const pattern = 'WelcomeToSMUPC';

// 패턴의 길이
const length = pattern.length; // 14

// N번째 글자의 index 계산
// (N - 1) % length: 0부터 시작하는 index
const index = (N - 1) % length;

// N번째 글자 출력
console.log(pattern[index]);
