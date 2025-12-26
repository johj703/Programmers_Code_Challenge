// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞 뒤 공백 제거
const input = require("fs").readFileSync(file).toString().trim();

// ===== 입력 값 =====
// 4명의 스킬 레벨(이미 정렬되어 입력됨: A <= B <= C <= D)
const [A, B, C, D] = input.split(" ").map(Number);

// ===== 최적 팀 구성 =====
// (A, D) vs (B, C) 조합이 차이를 최소화
// 가장 약한 선수 + 가장 강한 선수 vs 중간 선수 + 중간 선수
const team1 = A + D;
const team2 = B + C;

// ===== 차이 계산 및 출력 =====
const diff = Math.abs(team1 - team2);
console.log(diff);
