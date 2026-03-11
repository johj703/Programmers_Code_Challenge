// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// ===== Hello World 출력 =====
// 1부터 N까지 반복하면서 각 줄에 인사 출력
for (let i = 1; i <= N; i++) {
    console.log(`Hello World, Judge ${i}!`);
}
