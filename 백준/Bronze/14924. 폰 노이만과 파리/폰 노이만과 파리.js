// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞 뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [S, T, D] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// ===== 파리의 이동거리 계산 =====
/*
 두 기차가 만나는 시간 = 거리 / (두 기차의 상대 속도)
 두 기차가 서로를 향해 달리므로 상대 속도 = 2 × S
    예: 거리 200마일, 기차 속도 50마일/h -> 200 / (2 × 50) = 2시간

 파리의 총 이동거리 = 파리의 속도 × 두 기차가 만나는 시간
 F = T × (D / (2 × S)) = (T × D) / (2 × S)
    예: 파리 속도 75마일/h, 시간 2시간 -> 75 × 2 = 150마일
*/
const F = (T * D) / (2 * S);

// ===== 결과 출력 =====
// 파리의 총 이동거리 출력
console.log(F);
