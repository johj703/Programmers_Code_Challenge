// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
const [T1, T2] = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split(" ")
  .map(Number);
// T1: 첫 번째 팀원의 풀이 시간
// T2: 두 번째 팀원의 풀이 시간

// ===== 형진이가 필요한 최대 시간 계산 및 출력 =====
// 다른 두 팀원 중 가장 빠른 시간 이하로 풀면 형진이 노트북 사용 가능
// 동점일 경우 형진이가 우선권을 가지므로 같은 시간도 가능
console.log(Math.min(T1, T2));
