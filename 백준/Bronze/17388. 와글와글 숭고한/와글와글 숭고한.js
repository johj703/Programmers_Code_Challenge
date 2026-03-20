// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const [S, K, H] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

/* 
    S: 숭실대 참여도
    K: 고려대 참여도
    H: 한양대 참여도
*/

// ===== 참여도 평가 =====
const total = S + K + H;

if (total >= 100) {
    // 합이 100 이상이면 OK
    console.log('OK');
} else {
    // 합이 100 미만이면 가장 낮은 대학 출력
    // Math.min() 함수로 최소값 찾기
    const min = Math.min(S, K, H);

    if (min === S) {
        console.log('Soongsil');
    } else if (min === K) {
        console.log('Korea');
    } else {
        console.log('Hanyang');
    }
}
