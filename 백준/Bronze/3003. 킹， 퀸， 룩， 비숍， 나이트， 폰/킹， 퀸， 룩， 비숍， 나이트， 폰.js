// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 공백으로 분리하여 각 피스의 현재 개수를 가져오기
let input = require("fs").readFileSync(file).toString().trim().split(" ");

// 3. 올바른 체스 피스 구성(킹, 퀸, 룩, 비숍, 나이트, 폰)
const piece = [1, 1, 2, 2, 2, 8];

// 4. 각 피스별로 필요한 개수 차이를 저장할 배열 선언
let arr = [];

// 5. 각 피스별로(올바른 개수 - 현재 개수)를 계산
for (let i = 0; i < piece.length; i++) {
  // 양수: 더 필요한 개수, 음수: 뺴야 할 개수
  arr.push(piece[i] - input[i]);
}

// 6. 결과 출력(각 피스별 필요한 개수 차이)
console.log(arr.join(" "));
