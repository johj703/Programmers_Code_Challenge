// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 숫자로 변환
let N = Number(require("fs").readFileSync(file).toString().trim());

// 3. 위쪽 부분: 1부터 N까지 별 증가(1, 3, 5, 7, 9개)
for (let i = 1; i < N; i++) {
  // 공백 개수: N - 1
  let blank = " ".repeat(N - i);
  // 별 개수: 2 * i - 1(홀수 개)
  let stars = "*".repeat(2 * i - 1);
  console.log(blank + stars);
}

// 4. 아래쪽 부분: N-1부터 1까지 별 감소(7, 5, 3, 1개)
for (let j = N; j > 0; j--) {
  // 공백 개수: N - j
  let blank = " ".repeat(N - j);
  // 별 개수: 2 * j - 1(홀수 개)
  let stars = "*".repeat(2 * j - 1);
  console.log(blank + stars);
}
