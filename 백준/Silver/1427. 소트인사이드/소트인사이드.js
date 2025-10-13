// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 각 자릿수를 배열로 분리
const arr = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 변환
  .trim() // 앞 뒤 공백 제거
  .split(""); // 한 글자씩 분리하여 배열 생성

// 3. 정렬 함수 호출 및 결과 출력
console.log(solution(arr));

// 4. 내림차순 정렬 함수
function solution(arr) {
  // 5. 배열을 내림차순으로 정렬(큰 수부터)
  sorted = arr.sort((a, b) => b - a);
  // 6. 배열을 문자열로 합쳐서 반환
  return sorted.join("");
}
