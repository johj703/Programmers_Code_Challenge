// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 공백 제거
let input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// 3. 등급별 과목 평점 매핑 객체(문제에서 주어진 표)
const grades = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0,
};

// 4. 전공 평점 계산을 위한 변수 초기화
// 학점의 총 합(분모)
let totalCredit = 0;
// (학점 x 과목 평점)의 총합(분자)
let totalScore = 0;

// 5. 정확히 20줄의 과목 데이터 처리(문제 조건)
for (let i = 0; i < 20; i++) {
  // 6. 각 줄을 공백으로 분리: [과목명, 학점, 등급]
  const [subject, credit, grade] = input[i].split(" ");

  // 7. P등급이 아닌 경우만 전공 평점 계산에 포함
  // P등급: Pass/Fail에서 Pass를 의미, 계산에서 제외
  // F등급: 0.0점으로 계산에 포함
  if (grade !== "P") {
    // 8. 학점을 문자열에서 숫자로 변환
    const creditNum = parseFloat(credit);

    // 9. 총 학점에 현재 과목의 학점 누락
    totalCredit += creditNum;

    // 10. 총 점수에(현재 과목 학점 x 해당 등급의 평점) 누적
    totalScore += creditNum * grades[grade];
  }
}

// 전공 평점 계산 및 출력
// 전공 평점 = (학점 x 과목 평점)의 합 / 학점의 총합
// toFixed(6): 소수점 6자리까지 출력(문제 요구사항)
console.log((totalScore / totalCredit).toFixed(6));
