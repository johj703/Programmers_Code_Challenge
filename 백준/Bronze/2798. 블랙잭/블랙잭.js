// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 카드 개수 N과 목표값 M 추출
const [N, M] = input[0].split(" ").map((x) => Number(x));

// 4. 두 번째 줄에서 카드 숫자들을 배열로 추출
const cardNum = input[1].split(" ").map((x) => Number(x));

// 5. M 이하인 3장 카드 합들을 저장할 배열
let sumList = [];

// 6. 첫 번째 카드 선택(index i)
for (let i = 0; i < N; i++) {
  const pivot = cardNum[i];

  // 7. 두 번째 카드 선택(index j, i 다음부터)
  for (let j = i + 1; j < N; j++) {
    const second = cardNum[j];

    // 8. 세 번째 카드 선택(index k, j 다음부터)
    for (let k = j + 1; k < N; k++) {
      const third = cardNum[k];

      // 9.선택된 3장 카드의 합 계산
      const sum = pivot + second + third;

      // 10. 합이 M 이하인 경우만 후보에 추가
      if (sum <= M) {
        sumList.push(sum);
      } else {
        // M을 초과하면 건너뛰기
        continue;
      }
    }
  }
}
// 11. M 이하인 합들 중 최댓값 출력
const answer = Math.max(...sumList);
console.log(answer);
