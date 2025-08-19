// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 전처리
let input = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 변환
  .trim() // 앞 뒤 공백 제거
  .split("\n") // 줄 바꿈으로 분리하여 배열 생성
  .map((item) => item.split(" ").map(Number)); // 각 줄을 공백으로 분리 후 숫자로 변환

// 3. 첫 번째 줄에서 행렬 크기 추출 및 제거
// N: 행의 개수, M: 열의 개수
const [N, M] = input.shift();

// 4. 결과를 저장할 N x M 크기의 2차원 배열 생성
let arr = new Array(N).fill().map(() => new Array(M).fill(0));

// 5. 두 행렬의 덧셈 수행
// 행 반복
for (let i = 0; i < N; i++) {
  // 열 반복
  for (let j = 0; j < M; j++) {
    // 행렬 A의 [i][j] + 행렬 B의 [i][j]
    // 행렬 A: input[i] (0~N-1 번째 줄)
    // 행렬 B: input[i+N] (N~2N-1 번째 줄)
    arr[i][j] = input[i][j] + input[i + N][j];
  }
}

// 6. 결과 출력을 위한 문자열 생성
let answer = "";

// 7. 결과 행렬을 문자열로 변환
// 각 행에 대해
for (let i = 0; i < arr.length; i++) {
  // 각 열에 대해
  for (let j = 0; j < arr[0].length; j++) {
    // 숫자와 공백 추가
    answer += arr[i][j] + " ";
  }
  // 행 끝에 줄바꿈 추가
  answer += "\n";
}

// 8. 마지막 줄바꿈 제거 후 출력
console.log(answer.trim());
