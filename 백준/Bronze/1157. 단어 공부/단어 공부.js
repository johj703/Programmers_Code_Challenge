// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim().toUpperCase();

// 3. 각 알파펫의 개수를 저장할 객체
let charCount = {};

// 4. 각 문자의 개수를 세기
for (let char of input) {
  charCount[char] = (charCount[char] || 0) + 1;
}

// 5. 최대 개수와 해당 문자들 찾기
let maxCount = Math.max(...Object.values(charCount));
let maxChars = [];

// 6. 최대 개수를 가진 모든 문자 찾기
for (let char in charCount) {
  if (charCount[char] === maxCount) {
    maxChars.push(char);
  }
}

// 7. 최대 개수를 가진 문자가 1개면 그 문자를, 2개 이상이면 "?" 출력
console.log(maxChars.length === 1 ? maxChars[0] : "?");
