// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 1차원 배열로 변환
let input = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 변환
  .trim() // 앞 뒤 공백 제거
  .split("\n") // 줄바꿈으로 분리하여 배열 생성
  .map((it) => it.split(" ")) // 각 줄을 공백으로 분리하여 2차원 배열로 변환
  .flat() // 2차원 배열을 1차원 배열로 평탄화
  .map(Number); // 각 요소를 문자열에서 숫자로 변환

// 3. 배열에서 최댓값 찾기
const max = Math.max(...input);

// 4. 최댓값의 index(위치) 찾기
const idx = input.indexOf(max);

// 5. 최댓값 출력
console.log(max);

// 6. 최댓값의 행과 열 위치 계산 및 출력
// Math.floor(idx / 9) + 1: 행 번호
// (idx % 9) + 1: 열 번호
console.log(Math.floor(idx / 9) + 1, (idx % 9) + 1);
