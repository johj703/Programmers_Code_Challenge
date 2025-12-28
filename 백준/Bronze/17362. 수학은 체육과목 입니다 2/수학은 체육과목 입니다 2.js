// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞 뒤 공백 제거
const n = Number(require("fs").readFileSync(file).toString().trim());

// ===== 패턴 정의 =====
// 손가락 세기 패턴: 1-2-3-4-5-4-3-2 (주기: 8)
// n % 8의 결과(0~7)를 index로 사용
const pattern = [2, 1, 2, 3, 4, 5, 4, 3];

// ===== 결과 출력 =====
console.log(pattern[n % 8]);
