// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
const B = Number(require("fs").readFileSync(file).toString().trim());
// B: 부가가치세 포함 가격

// ===== 원래 가격 계산 및 출력 =====
// A = B / 1.1 = B × 10 / 11
// 정수 연산으로 부동소수점 오차 방지
// B는 11의 배수이므로 (B × 10) / 11은 항상 정수
console.log((B * 10) / 11);
