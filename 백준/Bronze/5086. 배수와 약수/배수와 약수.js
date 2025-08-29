// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 각 테스트 케이스를 순서대로 처리
for (let i = 0; i < input.length; i++) {
    
  // 4. 각 줄에서 두 숫자 a, b를 추출
  const [a, b] = input[i].split(" ").map(Number);

  // 5. 종료 조건 확인(0 0이 입력되면 프로그램 종료)
  if (a === 0 && b === 0) break;

  // 6. 첫 번째 숫자가 두 번째 숫자의 약수인지 확인
  if (b % a === 0) {
    // b가 a로 나누어 떨어지면 a는 b의 약수
    console.log("factor");
    // 7. 첫 번째 숫자가 두 번째 숫자의 배수인지 확인
  } else if (a % b === 0) {
    // a가 b로 나누어 떨어지면 a는 b의 배수
    console.log("multiple");
    // 8. 약수도 배수도 아닌 경우
  } else {
    console.log("neither");
  }
}
