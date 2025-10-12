// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 전처리
let input = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 변환
  .trim() // 앞뒤 공백 제거
  .split("\n") // 줄바꿈으로 분리하여 배열 생성
  .map(Number); // 각 요소를 숫자로 변환

// 3. 구조 분해 할당으로 N과 숫자 배열 분리
// 첫 번째 요소는 N(개수), 나머지는 arr(정렬할 숫자들)
[N, ...arr] = input;

// 4. 정렬 함수 호출
solution(arr);

// 5. 정렬 및 출력 함수
function solution(arr) {
  // 6. 배열을 오름차순으로 정렬
  arr = arr.sort((a, b) => a - b);

  // 7. 정렬된 배열을 줄바꿈으로 구분하여 출력
  console.log(arr.join("\n"));
}
