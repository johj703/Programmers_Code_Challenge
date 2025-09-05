// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽고 전처리하여 A, B 값 추출
const [A, B] = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 변환
  .trim() // 앞뒤 공백 제거
  .split("\n") // 줄바꿈으로 분리하여 배열 생성
  .map(Number); // 각 요소를 문자열에서 숫자로 변환

// 3. 직사각형의 넓이 계산 및 출력
// 넓이 = 세로 x 가로 = A x B
console.log(A * B);
