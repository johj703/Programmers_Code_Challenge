// 1. 플랫폼에 따른 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
const input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 N(바구니 개수)과 M(뒤집기 횟수) 추출
const [N, M] = input[0].split(" ").map(Number);

// 4. N개의 바구니를 1부터 N까지 순서대로 초기화
// [1, 2, 3, 4, 5] (N=5인 경우)
const baskets = new Array(N).fill(0).map((n, index) => index + 1);

// 5. M번 바구니 뒤집기 작업 수행
for (let i = 1; i <= M; i++) {
  // 각 줄에서 뒤집을 범위 추출(start부터 end까지)
  const [start, end] = input[i].split(" ").map(Number);

  // 현재 바구니 상태를 복사본으로 저장(원본 보존용)
  const tmpBaskets = [...baskets];

  // start부터 end까지 범위를 역순으로 배치
  for (let j = start; j <= end; j++) {
    // 핵심 공식: baskets[j-1] = tmpBaskets[end + start - j - 1]
    // j번째 위치에 (end + start - j)번째 값을 배치(역순 효과)
    baskets[j - 1] = tmpBaskets[end + start - j - 1];
  }
}

// 6. 최종 결과를 공백으로 구분하여 출력
console.log(baskets.join(" "));
