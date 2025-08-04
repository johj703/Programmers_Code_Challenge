// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 숫자의 개수 N 추출
let casesCount = Number(input[0]);

// 4. 두 번째 줄의 숫자 문자열을 각 자릿수로 분리
// ex: "54321" -> ["5", "4", "3", "2", "1"]
let cases = input[1].split("");

// 5. 각 자릿수의 합을 저장할 변수
let sum = 0;

// 6. 각 자릿수를 숫자로 변환하여 합계 계산
for (let i = 0; i < casesCount; i++) {
  // 문자열을 숫자로 변환하여 sum에 누적
  sum = sum + Number(cases[i]);
}

// 7. 최종 합계 출력
console.log(sum);
