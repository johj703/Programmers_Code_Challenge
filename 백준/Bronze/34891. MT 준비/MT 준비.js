// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리
const [N, M] = require('fs').readFileSync(file).toString().trim().split(' ');

/*
    N: 물건의 개수
    M: 박스의 크기 (박스 하나에 담을 수 있는 최대 물건 개수)
*/

// ===== 필요한 박스 개수 계산 =====
/*
    N개의 물건을 M개씩 담으려면
    N ÷ M을 올림한 값만큼의 박스가 필요
*/
let boxCount;

if (N === 0) {
    // 물건이 없으면 박스도 필요 없음
    boxCount = 0;
} else {
    // 필요한 박스 걔수 = [N ÷ M] (올림)
    boxCount = Math.ceil(N / M);
}

// ===== 결과 출력 =====
console.log(boxCount);
