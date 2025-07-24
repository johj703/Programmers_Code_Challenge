// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
// 예제 입력
// 5 4
// 1 2 3
// 3 4 4
// 1 4 1
// 2 2 2
const input = require("fs").readFileSync(file).toString().split("\n");

// 3. 첫 번째 줄에서 N(바구니 개수)과 M(공 넣는 회수) 추출
// input[0] = "5 4" -> N=5, M=4
const [N, M] = input[0].split(" ").map(Number);

// 4. N개의 바구니를 0으로 초기화(0 = 공이 없음)
// baskets = [0, 0, 0, 0, 0] (5개 바구니)
const baskets = new Array(N).fill(0);

// 5. M번 공 넣기 작업 수행
for (let i = 1; i <= M; i++) {
  // 각 줄에서 시작 바구니, 끝 바구니, 공 번호 추출
  // ex: "1 2 3" -> start=1, end=2, ball=3
  const [start, end, ball] = input[i].split(" ").map(Number);
  
  // 시작 바구니부터 끝 바구니까지 같은 번호의 공 넣기
  for (let j = start; j <= end; j++) {
    // 바구니 번호는 1부터 시작하지만 배열 index는 0부터 시작
    // 따라서 j-1을 index로 사용
    baskets[j - 1] = ball;
  }
}

// 6. 최종 결과를 공백으로 구분하여 출력
// [1, 2, 1, 1, 0] -> "1 2 1 1 0"
console.log(baskets.join(" "));
