// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const S = require('fs').readFileSync(file).toString().trim();

// ===== 정확한 문자열 판별 =====
// 조건: 길이 3 이상, 시작과 끝이 큰따옴표
if (S.length >= 3 && S[0] === '"' && S[S.length - 1] === '"') {
    // 큰따옴표를 제거한 내부 문자열 추출
    const inner = S.slice(1, -1);
    console.log(inner);
} else {
    // 정확한 문자열이 아니거나 빈 문자열
    console.log('CE');
}
