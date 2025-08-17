// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 공백 제거
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄(단어 개수)을 제외하고 실제 단어들만 배열에 저장
const arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}

// 4. 그룹 단어 개수를 저장할 변수(초기값: 모든 단어가 그룹 단어라고 가정)
let answer = arr.length;

// 5. 현재까지 나타난 문자들을 저장할 임시 문자열
let temp = "";

// 6. 각 단어를 검사하여 그룹 단어인지 확인
arr.forEach((item) => {
  // 7. 각 단어의 첫 번째 문자로 temp 초기화
  temp = item[0];

  // 8. 두 번째 문자부터 끝까지 검사
  for (let i = 1; i < item.length; i++) {
    // 9. 핵심 로직: 현재 문자가 이전에 나타났지만 바로 앞 문자와 다르면 그룹 단어가 아님
    if (temp.includes(item[i]) && item[i - 1] !== item[i]) {
      // 10. 그룹 단어가 아니므로 카운트를 감소하고 다음 단어로 이동
      answer--;
      break;
    }
    // 11. 현재 문자를 temp에 추가(나타난 문자 기록)
    temp += item[i];
  }
});

// 12. 그룹 단어의 총 개수 출력
console.log(answer);
