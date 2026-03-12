// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리
const [N, M] = require('fs').readFileSync(file).toString().trim().split(' ');

// ===== 배터리 비교 =====
/*
    N과 M이 같은지 비교
    주의: 최대 10자리 정수이므로 문자열로 비교하는 것이 안전
*/
if (N === M) {
    console.log(1);
} else {
    console.log(0);
}
