// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽고 세 막대 길이를 오름차순으로 정렬
let [a, b, c] = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 전환
  .trim() // 앞 뒤 공백 제거
  .split(" ") // 공백으로 분리하여 배열 생성
  .map(Number) // 각 요소를 숫자로 변환
  .sort((a, b) => a - b); // 오름차순 정렬 [작은 값, 중간 값, 큰 값]

// 3. 삼각형 조건을 만족할 때까지 가장 긴 변 줄이기
// 삼각형 조건: 두 작은 변의 합이 가장 긴 변보다 커야한다!
while (a + b <= c) {
  c--;
}

// 4. 최대 둘레 출력
console.log(a + b + c);
