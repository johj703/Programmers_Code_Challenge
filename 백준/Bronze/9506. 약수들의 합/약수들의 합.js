// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽고 전처리
let input = require("fs")
  .readFileSync(file)
  .toString() // Buffer를 문자열로 변환
  .trim() // 앞뒤 공백 제거
  .split("\n") // 줄바꿈으로 분리하여 배열 생성
  .map(Number); // 각 요소를 문자열에서 숫자로 변환

// 3. 마지막 -1 제거(문제 조건: -1로 입력 종료)
input.pop();

// 4. 각 숫자에 대해 완전수 판별 후 결과를 한 번에 출력
console.log(
  input
    .map(function solution(num) {
      // 5. 약수 배열 초기화(1은 항상 약수이므로 미리 포함)
      const divisor = [1];

      // 6. 2부터 num-1까지 약수 찾기(자기 자신 제외)
      for (let i = 2; i < num; i++) {
        // 7. i가 num의 약수인지 확인(나머지가 0이면 약수)
        if (num % i === 0) {
          // 약수를 배열에 추가
          divisor.push(i);
        }
      }
      // 8. 완전수 판별: 자신을 제외한 모든 약수의 합이 자신과 같은지 확인
      if (divisor.reduce((acc, cur) => acc + cur, 0) === num) {
        // 9. 완전수인 경우: "6 = 1 + 2 + 3" 형태로 출력
        return `${num} = ` + divisor.join(" + ");
      } else {
        // 10. 완전수가 아닌 경우: "8 is NOT perfect." 형태로 출력
        return `${num} is NOT perfect.`;
      }
    })
    // 각 결과를 줄바꿈으로 연결
    .join("\n")
);
