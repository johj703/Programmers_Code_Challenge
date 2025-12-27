// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞 뒤 공백 제거
const input = require("fs").readFileSync(file).toString().trim();

// ===== A, B 파싱 =====
let A, B;

if (input.length === 4) {
  // 길이4 : "1010" (A = 10, B = 10)
  A = 10;
  B = 10;
} else if (input.length === 3) {
  // 길이3 : 하나는 10, 하나는 한 자리(예: "102" 또는 "210")

  // startsWith(검색 문자열): 문자열이 특정 문자열로 시작하는지 확인
  // 반환값: true(시작함) 또는 false(시작하지 않음)
  if (input.startsWith("10")) {
    // 앞이 10인 경우(예: "102")
    // input이 "10"으로 시작하면 true
    A = 10;
    B = Number(input[2]); // 세 번째 문자를 숫자로 변환
  } else {
    // 뒤가 10인 경우(예: "210")
    // input이 "10"으로 시작하지 않으면 false
    A = Number(input[0]); // 첫 번째 문자를 숫자로 변환
    B = 10;
  }
} else {
  // 길이2: 각각 한 자리 숫자(예: "37")  A = Number(input[0]);
  A = Number(input[0]);
  B = Number(input[1]);
}

// ===== 결과 출력 =====
console.log(A + B);
