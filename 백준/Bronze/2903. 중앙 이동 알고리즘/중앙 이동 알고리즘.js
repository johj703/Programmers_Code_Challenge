// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim();

// 3. 과정을 거친 횟수 N을 정수로 변환
let N = parseInt(input);

// 4. 한 변에 있는 점의 개수 초기화(초기 상태는 2개)
let dot = 2;

// 5. N번 과정을 거치며 한 변의 점 개수 계산
for (let i = 0; i < N; i++) {
  // 각 과정마다 기존 점 사이사이에 새로운 점이 추가됨
  // i번째 과정에서 추가되는 점의 개수는 2^i개
  dot += Math.pow(2, i);
}

// 6. 전체 점의 개수 계산 및 출력
// 정사각형 격자이므로(한 변의 점 개수)^2
console.log(Math.pow(dot, 2));
