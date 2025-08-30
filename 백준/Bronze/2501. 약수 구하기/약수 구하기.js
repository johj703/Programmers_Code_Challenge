// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽고 N과 K 추출
// 입력 형식: "N K"(ex: "6 3")
let [N, K] = require("fs").readFileSync(file).toString().split(" ").map(Number);

// 3. N의 약수들을 저장할 배열 초기화
let answer = [];

// 4. 1부터 N까지 모든 수를 확인하여 약수 찾기
for (let i = 1; i <= N; i++) {
  // 5. i가 N의 약수인지 확인(나머지가 0이면 약수)
  if (N % i === 0) {
    // 6. 약수를 배열에 추가(오름차순으로 자동 정렬됨)
    answer.push(i);
  }
}

// 7. K번째 약수가 존재하는지 확인
if (answer.length < K) {
  // 8. 약수의 개수가 K보다 작으면 0 출력
  console.log(0);
} else {
  // 9. K번째 약수 출력(배열은 0부터 시작하므로 K-1 index)
  console.log(answer[K - 1]);
}
