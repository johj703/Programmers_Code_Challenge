const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 입력을 줄 단위로 분리
const lines = input.split("\n");

// 첫 번째 줄에서 n과 x 추출
const [total, limit] = lines[0].split(" ").map(Number);

// 두 번째 줄에서 수열 추출
const numbers = lines[1].split(" ").map(Number);

// x보다 작은 수들을 찾아서 출력
let result = "";
for (let i = 0; i < total; i++) {
  if (numbers[i] < limit) {
    result += numbers[i] + " ";
  }
}

// 마지막 공백 제거
console.log(result.trim());
