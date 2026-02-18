// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [y, c, p] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

/*
    y: Y 문자의 개수
    c: C 문자의 개수
    p: P 문자의 개수
*/

// ===== YCPC 최대 개수 계산 =====
/*
    YCPC 한 개를 만들려면:
        - Y: 1개
        - C: 2개
        - P: 1개

    각 문자로 만들 수 있는 YCPC의 최대 개수:
        - Y: y개 있으면 -> 최대 y개의 YCPC 가능
        - C: c개 있으면 -> floor(c/2)개의 YCPC 가능(C는 2개씩 필요)
        - P: p개 있으면 -> 최대 p개의 YCPC 가능
*/

// 최대 개수 = 세 가지 중 가장 작은 값(제약이 가장 큰 문자가 결정)
const maxYCPC = Math.min(y, Math.floor(c / 2), p);

// ===== 결과 출력 =====
console.log(maxYCPC);
