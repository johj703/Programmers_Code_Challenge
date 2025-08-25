// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

let count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  let num = Number(input[i]);

  let a = 0,
    b = 0,
    c = 0,
    d = 0;

  if (num >= 25) {
    // 쿼터 개수
    a = Math.floor(num / 25);
    // 남은 금액
    num %= 25;
  }
  if (num >= 10) {
    // 다임 개수
    b = Math.floor(num / 10);
    // 남은 금액
    num %= 10;
  }
  if (num >= 5) {
    // 니켈 개수
    c = Math.floor(num / 5);
    // 남은 금액
    num %= 5;
  }
  if (num >= 1) {
    // 페니 개수
    d = Math.floor(num / 1);
    // 남은 금액
    num %= 1;
  }
  console.log(a, b, c, d);
}
