// 1. 플랫폼에 따른 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

// 2. 두 번째 줄에서 점수들을 숫자 배열로 변환
// ex: "40 80 60" -> [40, 80, 60]
const x = input[1].split(" ").map((v) => +v);

// 3. 점수 중 최대값 M 찾기
// Math.max(...x) = Math.max(40, 80, 60) = 80
const m = Math.max(...x);

// 4. 모든 점수를 새로운 방식으로 계산(점수 / M * 100)
// [40, 80, 60] -> [40 / 80 * 100, 80 / 80 * 100, 60 / 80 * 100] = [50, 100, 75]
const newScore = x.map((item) => {
  return (item / m) * 100;
});

// 5. 새로운 점수들의 합계 계산
let sum = 0;
for (let i = 0; i < newScore.length; i++) {
  sum += newScore[i];
}

// 6. 새로운 평균 출력(합계 / 과목 수)
// sum / input[0]: input[0]은 문자열이므로 숫자로 변환 필요
console.log(sum / Number(input[0]));
