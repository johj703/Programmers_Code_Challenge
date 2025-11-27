// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
const N = Number(require("fs").readFileSync(file).toString().trim());
// N: 현재 년도

// ===== 경과 년수 계산 및 출력 =====
// AI 선도대학 원년(2024년)으로부터 경과한 년수
console.log(N - 2024);
