// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require("fs").readFileSync(file).toString().trim().split("\n");

// N: 공부 계획의 수
const N = Number(input[0]);

// 각 계획의 공부 시간 배열
const studyTimes = input[1].split(" ").map(Number);

// ===== 총 소요 시간 계산 =====
// 1. 모든 공부 시간의 합 계산
let totalStudyTime = 0;
for (let i = 0; i < N; i++) {
  totalStudyTime += studyTimes[i];
}

// 2. 휴식 시간 계산
// 각 계획 사이에 8시간 휴식(마지막 계획 후에는 휴식 없음)
// N개의 계획이면 (N - 1)번의 휴식
// 예: 계획1 -> (휴식) -> 계획2 -> (휴식) -> 계획3 (총 2번의 휴식)
const restTime = (N - 1) * 8;

// 3. 총 소요 시간(시간 단위)
const totalHours = totalStudyTime + restTime;

// 4. 일과 시간으로 변환
// 1일 = 24시간
const days = Math.floor(totalHours / 24);
const hours = totalHours % 24;

// ===== 결과 출력 =====
console.log(days, hours);
