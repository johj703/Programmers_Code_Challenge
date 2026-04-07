// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// 기프티콘 개수
const N = Number(input[0]);

// ===== 유효기간 90일 이하인 기프티콘 세기 =====
let count = 0;

for (let i = 1; i <= N; i++) {
    // "D-86" 형식에서 숫자 추출
    const line = input[i].trim();
    const days = Number(line.split('-')[1]);

    // 유효기간이 90일 이하면 카운트
    if (days <= 90) {
        count++;
    }
}

// ===== 결과 출력 =====
console.log(count);
