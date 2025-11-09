// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// ===== 데이터 파싱 =====
// 첫째 줄: L (1m²당 사람 수), P (파티장 면적 m²)
const [density, dimensions] = input[0].split(" ").map(Number);

// 실제 참가자 수 = 1m²당 사람 수 × 파티장 면적
const actualParticipants = density * dimensions;

// 둘째 줄: 5개 신문이 보도한 참가자 수
const partys = input[1].split(" ").map(Number);

// ===== 오차 계산 =====
// 각 신문의 오차 = 신문 추정 - 실제 참가자 수
const result = [];
for (let newspaper of partys) {
  result.push(newspaper - actualParticipants);
}

// ===== 결과 출력 =====
// 5개의 오차를 공백으로 구분하여 출력
console.log(result.join(" "));
