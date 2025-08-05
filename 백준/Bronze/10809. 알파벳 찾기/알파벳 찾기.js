// 1. 플랫폼에 따른 입력 파일 경로 설정
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 문자열로 변환
let input = require("fs").readFileSync(file).toString().trim();

// 3. a부터 z까지 각 알파벳의 첫 등장 위치를 저장할 배열 생성
let asciiArr = [];

// 4. ASCII 코드 97(a)부터 122(z)까지 반복
for (let i = 97; i <= 122; i++) {
  asciiArr.push(input.indexOf(String.fromCharCode(i)));
}

// 5. 결과를 공백으로 구분하여 출력
console.log(asciiArr.join(" "));
