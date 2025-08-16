// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 공백 제거
let input = require("fs").readFileSync(file).toString().trim();

// 3. 크로아티아 알파벳 목록(긴 것부터 정렬 - dz=를 먼저 처리하기 위해서)
const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// 4. 크로아티아 알파벳을 하나의 문자로 치환
for (let i = 0; i < croatia.length; i++) {
  // 크로아티아 알페벳을 모두 "X"로 치환
  input = input.split(croatia[i]).join("X");
}

// 5. 치환된 문자열의 길이가 크로아티아 알페벳의 개수
console.log(input.length);
