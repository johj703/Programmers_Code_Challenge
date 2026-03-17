// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 행의 개수, M: 열의 개수
const [N, M] = input[0].split(' ').map(Number);

// ===== 붕어빵 좌우 반전 =====
for (let i = 1; i <= N; i++) {
    /*
        각 줄을 뒤집어서 출력
        split(''): 문자열을 문자 배열로 변환
        reverse(): 배열 순서 뒤집기
        join(''): 배열을 다시 문자열로 합치기
    */
    if (input[i]) {
        const flipped = input[i].trim().split('').reverse().join('');
        console.log(flipped);
    }
}
