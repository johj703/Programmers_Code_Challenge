// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, \r 제거 후 앞뒤 공백 제거를 한 후 줄바꿈으로 분리
const input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// 첫 줄: 케이크 수 a = (a.x, a.y, a.z)
const [ax, ay, az] = input[0].split(" ").map(Number);

// 둘째 줄: 케이크 수 b = (c.x, c.y, c.z)
const [cx, cy, cz] = input[1].split(" ").map(Number);

/* ===== 케이크 수 b 계산 =====
 연산 정의: a 🍰 b = (a.z + b.x, a.y + b.y, a.x + b.z) = c

 각 성분을 비교:
 a.z + b.x = c.x -> b.x = c.x - a.z
 a.y × b.y = c.y -> b.y = c.y / a.y
 a.x + b.z = c.z -> b.z = c.z - a.x
*/
const bx = cx - az;
const by = cy / ay;
const bz = cz - ax;

// ===== 결과 출력 =====
console.log(bx, by, bz);
