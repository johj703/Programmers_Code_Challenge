// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// ===== 최소 칸 개수 계산 =====
/*
    주 대각선: (1,1), (2,2), ..., (N,N)
    반대 대각선: (1,N), (2,N-1), ..., (N,1)

    각 행 i에서:
    - 주 대각선 위치: (i, i)
    - 반대 대각선 위치: (i, N+1-i)

    N이 홀수일 때:
    - 중간 행 i =  (N+1)/2에서 두 대각선이 만남
    - (i, i) = (i, N+1-i) → 1칸만 칠하면 됨

    N이 짝수일 때:
    - 어느 행을 선택해도 두 대각선이 서로 다른 칸
    - 2칸을 칠해야 함
*/

let minCells;

if (N % 2 === 1) {
    // N이 홀수: 중간 행에서 두 대각선이 만남
    minCells = 1;
} else {
    // N이 짝수: 어느 행이든 두 대각선이 다른 칸
    minCells = 2;
}

// ===== 결과 출력 =====
console.log(minCells);
