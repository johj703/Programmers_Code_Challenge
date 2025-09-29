// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 문자열로 저장
let input = require("fs").readFileSync(file).toString().trim();

// 3. 입력값을 숫자로 변환
const n = Number(input);

// 4. 서로 다른 색상 조합의 개수 계산
// 상의 선택: n가지, 하의 선택: (n-1)가지 (같은 색상 제외)
const result = n * (n - 1);

// 5. 결과 출력
console.log(result);

/**
 * 실행 예시(N=3)
 * 색상: 빨강(1), 파랑(2), 초록(3)
 *
 * 상의 빨강 -> 하의: 파랑, 초록(2가지)
 * 상의 파랑 -> 하의: 빨강, 초록(2가지)
 * 상의 초록 -> 하의: 빨강, 파랑(2가지)
 *
 * 총 조합: 3 x 2 = 6가지
 */
