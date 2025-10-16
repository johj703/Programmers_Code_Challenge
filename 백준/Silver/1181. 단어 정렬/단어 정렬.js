// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 단어 개수 추출
let n = Number(input[0]);

// 4. 단어를 저장할 배열 초기화
let arr = [];

// 5. 각 단어를 배열에 저장
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

// 6. Set을 사용하여 중복 제거
// Set은 중복된 값을 자동으로 제거하는 자료구조
const newArr = [...new Set(arr)];

// 7. 다중 조건 정렬
newArr.sort((a, b) => {
  // 8. 길이가 다르면 길이 기준 오름차순 정렬
  if (a.length != b.length) {
    return a.length - b.length;
  } else {
    // 9. 길이가 같으면 사전순으로 정렬
    if (a < b) {
      // a가 사전순으로 앞에 오면 -1
      return -1;
    } else if (a > b) {
      // b가 사전순으로 앞에 오면 1
      return 1;
    } else {
      // 같으면 0
      return 0;
    }
  }
});

// 10. 정렬된 단어 출력
for (let word of newArr) {
  console.log(word);
}
