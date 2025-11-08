// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 줄바꿈으로 분리 후 각 요소를 숫자로 변환
let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((el) => Number(el));
// input = [점수1, 점수2, 점수3, 점수4, 점수5] (숫자 배열)

// ===== 총점 계산 및 출력 =====
// reduce를 사용하여 배열의 모든 요소를 더함
// past: 누적 값(accumulator)
// curr: 현재 값(current value)
// 0: 초기 값
console.log(input.reduce((past, curr) => past + curr, 0));
