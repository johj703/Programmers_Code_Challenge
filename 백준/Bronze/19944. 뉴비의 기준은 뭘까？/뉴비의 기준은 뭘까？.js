// ===== 입력 처리 =====

const { ppid } = require('process');

// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리
const [N, M] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// N: 대회 참가 기준 학년
// M: 학생의 학년

// ===== 뉴비/올드비/TLE 판별 =====
if (M === 1 || M === 2) {
    // 1학년 또는 2학년 -> 뉴비
    console.log('NEWBIE!');
} else if (M <= N) {
    // N학년 이하이면서 뉴비가 아님 -> 올드비
    console.log('OLDBIE!');
} else {
    // 뉴비도 아니고 올드비도 아님 (M > N) -> TLE
    console.log('TLE!');
}
