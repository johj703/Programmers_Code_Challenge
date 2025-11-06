// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// ===== 데이터 파싱 =====
// 첫째 줄: 현재 시각(시, 분, 초)
const [A, B, C] = input[0].split(" ").map(Number);
// 둘째 줄: 요리 시간(초)
const D = Number(input[1]);

// ===== 시간 계산 =====
// 1단계: 현재 시각을 모두 초로 변환
let totalSeconds = A * 3600 + B * 60 + C;

// 2단계: 요리 시간을 더하기
totalSeconds += D;

// 3단계: 24시간(86400초)을 넘으면 다음 날로 넘어감
totalSeconds %= 86400;

// 4단계: 다시 시/분/초로 변환
const hour = Math.floor(totalSeconds / 3600); // 시
const minute = Math.floor((totalSeconds % 3600) / 60); // 분
const second = totalSeconds % 60; // 초

// ===== 결과 출력 =====
console.log(`${hour} ${minute} ${second}`);
