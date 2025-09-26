// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 N(학생 수)과 k(상 받은 인원) 추출
let [N, k] = input[0].split(" ").map(Number);

// 4. 두 번째 줄에서 점수들을 숫자 배열로 변환
const scores = input[1].split(" ").map(Number);

// 5. 점수를 내림차순으로 정렬(높은 점수부터)
scores.sort((a, b) => b - a);

// 6. k번째로 높은 점수 출력(커트라인)
// k번째 = index k-1
console.log(scores[k - 1]);
