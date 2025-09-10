// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let [a, b, c] = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 변환
  .trim() // 앞 뒤 공백 제거
  .split("\n") // 줄바꿈으로 분리하여 배열 생성
  .map(Number); // 각 요소를 숫자로 변환

// 3. 첫 번째 조건: 세 각의 합이 180도가 아니면 'Error' 출력
if (a + b + c != 180) console.log("Error");
else {
  // 4. 세 각의 합이 180도인 경우 삼각형 종류 판별
  if (a == b) {
    // 5. a와 b가 같은 경우
    if (a == c) {
      // 6. a, b, c가 모두 같으면 '정삼각형' 출력
      console.log("Equilateral");
    } else {
      // 7. a와 b만 같으면 '이등변삼각형' 출력
      console.log("Isosceles");
    }
  } else {
    // 8. a와 b가 다른 경우
    if (a == c || b == c) {
      // 9. a와 c가 같거나 b와 c가 같으면 '이등변삼각형' 출력
      console.log("Isosceles");
    } else {
      // 10. 세 각이 모두 다르면 '부등변삼각형' 출력
      console.log("Scalene");
    }
  }
}
