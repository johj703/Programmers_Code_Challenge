// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽고 숫자로 변환
let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 3. 변수 추출
// 낮에 올라가는 거리(미터)
const A = input[0];
// 밤에 미끄러지는 거리(미터)
const B = input[1];
// 나무 막대 높이(미터)
const V = input[2];

// 4. 수학적 공식으로 답 계산
// 마지막 날을 제외하고 (V - A)미터까지 올라가야 함
// 매일 실질적으로 (A - B)미터씩 올라감
// 마지막 날에는 A미터 올라가서 정상 도달 후 미끄러지지 않음
console.log(Math.ceil((V - B) / (A - B)));
