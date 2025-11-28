// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
const x = Number(require("fs").readFileSync(file).toString().trim());
// x: 찾고자 하는 위치 (1 - index)

// ===== x번째 문자 찾기 =====
// UOS는 3글자씩 반복
// x를 3으로 나눈 나머지로 판단

const remainder = x % 3;

// 나머지에 따라 문자 결정
if (remainder === 1) {
  console.log("U");
} else if (remainder === 2) {
  console.log("O");
} else {
  // remainder === 0
  console.log("S");
}
