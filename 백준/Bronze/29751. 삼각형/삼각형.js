// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거
const input = require("fs").readFileSync(file).toString().trim();

// ===== 데이터 파싱 =====
// 공백으로 분리하여 밑변(W)과 높이(H)를 숫자로 변환
const [W, H] = input.split(" ").map(Number);

// ===== 삼각형 넓이 계산 =====
// 삼각형 넓이 = (밑변 × 높이) / 2
const area = (W * H) / 2;

// ===== 결과 출력 =====
// toFixed(1): 소수점 첫째 자리까지 출력
console.log(area.toFixed(1));
