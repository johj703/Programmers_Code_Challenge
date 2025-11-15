// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
let L = Number(require("fs").readFileSync(file).toString().trim());

// ===== 계산 및 출력 =====
// 최소 시간 = 거리를 5로 나눈 값의 올림
// Math.ceil(): 올림 함수
console.log(Math.ceil(L / 5));
