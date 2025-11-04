// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열로 변환
let input = require("fs").readFileSync(file).toString();
// input = "5"(문자열)

// ===== 결과 문자열 생성 =====
// 결과를 저장할 문자열 (한 번에 출력하기 위해)
let answer = "";

// 1부터 N까지 반복
for (let i = 1; i <= input; i++) {
  // 문자열 비교 시 자동으로 숫자로 변환됨
  answer += i + "\n";
}

// ===== 결과 출력 =====
// 누적된 문자열을 한 번에 출력
console.log(answer);
