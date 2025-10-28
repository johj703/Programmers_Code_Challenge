// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// ===== 데이터 파싱 =====
// 배열의 각 원소를 숫자로 변환하고 구조분해할당으로 a, b에 저장
const [a, b] = input.map(Number);
// map(Number): 배열의 각 문자열을 숫자로 변환
// ["3", "5"] → [3, 5]
// [a, b] = [3, 5] → a=3, b=5

// ===== 결과 출력 =====
console.log(a + b);
