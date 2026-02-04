// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// ===== 구구단표 등장 여부 확인 =====
// 구구단표: A × B = C (A: 2~9, B: 1~9)

// N이 A, B, C 중 어디에라도 등장하는지 확인
let appears = false;

/*
    경우1: N이 B로 등장(1~9)
    모든 단에서 B는 1~9이므로, N이 1~9면 무조건 등장
*/
if (N >= 1 && N <= 9) {
    appears = true;
}

/*
    경우2: N이 C로 등장(구구단 결과값)
    2단부터 9단까지, 각각 1~9를 곱한 결과 중에 N이 있는지 확인
*/
for (let A = 2; A <= 9; A++) {
    for (let B = 1; B <= 9; B++) {
        if (A * B === N) {
            appears = true;
            break;
        }
    }
    if (appears) break;
}

// ===== 결과 출력 =====
console.log(appears ? 1 : 0);
