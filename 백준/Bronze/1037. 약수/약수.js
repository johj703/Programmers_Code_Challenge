// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 공백 제거 후 줄바끔으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 진짜 약수의 개수 추출
const t = parseInt(input[0]);

// 4. N을 저장할 변수 초기화
let n = 0;

// 5. 두 번째 줄에서 진짜 약수들을 숫자 배열로 변환
const arr = input[1].split(" ").map(Number);

// 6. 진짜 약수 중 최대값 찾기
const max = Math.max(...arr);

// 7. 진짜 약수 중 최소값 찾기
const min = Math.min(...arr);

// 8. N = 최소값 * 최대값
// 진짜 약수의 최소와 최대를 곱하면 원래 수 N이 된다.
n = min * max;

// 9. N 출력
console.log(n);
