// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, \r 제거 및 앞뒤 공백 제거 후 줄바꿈으로 분리, 숫자로 변환
const scores = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);
// scores: 5명의 학생 점수 배열

// ===== 40점 미만 처리 및 평균 계산 =====
// reduce 동작 과정:
// 초기값 0부터 시작해서 각 점수를 순회
// 각 점수가 40점 미만이면 40점으로 조정
// 조정된 점수를 누적값에 계속 더해감
// 최종적으로 모든 점수의 총합을 반환
const totalSum = scores.reduce((totalScore, currentScore) => {
  // 40점 미만이면 40점, 아니면 원래 점수
  const adjustedScore = currentScore < 40 ? 40 : currentScore;
  return totalScore + adjustedScore;
}, 0); // 0은 초기값

// 평균 계산: 총합 / 5명
const averageScore = totalSum / 5;

// ===== 결과 출력 =====
console.log(averageScore);
